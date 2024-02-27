import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/Hero.css";
// import img2 from "./profile.png";
// import img1 from "./tele.webp";
import img1 from './Assets/tele.webp'
import img2 from './Assets/profile.png'


function Hero() {
  return (
    <div class="hero-sec flex">
      <div class="image-container">
        <img src={img1} alt="Image 1"></img>
      </div>
      <div class="Heading-sec">
        <p class="heading1">Anmol Tiwari</p>
        <p class="heading2">(Upcoming Ui/Ux Designer 🖖🚀)</p>
      </div>
      <div class="image-container-2 ">
        <img src={img2} alt="Image 3" width="300" height="350"></img>
      </div>
    </div>
  );
}

export default Hero;
