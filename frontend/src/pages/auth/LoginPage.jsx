import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { Helmet } from "react-helmet";
import swal from "sweetalert2";

function LoginPage() {
  const [togglePassword, setTogglePassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { loginUser } = useContext(AuthContext);

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    try {
      await loginUser({
        email: formData.email,
        password: formData.password,
      });
    } catch (error) {
      console.error("Login error:", error);
      
      // Handle API validation errors
      if (error.response?.data) {
        const apiErrors = error.response.data;
        const fieldErrors = {};
        
        if (apiErrors.email) {
          fieldErrors.email = Array.isArray(apiErrors.email) 
            ? apiErrors.email.join(', ') 
            : apiErrors.email;
        }
        
        if (apiErrors.password) {
          fieldErrors.password = Array.isArray(apiErrors.password) 
            ? apiErrors.password.join(', ') 
            : apiErrors.password;
        }
        
        if (apiErrors.non_field_errors) {
          swal.fire({
            title: "Login Failed",
            text: Array.isArray(apiErrors.non_field_errors)
              ? apiErrors.non_field_errors.join(', ')
              : apiErrors.non_field_errors,
            icon: "error"
          });
        }
        
        setErrors(fieldErrors);
      } else {
        swal.fire({
          title: "Login Error",
          text: error.message || "An unexpected error occurred",
          icon: "error"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - GreennSeed</title>
      </Helmet>
      <div className="min-h-screen flex">
        {/* Left side */}
        <div
          className="hidden lg:flex lg:w-1/2 green-gradient relative overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/bg.jpg")' }}
        >
          <div className="absolute inset-0 leaf-pattern opacity-10" />
          <div className="relative w-full h-full flex flex-col items-center justify-center p-12 text-center">
            <div className="mb-8">
              <img src="/images/logo.png" alt="GreennSeed Logo" className="h-24 w-fit" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Welcome to GreennSeed
            </h1>
            <p className="text-green-100 text-xl max-w-md">
              Grow your future with sustainable investments
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-800/20 to-transparent" />
          </div>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 mobile-glass">
          <div className="w-full max-w-md">
            <div className="bg-gray-900 backdrop-blur-lg rounded-2xl shadow-xl p-8 space-y-8">
              <div className="text-center space-y-2">
                <div className="inline-block p-3 rounded-full mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-bronze-400 rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-300" />
                      <div className="relative">
                        <img
                          src="/images/logo.png"
                          alt="GreennSeed Logo"
                          className="h-14 sm:h-16 transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white">Sign In</h2>
                <p className="text-gray-400">
                  Welcome back! Please enter your details
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <div className="input-focus-effect rounded-lg">
                      <div className="relative">
                        <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className={`w-full pl-12 pr-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-0 focus:outline-none ${
                            errors.email ? '!border-red-500' : ''
                          }`}
                          required
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                      Password
                    </label>
                    <div className="input-focus-effect rounded-lg">
                      <div className="relative">
                        <i className="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type={togglePassword ? "text" : "password"}
                          id="password"
                          name="password"
                          className={`w-full pl-12 pr-12 py-3 bg-gray-50 border-0 rounded-lg focus:ring-0 focus:outline-none ${
                            errors.password ? '!border-red-500' : ''
                          }`}
                          required
                          placeholder="••••••••"
                          value={formData.password}
                          onChange={handleChange}
                        />
                        <button
                          type="button"
                          className="absolute right-4 top-1/2 -translate-y-1/2"
                          onClick={() => setTogglePassword(!togglePassword)}
                        >
                          {!togglePassword ? (
                            <i className="fas fa-eye text-gray-400 hover:text-gray-600" />
                          ) : (
                            <i className="fas fa-eye-slash text-gray-400 hover:text-gray-600" />
                          )}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="remember"
                      className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                      checked={formData.remember}
                      onChange={handleChange}
                    />
                    <span className="text-sm text-gray-400">Remember me</span>
                  </label>
                  <Link
                    to="/reset-password"
                    className="text-sm font-medium text-green-600 hover:text-green-500"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 py-3 px-4 green-gradient text-white rounded-lg font-medium 
                            shadow-lg shadow-green-500/30 hover:shadow-green-500/40 
                            focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 
                            transition-all duration-300 transform hover:-translate-y-0.5
                            disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <i className="fas fa-circle-notch animate-spin" />
                      Signing In...
                    </span>
                  ) : (
                    "Sign In"
                  )}
                </button>

                <p className="text-center text-sm text-gray-400 mt-4">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="font-medium text-green-600 hover:text-green-500"
                  >
                    Create account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;