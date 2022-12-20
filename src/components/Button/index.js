import React from "react";

const Button = ({ children, bType,  kind, onClick, className, isDisable}) => {
  if (kind === "primary") {
    return (
      <button
        // onClick={onClick}
        onClick={onClick?onClick:null}
        disabled={isDisable}
        type={bType}
        className={`primary ${className}`}>
        {children}
      </button>
    );
  }
  if (kind === "inline") {
    return (
      <button
        onClick={onClick}
        disabled={isDisable}
        className={`inline ${className}`}>
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      disabled={isDisable}
      className={`${className}`}>
      {children}
    </button>
  );
};

export default Button;
