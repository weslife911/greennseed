import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import AuthContext from '../../context/AuthContext'
import { Helmet } from "react-helmet"

function RegisterPage() {
  const { registerUser } = useContext(AuthContext);
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    username: "",
    phone_number: "",
    email: "",
    referrer: "",
    password: "",
    password2: ""
  });

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.full_name.trim()) newErrors.full_name = "Full name is required";
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.phone_number) newErrors.phone_number = "Phone number is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.password2) newErrors.password2 = "Passwords don't match";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep1()) {
      setCurrentStep(2);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep2()) return;
    
    setIsSubmitting(true);
    try {
      await registerUser(formData);
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
      <title>
        Register - GreennSeed
      </title>
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
            <img src="/images/logo.png" alt="GreennSeed Logo" className="h-24 w-24" />
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
              <h2 className="text-3xl font-bold text-gray-200">Create Account</h2>
              <p className="text-gray-400">
                Join us and start your investment journey
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1 */}
              <div className={`space-y-4 ${currentStep === 1 ? 'block' : 'hidden'}`}>
                <div className="space-y-2">
                  <label htmlFor="full_name" className="block text-sm font-medium text-gray-300">
                    Full Name
                  </label>
                  <div className="input-focus-effect rounded-lg">
                    <div className="relative">
                      <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="full_name"
                        name="full_name"
                        className={`w-full pl-12 pr-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-0 focus:outline-none ${errors.full_name ? 'border-red-500' : ''}`}
                        required
                        placeholder="John Doe"
                        value={formData.full_name}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.full_name && <p className="text-red-500 text-xs mt-1">{errors.full_name}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                    Username
                  </label>
                  <div className="input-focus-effect rounded-lg">
                    <div className="relative">
                      <i className="fas fa-at absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="username"
                        name="username"
                        className={`w-full pl-12 pr-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-0 focus:outline-none ${errors.username ? 'border-red-500' : ''}`}
                        required
                        placeholder="johndoe"
                        value={formData.username}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone_number" className="block text-sm font-medium text-gray-300">
                    MoMo/OM Number
                  </label>
                  <div className="input-focus-effect rounded-lg">
                    <div className="relative">
                      <i className="fas fa-phone absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="number"
                        id="phone_number"
                        name="phone_number"
                        className={`w-full pl-12 pr-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-0 focus:outline-none ${errors.phone_number ? 'border-red-500' : ''}`}
                        required
                        placeholder="671234567"
                        value={formData.phone_number}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.phone_number && <p className="text-red-500 text-xs mt-1">{errors.phone_number}</p>}
                  </div>
                </div>

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
                        className={`w-full pl-12 pr-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-0 focus:outline-none ${errors.email ? 'border-red-500' : ''}`}
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="referrer" className="block text-sm font-medium text-gray-300">
                    Referrer (Optional)
                  </label>
                  <div className="input-focus-effect rounded-lg">
                    <div className="relative">
                      <i className="fas fa-user-plus absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="referrer"
                        name="referrer"
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-0 focus:outline-none"
                        placeholder="Referrer username"
                        value={formData.referrer}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleNextStep}
                  className="w-full mt-6 py-3 px-4 green-gradient text-white rounded-lg font-medium 
                            shadow-lg shadow-green-500/30 hover:shadow-green-500/40 
                            focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 
                            transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Continue
                </button>
              </div>

              {/* Step 2 */}
              <div className={`space-y-4 ${currentStep === 2 ? 'block' : 'hidden'}`}>
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
                        className={`w-full pl-12 pr-12 py-3 bg-gray-50 border-0 rounded-lg focus:ring-0 focus:outline-none ${errors.password ? 'border-red-500' : ''}`}
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
                        {!togglePassword ? <i className="fas fa-eye text-gray-400 hover:text-gray-600" /> : <i className="fas fa-eye-slash text-gray-400 hover:text-gray-600" />}
                      </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="password2" className="block text-sm font-medium text-gray-300">
                    Confirm Password
                  </label>
                  <div className="input-focus-effect rounded-lg">
                    <div className="relative">
                      <i className="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type={togglePassword ? "text" : "password"}
                        id="password2"
                        name="password2"
                        className={`w-full pl-12 pr-12 py-3 bg-gray-50 border-0 rounded-lg focus:ring-0 focus:outline-none ${errors.password2 ? 'border-red-500' : ''}`}
                        required
                        placeholder="••••••••"
                        value={formData.password2}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                        onClick={() => setTogglePassword(!togglePassword)}
                      >
                        {!togglePassword ? <i className="fas fa-eye text-gray-400 hover:text-gray-600" /> : <i className="fas fa-eye-slash text-gray-400 hover:text-gray-600" />}
                      </button>
                    </div>
                    {errors.password2 && <p className="text-red-500 text-xs mt-1">{errors.password2}</p>}
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <a href="#" className="text-green-600 hover:text-green-500">
                      Terms
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-green-600 hover:text-green-500">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="w-1/3 py-3 px-4 bg-gray-600 text-white rounded-lg font-medium 
                              hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 
                              transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 green-gradient text-white rounded-lg font-medium 
                              shadow-lg shadow-green-500/30 hover:shadow-green-500/40 
                              focus:outline-none focus:ring-2 focus:ring-green-500 
                              transition-all duration-300 disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <i className="fas fa-circle-notch animate-spin" />
                        Creating Account...
                      </span>
                    ) : (
                      "Create Account"
                    )}
                  </button>
                </div>
              </div>
            </form>

            <p className="text-center text-sm text-gray-600">
              Already have an account?
              <Link
                to="/login"
                className="font-medium text-green-600 hover:text-green-500 ml-1"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default RegisterPage;