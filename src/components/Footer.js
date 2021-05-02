import React from "react";
import "./../index.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <h2>
        Dev :{" "}
        <a
          href="https://github.com/monjurul201"
          rel="noopener noreferrer"
          target="_blank"
        >
         Monjurul
        </a>{" "}
        || {new Date().getFullYear()}
      </h2>
    </div>
  );
};

export default Footer;
