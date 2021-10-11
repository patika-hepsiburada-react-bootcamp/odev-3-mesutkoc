import React from "react";
import { useTitle } from "../contexts/HeaderContext";

//this component contains header part.
function Header() {
  //getting title data from header context
  const { title } = useTitle();
  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
