import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Input({ icon, type, ...props }) {
  const [hide, setHide] = useState(true);
  return (
    <div className="w-full relative mb-6">
      <input
        type={type === "password" && hide ? "password" : "text"}
        className="appearance-none block w-full text-base bg-gray-700 bg-opacity-50 text-white outline-none border-none placeholder:text-sm placeholder:font-medium placeholder:text-gray-600 focus:bg-opacity-40 transition ease-in-out rounded-lg py-3 md:py-4 leading-tight focus:ring-1 focus:ring-blue-600 px-12"
        {...props}
      />
      <div className="absolute left-3 md:left-4 text-gray-500 text-xl top-1/2 -translate-y-1/2">
        {icon}
      </div>
      {type === "password" && (
        <div className="absolute right-4 text-gray-500 text-base md:text-xl top-1/2 -translate-y-1/2 cursor-pointer">
          <FiEye
            className={`${hide ? "hidden" : "block"}`}
            onMouseDown={() => setHide(!hide)}
            onMouseUp={() => setHide(!hide)}
          />
          <FiEyeOff
            className={`${hide ? "block" : "hidden"}`}
            onMouseDown={() => setHide(!hide)}
            onMouseUp={() => setHide(!hide)}
          />
        </div>
      )}
    </div>
  );
}
