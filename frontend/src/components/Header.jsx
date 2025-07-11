import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom';

function Header() {

  const { authTokens, logoutUser } = useContext(AuthContext);

  return (
    <>
      {!authTokens ? <>
        <header className=" bg-emerald-700 text-white sticky top-0 z-50">
  <div className="container mx-auto px-4 py-4 flex justify-between items-center">
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
      <span className="hidden md:flex text-2xl sm:text-3xl font-bold tracking-tight"></span>
    </div>
    <nav className="flex items-center space-x-4">
      <Link
        to="/login"
        className="hover:text-emerald-200 dark:hover:text-green-50"
      >
        <i className="fas fa-sign-in-alt mr-1" />
        Login
      </Link>
      <Link
        to="/register"
        className="dark:bg-green-100 dark:text-white bg-white text-emerald-700 px-4 py-2 rounded hover:bg-emerald-50"
      >
        Register
      </Link>
    </nav>
  </div>
</header>

      </> : <>
        <div className="flex-grow bg-gray-700">
  <div className="max-w-7xl mx-auto shadow-lg rounded-lg overflow-hidden">
    {/* Header content here */}
    {/* resources/views/layouts/header.blade.php */}
    <div className="sticky top-0 z-50 bg-gradient-to-r from-emerald-800 to-emerald-900 p-6 sm:p-8 lg:p-10 text-gray-100 overflow-hidden backdrop-blur-sm border-b border-white/10">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 20.93 9.9l7.9-7.9h-8zm5.656 0L25.172 8.485 26.586 9.9l7.9-7.9h-0.828zm5.656 0L30.828 8.485 32.242 9.9l7.9-7.9h-0.828zM32.657 0L41.143 8.485 42.557 9.9l-7.9-7.9h-2zm5.657 0L45.8 6.485 47.214 7.9l-7.9-7.9h-2.828zm5.657 0L51.456 6.485 52.87 7.9l-7.9-7.9h-2.828zM0 0h2.827L0 2.828V0zm5.657 0h2.828L0 8.485V5.657L5.657 0zm5.657 0h2.828L0 14.142V11.314L11.314 0zm5.657 0h2.828L0 19.799v-2.828L16.97 0zm5.657 0h2.828L0 25.456v-2.828L22.627 0zm5.657 0h2.828L0 31.113v-2.828L28.284 0zm5.657 0h2.828L0 36.77v-2.828L33.941 0zm5.657 0h2.828L0 42.427v-2.828L39.598 0zm5.657 0h2.828L0 48.084v-2.828L45.255 0zm5.657 0h2.828L0 53.741v-2.828L50.912 0zm5.657 0h2.828L0 59.398v-2.828L56.569 0zm5.657 0h2.828L0 65.055v-2.828L62.226 0zm5.657 0h2.828L0 70.712v-2.828L67.883 0zm5.657 0h2.828L0 76.369v-2.828L73.54 0zm5.657 0h2.828L0 82.026v-2.828L79.197 0zm5.657 0h2.828L0 87.683v-2.828L84.854 0zm5.657 0h2.828L0 93.34v-2.828L90.511 0zm5.657 0h2.828L0 98.997v-2.828L96.168 0zm5.657 0h2.828L0 104.654v-2.828L101.825 0zm5.657 0h2.828L0 110.311v-2.828L107.482 0z" fill="%23ffffff" fill-opacity="0.4" fill-rule="evenodd"/%3E%3C/svg%3E")'
          }}
        />
      </div>
      {/* Main header content */}
      <div className="relative">
        {/* Top section with logo and controls */}
        <div className="flex justify-between sticky top-0 items-center mb-8">
          {/* Logo section */}
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
            <span className="hidden md:flex text-2xl sm:text-3xl font-bold tracking-tight"></span>
          </div>
          {/* Controls section */}
          <div className="flex items-center space-x-6">
            {/* Language selector */}
            {/* Language Selector with Fixed Z-Index */}
            <div className="relative group inline-block">
              <button className="p-2 relative z-10">
                <i className="fas fa-globe text-xl sm:text-2xl group-hover:text-bronze-300 transition-colors duration-300" />
              </button>
              <div className="absolute right-0 z-[100] w-48 mt-2 bg-white rounded-xl shadow-2xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                <div className="p-2 space-y-1">
                  <a
                    href=""
                    className="block px-4 py-2.5 rounded-lg text-sm bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium"
                  >
                    English
                  </a>
                  <a
                    href=""
                    className="block px-4 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-emerald-50"
                  >
                    Français
                  </a>
                </div>
              </div>
            </div>
            {/* User profile */}
            <Link
              to="/settings"
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-bronze-400 to-bronze-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-300" />
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-bronze-500 to-bronze-600 rounded-full flex items-center justify-center shadow-lg">
                <i className="fas fa-user text-xl sm:text-2xl text-white" />
              </div>
            </Link>
            {/* Logout button */}
            <button
              className="relative group p-2"
              title="Logout"
              onClick={logoutUser}
            >
              <div className="absolute inset-0 bg-bronze-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <i className="fas fa-sign-out-alt text-xl sm:text-2xl group-hover:text-bronze-300 transition-colors duration-300" />
            </button>
            <form
            >
            </form>
          </div>
        </div>
        {/* Bottom section with balance and actions */}
        <div className="lg:flex lg:justify-center lg:items-center">
          {/* Action buttons - Removed blogs card */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            <Link to="/deposit" className="group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-bronze-400 to-bronze-600 rounded-xl blur opacity-40 group-hover:opacity-75 transition duration-300" />
                <div className="relative flex flex-col items-center p-4 bg-black/20 rounded-xl backdrop-blur-sm">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-bronze-500 to-bronze-600 rounded-xl flex items-center justify-center shadow-lg mb-2">
                    <i className="fas fa-wallet text-lg sm:text-xl text-white" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-200">
                    Deposit
                  </p>
                </div>
              </div>
            </Link>
            <Link
              to="/withdraw"
              className="group"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-bronze-400 to-bronze-600 rounded-xl blur opacity-40 group-hover:opacity-75 transition duration-300" />
                <div className="relative flex flex-col items-center p-4 bg-black/20 rounded-xl backdrop-blur-sm">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-bronze-500 to-bronze-600 rounded-xl flex items-center justify-center shadow-lg mb-2">
                    <i className="fas fa-hand-holding-usd text-lg sm:text-xl text-white" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-200">
                    Withdraw
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/invest" className="group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-bronze-400 to-bronze-600 rounded-xl blur opacity-40 group-hover:opacity-75 transition duration-300" />
                <div className="relative flex flex-col items-center p-4 bg-black/20 rounded-xl backdrop-blur-sm">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-bronze-500 to-bronze-600 rounded-xl flex items-center justify-center shadow-lg mb-2">
                    <i className="fas fa-coins text-lg sm:text-xl text-white" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-200">
                    Invest
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </>}
    </>
  )
}

export default Header