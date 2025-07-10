import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {

    const [authTokens, setAuthTokens] = useState(() => {
        localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens")) : null
    });

    const [user, setUser] = useState(() => {
        localStorage.getItem("authTokens") ? jwt_decode(localStorage.getItem("authTokens")) : null
    });

    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

     const registerUser = async (data) => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/v1/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    full_name: data.full_name,
                    username: data.username,
                    phone_number: data.phone_number.toString(),
                    email: data.email,
                    referrer: data.referrer || null,
                    password: data.password,
                    password2: data.password2
                }),
            });

            const responseData = await response.json();

            if (response.ok) {
                navigate("/login");
                swal.fire({
                    title: "Registration Successful, Login Now",
                    icon: "success",
                    toast: true,
                    timer: 6000,
                    position: 'top-right',
                    timerProgressBar: true,
                    showConfirmButton: false,
                });
            } else {
                const errorMsg = Object.entries(responseData)
                .map(([field, errors]) => `${field}: ${errors.join(', ')}`)
                .join('\n');
            throw new Error(errorMsg);
            }
        } catch (error) {
            console.error("Registration error:", error);
            swal.fire({
                title: "Registration Failed",
                text: error.message || "Please check your information and try again",
                icon: "error",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            });
        }
    };

    const loginUser = async (data) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/v1/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });

    // First check the response content type
    const contentType = response.headers.get("content-type");
    
    if (!response.ok) {
      // Handle non-JSON error responses
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
      }
      
      // Handle JSON error responses
      const errorData = await response.json();
      const errorMsg = Object.entries(errorData)
        .map(([field, errors]) => `${field}: ${Array.isArray(errors) ? errors.join(', ') : errors}`)
        .join('\n');
      throw new Error(errorMsg);
    }

    // Handle successful response
    const responseData = await response.json();
    
    navigate("/dashboard");
    setUser(jwt_decode(responseData.access));
    swal.fire({
      title: `Welcome Back, ${user?.full_name || 'User'}`,
      icon: "success",
      toast: true,
      timer: 6000,
      position: 'top-right',
      timerProgressBar: true,
      showConfirmButton: false,
    });
    
    localStorage.setItem('authTokens', JSON.stringify(responseData));
    setAuthTokens(responseData);
    setUser(jwt_decode(responseData.access));
    
    return responseData;
    
  } catch (error) {
    console.error("Login error:", error);
    swal.fire({
      title: "Login Failed",
      text: error.message || "Please check your information and try again",
      icon: "error",
      toast: true,
      timer: 6000,
      position: 'top-right',
      timerProgressBar: true,
      showConfirmButton: false,
    });
    throw error; // Re-throw to allow LoginPage to handle it
  }
};

    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem("authTokens")
        navigate("/login")
        swal.fire({
            title: "You have been logged out...",
            icon: "success",
            toast: true,
            timer: 6000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
        })
    }

    const contextData = {
        authTokens,
        setAuthTokens,
        user,
        setUser,
        registerUser,
        loginUser,
        logoutUser
    };

    useEffect(() => {
        if(authTokens) {
            setUser(jwt_decode(authTokens.access));
        }
        setLoading(false);
    }, [authTokens, loading])

    return <AuthContext.Provider value={contextData}>
        {loading ? null : children}
    </AuthContext.Provider>
};