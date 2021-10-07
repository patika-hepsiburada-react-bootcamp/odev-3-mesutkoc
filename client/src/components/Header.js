import React from "react";
import { useTitle } from "../contexts/HeaderContext";

function Header() {
  const { title, setTitle } = useTitle();
  return (
    <div>
      <span>{title}</span>
      <button type="button" onClick={() => setTitle("Muhammet Koç")}>
        Set Title
      </button>
    </div>
  );
}

export default Header;
