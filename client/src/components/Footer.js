import React from "react";
import GitHubLogo from "../assets/github.png";
//this component contains footer elements.
function Footer() {
  return (
    <div className="footer">
      <p className="footerText">Created by Mesut Koç</p>
      <a href="https://github.com/mesutkoc">
        <img className="footerIcon" src={GitHubLogo} alt="github" />
      </a>
    </div>
  );
}
export default Footer;