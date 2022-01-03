import React from "react";

export default function Button({ title, full, disabled, ...props }) {
  return (
    <button
      className={`py-3 ${
        full ? "px-0 w-full" : "px-14"
      } bg-blue-600 rounded-lg font-medium text-white hover:bg-blue-700 ${
        disabled
          ? "bg-opacity-20 hover:bg-opacity-20 cursor-default text-opacity-30"
          : "bg-opacity-100"
      }`}
      {...props}
    >
      {title}
    </button>
  );
}
