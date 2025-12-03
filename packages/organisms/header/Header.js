import React from "react";
import ButtonGhost from "@mispaquetes/atoms-button-ghost";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "16px 24px",
        background: "#f5f5f5",
        alignItems: "center"
      }}
    >
      <h1>Mi Sitio</h1>
      <ButtonGhost>Login</ButtonGhost>
    </header>
  );
}
