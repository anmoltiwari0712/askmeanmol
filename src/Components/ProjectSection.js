import React, { useState } from "react";
import "./Styles/ProjectSection.css";
import codifyquest from "./Assets/codifyquest.png";
import devsoc from "./Assets/devsoc.png";
import priest from "./Assets/priest.png";
import portfolioimg from "./Assets/Portfolio-img.png";
import bluelearn from "./Assets/bluelearn.png";
import usabilityhub from "./Assets/usabilityhub.png";
import smartserve from "./Assets/smartserve.png";
import revolt from "./Assets/revolt.png";
import simon from "./Assets/simon.png";
import drum from "./Assets/drum.png";
import virtual from "./Assets/virtual.png";
import employee from "./Assets/employee.jpg";
import loading from "./Assets/loading.png";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Design");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="projects-section " id="projects">
      <p class="Heading-1">My Latest Works 🚀</p>

      <div className="buttons">
        <button
          onClick={() => handleCategoryChange("Design")}
          className={selectedCategory === "Design" ? "active" : ""}
        >
          Design
        </button>
        <button
          onClick={() => handleCategoryChange("Development")}
          className={selectedCategory === "Development" ? "active" : ""}
        >
          Development
        </button>
        <button
          onClick={() => handleCategoryChange("Others")}
          className={selectedCategory === "Others" ? "active" : ""}
        >
          Others
        </button>
      </div>
      <div className="project-cards flex">
        {selectedCategory === "Design" && (
          <>
            <div className="Card-dec-1 flex">
              <ProjectCard
                title="Codify Quest"
                description="Codify Quest is an innovative coding platform, offering a comprehensive suite of features including test assessments, online courses, an integrated compiler, and a myriad of tools."
                imageUrl={codifyquest}
                link="https://www.figma.com/file/mX1qgG171qMq4Vi4ZmtFor/CodifyQuest?type=design&mode=dev"
              />
              <ProjectCard
                title="Divine Connect"
                description="An app simplifying priest bookings for ceremonies and poojas, fostering seamless connections between seekers and spiritual guides resulting in fostering spiritual harmony and ease of booking."
                imageUrl={priest}
                link="https://www.figma.com/file/AGE1ZiQt6wKy6KiGOsOLQc/PriestBookingApp?type=design&mode=dev"
              />
              <ProjectCard
                title="AI service portal"
                description="A comprehensive AI-driven phone service platform providing tools for store location, device selling quotes, and self-help analysis, simplifying device management and support."
                imageUrl={devsoc}
                link="https://www.figma.com/file/EI3QWCbB64bLwOJXO5fqut/Devsoc-Home-Page?type=design&node-id=0%3A1&mode=dev"
              />
            </div>
            <div className="Card-dec-1 flex">
              <ProjectCard
                title="Portfolio Website"
                description="A sleek and versatile portfolio website template crafted to showcase professional profiles, projects, and achievements with elegance and efficiency."
                imageUrl={portfolioimg}
                link="https://www.figma.com/file/ncPsFCKvARub1oT5LhqyQn/Portfolio-website?type=design&node-id=0%3A1&mode=dev"
              />
            </div>
          </>
        )}

        {selectedCategory === "Development" && (
          <>
            <div className="Card-dec-1 flex">
              <ProjectCard
                title="Blue Learn Clone"
                description="A website clone of BlueLearn.in, featuring a comprehensive learning platform with a mirrored interface, offering similar functionalities and content as the original site."
                imageUrl={bluelearn}
                link="https://anmoltiwari0712.github.io/BLUELEARN_CLONE.github.io/"
              />
              <ProjectCard
                title="Usability Hub Clone"
                description="A replication of UsabilityHub.com, a remote user research platform empowering designers with real user insights to validate design choices, eliminating guesswork from the decision-making process."
                imageUrl={usabilityhub}
                link="https://anmoltiwari0712.github.io/usabilityhubclone.github.io/"
              />
              <ProjectCard
                title="SmartServe"
                description="SmartServe is an AI-driven customer service web application offering chat-based assistance, YouTube video recommendations, service center locators, and price predictions through a custom ML model tailored for phones and tablets."
                imageUrl={smartserve}
                link="https://github.com/anmoltiwari0712/SmartServe_DevSoc23"
              />
            </div>
            <div className="Card-dec-1 flex">
              <ProjectCard
                title="Revolt Motorbikes"
                description="Revolt Motorbikes website showcasing essential services and information related to motorbikes, providing a comprehensive overview of offerings and functionalities."
                imageUrl={revolt}
                link="https://anmoltiwari0712.github.io/motorbikecomp.github.io/"
              />
              <ProjectCard
                title="Simon Game"
                description="A digital recreation of the classic Simon Game, challenging users' memory and reflexes through pattern sequences and interactive gameplay."
                imageUrl={simon}
                link="https://anmoltiwari0712.github.io/simongame.github.io/"
              />
              <ProjectCard
                title="Drum Kit"
                description="An interactive drum kit website allowing users to play and experiment with various percussion sounds and rhythms in a virtual environment."
                imageUrl={drum}
                link="https://anmoltiwari0712.github.io/drumkit.github.io/"
              />
            </div>
          </>
        )}

        {selectedCategory === "Others" && (
          <>
            <div className="Card-dec-1 flex">
              <ProjectCard
                title="Virtual Assistant"
                description="A virtual assistant application developed using Python, designed to assist users with tasks and commands, utilizing AI and machine learning capabilities for seamless interaction and support."
                imageUrl={virtual}
                link="https://github.com/anmoltiwari0712/Virtual-Assistant"
              />
              <ProjectCard
                title=" Employee System"
                description="An integrated employee database management system designed to streamline HR processes, organizing and managing employee information efficiently within a centralized platform."
                imageUrl={employee}
                link="https://github.com/anmoltiwari0712/EMPD"
              />
            </div>
            <img src={loading} width="150"></img>

          </>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
