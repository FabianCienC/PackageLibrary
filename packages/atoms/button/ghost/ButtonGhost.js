import React from "react";

export default function ButtonGhost({ children, ...props }) {
  return (
    <button
      style={{
        background: "transparent",
        color: "#333",
        border: "1px solid #ccc",
        padding: "10px 16px",
        borderRadius: "8px"
      }}
      {...props}
    >
      {children}
    </button>
  );
}
