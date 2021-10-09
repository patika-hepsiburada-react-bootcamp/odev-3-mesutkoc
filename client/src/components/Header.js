import React from "react";
import { useTitle } from "../contexts/HeaderContext";

function Header() {
  const { title } = useTitle();
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
