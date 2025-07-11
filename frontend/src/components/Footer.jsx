import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom';

function Footer() {

  const {authTokens} = useContext(AuthContext);

  return (
    <>
      {!authTokens ? <>
      <div className="fixed z-50 md:bottom-6 md:right-6">
  {/* Mobile Toggle Tab */}
  <button
    id="toggleSupport"
    className="md:hidden fixed right-0 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded-l-lg shadow-lg transform transition-transform duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  </button>
  {/* Support Widget */}
  <div
    id="supportWidget"
    className="fixed right-[-100%] top-1/2 -translate-y-1/2 md:relative md:right-0 md:top-0 md:translate-y-0 transition-all duration-300"
  >
    <a
      href=""
      target="_blank"
      className="flex items-center justify-center w-14 h-14 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110 group"
    >
      {/* Telegram Icon */}
      <svg
        className="w-6 h-6 text-white"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-1.97 1.25-5.57 3.69-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.07-.49-.84-.28-1.51-.43-1.46-.91.03-.25.38-.51 1.07-.78 4.2-1.82 7-3.03 8.4-3.61 4-.17 4.83 1.22 4.06 2.31z" />
      </svg>
    </a>
    {/* Tooltip */}
    <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap">
        Need help? Chat with us!
      </div>
    </div>
  </div>
</div>

      <footer className=" bg-emerald-900 text-white py-4 sticky bottom-0">
  <div className="container mx-auto px-4 flex justify-center items-center">
    <p className="text-sm">© {new Date().getFullYear()} All Rights Reserved</p>
  </div>
</footer>

    </> : <>
      <footer className="bg-green-900 border-t border-green-950 sticky bottom-0 w-full shadow-lg">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3">
    {/* Home */}
    <div className="text-center text-green-100 transition-colors duration-200 hover:text-rose-300">
      <Link to="/blogs" className="flex flex-col items-center">
        <i className="fas fa-blog text-xl" />
        <p className="text-xs mt-1 font-medium">Blogs</p>
      </Link>
    </div>
    {/* History */}
    <div className="text-center text-rose-400 transition-colors duration-200 hover:text-rose-300">
      <Link
        to="/history"
        className="flex flex-col items-center"
      >
        <i className="fas fa-history text-xl" />
        <p className="text-xs mt-1 font-medium">History</p>
      </Link>
    </div>
    {/* Invest Button (Center) */}
    <div className="text-center -mt-8">
      <a
        href=""
        className="flex flex-col items-center"
      >
        <div className="w-14 h-14 bg-rose-500 hover:bg-rose-400 rounded-full flex items-center justify-center transform transition-all duration-200 hover:scale-105 shadow-lg">
          <i className="fas fa-plus text-white text-2xl" />
        </div>
      </a>
    </div>
    {/* Referrers */}
    <div className="text-center">
      <Link
        to="/referrers"
        className="flex flex-col items-center"
      >
        <i className="fas fa-share-alt text-xl text-green-100 transition-colors duration-200 hover:text-rose-300" />
        <p className="text-xs mt-1 font-medium text-green-100">Referrers</p>
      </Link>
    </div>
    {/* Profile */}
    <div className="text-center text-green-100 transition-colors duration-200 hover:text-rose-300">
      <Link
        to="/settings"
        className="flex flex-col items-center"
      >
        <i className="fas fa-user text-xl" />
        <p className="text-xs mt-1 font-medium">Profile</p>
      </Link>
    </div>
  </div>
</footer>

    </>}
    </>
  )
}

export default Footer