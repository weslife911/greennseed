import React, { useState } from 'react'
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

function VerifyEmailPage() {

    const[email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

  return (
    <>
    <Helmet>
        <title>
            Reset Password - GreennSeed App
        </title>
    </Helmet>
        <div className="min-h-screen flex">
  {/* Left side */}
  <div
    className="hidden lg:flex lg:w-1/2 green-gradient relative overflow-hidden bg-cover bg-center"
    style={{ backgroundImage: 'url("images/logo.png")' }}
  >
    <div className="absolute inset-0 leaf-pattern opacity-10" />
    <div className="relative w-full h-full flex flex-col items-center justify-center p-12 text-center">
      <div className="mb-8">
        <img
          src="/images/logo.png"
          alt="GreennSeed Logo"
          className="h-24 w-24"
        />
      </div>
      <h1 className="text-5xl font-bold text-white mb-6">
        Recover Your Account
      </h1>
      <p className="text-green-100 text-xl max-w-md">
        We'll help you get back to growing your investments
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-800/20 to-transparent" />
    </div>
  </div>
  {/* Right side */}
  <div className="w-full lg:w-1/2 flex items-center justify-center p-8 mobile-glass">
    <div className="w-full max-w-md">
      <div className="bg-gray-900 backdrop-blur-lg rounded-2xl shadow-xl p-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-block p-3 rounded-full bg-green-50 mb-4">
            <i className="fas fa-key text-3xl text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-200">Reset Password</h2>
          <p className="text-gray-400">
            Enter your email to receive a reset link
          </p>
        </div>
        <form
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email Address
            </label>
            <div className="input-focus-effect rounded-lg">
              <div className="relative">
                <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border-0 rounded-lg focus:ring-0 focus:outline-none"
                  required=""
                  autoFocus=""
                  defaultValue=""
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            id="login-button"
            className="w-full py-3 px-4 green-gradient text-white rounded-lg font-medium 
                          shadow-lg shadow-green-500/30 hover:shadow-green-500/40 
                          focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 
                          transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-center gap-2">
              <span id="button-text">Send Reset Link</span>
              <span id="button-loader" className="hidden">
                <i className="fas fa-circle-notch animate-spin" />
              </span>
            </div>
          </button>
          <p className="text-center text-sm text-gray-300">
            Remember your password?
            <Link
              to="/login"
              className="font-medium text-green-600 hover:text-green-500 ml-1"
            >
              Back to login
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default VerifyEmailPage