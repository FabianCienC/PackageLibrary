import React from "react";

export default function ButtonPrimary({ children, ...props }) {
  return (
    <button
      style={{
        background: "#000",
        color: "#fff",
        border: "none",
        padding: "10px 16px",
        borderRadius: "8px"
      }}
      {...props}
    >
      {children}
    </button>
  );
}
