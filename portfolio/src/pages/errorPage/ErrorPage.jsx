import React from "react";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1f1f2e] text-gray-100 px-4">
      <h1 className="text-7xl font-extrabold text-purple-500 mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
      <p className="text-gray-400 mb-6 text-center max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-5 py-2 bg-purple-600 hover:bg-purple-700 transition rounded-md text-white font-medium"
      >
        <FaArrowLeft /> Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
