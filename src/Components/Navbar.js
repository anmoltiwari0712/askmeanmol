import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/Navbar.css";
const downloadCV = () => {
  // For Future Updates
  // Steps to modify dropbox url
  // Replace 'www.dropbox.com'with 'dl.dropboxusercontent.com'
  //set &dl=0 to &dl=1
// https://dl.dropboxusercontent.com/scl/fi/93o9hgqezapssrx60fwfe/Anmol-Tiwari_Resume.pdf?rlkey=qs5dy0yi42v2fqfwkbq88kzre&dl=1
  const cvUrl =
    "https://dl.dropboxusercontent.com/scl/fi/93o9hgqezapssrx60fwfe/Anmol-Tiwari_Resume.pdf?rlkey=qs5dy0yi42v2fqfwkbq88kzre&dl=1"; // Replace with the modified Dropbox direct download link
  fetch(cvUrl)
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Anmol_Tiwari_Resume.pdf");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    })
    .catch((error) => {
      console.error("Download failed:", error);
    });
};

function Navbar() {
  return (
    <div class="main-nav flex">
      <a class="company-logo">Portfolio</a>
      <div class="nav-links">
        <ul class="flex items">
          <li>
            <a href="#about" class="hover-links">
              About
            </a>
          </li>
          <li>
            <a href="#skills" class="hover-links">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" class="hover-links">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" class="hover-links">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" class="hover-links">
              Get In Touch
            </a>
          </li>
        </ul>
      </div>
      <button type="button" onClick={downloadCV} className="download-btn-hover">
        Download Cv
      </button>
    </div>
  );
}
export default Navbar;
