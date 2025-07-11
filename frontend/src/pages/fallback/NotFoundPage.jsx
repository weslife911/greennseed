import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import { Helmet } from "react-helmet"

function NotFoundPage() {

    const {authTokens} = useContext(AuthContext);

  return (
    <>
    <Helmet>
      <title> 404 - Page Not Found </title>
    </Helmet>
      <main className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
  <div className="text-center">
    <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
    <p className="text-2xl font-semibold text-gray-300 mb-6">Page Not Found</p>
    <p className="text-gray-400 mb-8">
      The page you are looking for doesn't exist or has been moved.
    </p>
    <Link
      to={authTokens ? "/dashboard" : "/"}
      className="inline-block bg-orange-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
    >
      Return Home
    </Link>
  </div>
</main>
    </>

  )
}

export default NotFoundPage