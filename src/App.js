import "./App.css";
import Aboutme from "./Components/Aboutme.js";
import Hero from "./Components/Hero.js";
import Navbar from "./Components/Navbar.js";
import Skills from "./Components/Skills.js";
import Work from "./Components/Work.js";
import ProjectSection from "./Components/ProjectSection.js";
import Connect from "./Components/Connect.js";
import Form from "./Components/Form.js";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Aboutme></Aboutme>
      <Skills></Skills>
      <ProjectSection></ProjectSection>
      <Work></Work>
      <Connect></Connect>
      <Form></Form>
    </div>
  );
}

export default App;
