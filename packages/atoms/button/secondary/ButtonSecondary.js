import React from "react";

export default function ButtonSecondary({ children, ...props }) {
  return (
    <button
      style={{
        background: "white",
        color: "#0066ff",
        border: "2px solid #0066ff",
        padding: "10px 16px",
        borderRadius: "8px"
      }}
      {...props}
    >
      {children}
    </button>
  );
}
