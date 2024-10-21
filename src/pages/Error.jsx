import React from 'react'
import { useLocation, Link } from 'react-router-dom'

function Error() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <p className="text-lg text-gray-500 mb-8">
          Path: <span className="font-mono bg-gray-200 px-2 py-1 rounded">{location.pathname}</span>
        </p>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

export default Error
