import React from "react";
import { useTitle } from "../contexts/HeaderContext";

function Header() {
  const { title } = useTitle();
  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
