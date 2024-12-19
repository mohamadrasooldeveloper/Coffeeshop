import React from 'react';
import { HiMiniXMark } from "react-icons/hi2";

const ToastCart = ({ successMessage, errorMessage, onCloseSuccess, onCloseError }) => {
  return (
    <div className="ToastCart">
     
      {successMessage && (
        <div className="success-message font-Dana flex items-center gap-4 p-2 shadow-Normal fixed bottom-4 right-4 bg-teal-600 text-white text-center py-3 rounded-xl transform transition-all duration-500 ease-in-out">
          {successMessage}
          <HiMiniXMark size={26} className='cursor-pointer' onClick={onCloseSuccess} />
        </div>
      )}

      {errorMessage && (
        <div className="error-message font-Dana flex items-center gap-4 p-2 shadow-Normal fixed bottom-4 right-4 bg-red-500 text-white text-center py-3 rounded-xl transform transition-all duration-500 ease-in-out">
          {errorMessage}
          <HiMiniXMark size={26} className='cursor-pointer' onClick={onCloseError} />
        </div>
      )}
    </div>
  );
};

export default ToastCart;
