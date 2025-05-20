import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export const LoginPage: React.FC = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 w-full">
      <h1 className="text-3xl font-bold mb-6 text-center w-full max-w-md font-poppins">
        Login Dashboard Kinerja Pusat Studi
      </h1>
      <button
        type="button"
     className="font-poppins px-6 py-3 bg-[#1E72F2] flex items-center justify-center gap-5 text-white rounded-md border-2 border-[#2B3C92] hover:bg-transparent hover:text-[#1E72F2] transition duration-300 ease-in-out"


      >
         <FontAwesomeIcon icon={faGoogle} className="google-icon" />
         <span className="ml-5">Login with Google</span>
      </button>
    </div>
  );
};
