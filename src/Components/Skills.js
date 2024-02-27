import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/Skills.css";
import SkillsCard from "./SkillsCard.js";
// import img1 from "./piggy.webp";
// import img2 from "./scope.png";
import img1 from "./Assets/piggy.webp"
import img2 from "./Assets/scope.png"


function Skills() {
  return (
    <div class="Skills-sec" id="skills">
      <div class="heading-sec flex">
        <p class="Heading-1">Skills</p>
        <img src={img1} class="piggy-img" alt=""></img>
      </div>
      <div class="skills-sec-1 flex">
        <SkillsCard
          skillName="Front-End Development"
          progress="85"
          skills={["HTML", "CSS", "Bootstrap", "Javascript", "Reactjs"]}
        ></SkillsCard>
        <img src={img2} class="scope-img" alt=""></img>
        <SkillsCard
          skillName="Design and Multimedia Tools"
          progress="75"
          skills={["Figma", "Canva", "Photoshop", "After Effects"]}
        ></SkillsCard>
      </div>
      <div class="skills-sec-2 flex">
        <SkillsCard
          skillName="Programming and Other Skills"
          progress="75"
          skills={["Problem Solving", "c++", "Mysql", "Python"]}
        ></SkillsCard>
      </div>
      <br></br>
    </div>
  );
}

export default Skills;
