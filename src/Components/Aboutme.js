import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/Aboutme.css";
// import img1 from "./table.webp";
import img1 from './Assets/table.webp'

function Aboutme() {
  return (
    <div class="About-me-sec" id="about">
      <p class="Heading-1">About Me :)</p>
      <div class="Explanation-sec flex">
        <div class="img-sec">
          <img src={img1} class="tableimg"></img>
        </div>
        <div class="txt-sec">
          <p class="txt">
            Hello, I'm Anmol, a Pre Final year Computer Science and Engineering
            student at VIT, Vellore (Class of 2025). My journey is fueled by a
            zest for learning and a drive to conquer challenges.
          </p>
          <p class="txt">
            Proficient in Python, MySQL, HTML, and currently mastering data
            structures and algorithms in C++, I find my true passion in coding
            and problem-solving. A firm believer in the power of sharing
            knowledge, I embrace every opportunity to exchange ideas and
            insights.
          </p>
          <p class="txt">
            Eager to expand my horizons, I'm currently exploring the captivating
            realm of UI/UX design. This creative pursuit aligns seamlessly with
            my goal of continuous improvement.
          </p>
          <p class="txt">
            Let's connect and collaborate if you're as enthusiastic about
            technology, knowledge sharing, and personal growth as I am! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
