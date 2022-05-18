import React from "react";

const Button = ({ children, bType,  kind, onClick, className}) => {
  if (kind === "primary") {
    return (
      <button
        onClick={onClick}
        type={bType}
        className={`p-2 rounded-lg text-white bg-blue-700 hover:bg-blue-800 first:ml-0 ${className}`}>
        {children}
      </button>
    );
  }
  if (kind === "inline") {
    return (
      <button
        onClick={onClick}
        className={`p-2 m-2 rounded-lg transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 w-full justify-center ${className}`}>
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`p-2 m-2 rounded-lg transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100  first:ml-0 ${className}`}>
      {children}
    </button>
  );
};

export default Button;
