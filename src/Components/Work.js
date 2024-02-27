import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/Work.css";
import WorkCard from "./WorkCard.js";
import logo1 from "./Assets/logo1.png";
import ambassador from "./Assets/ambassador.png";
import coding from "./Assets/coding.png";
import boardmember from "./Assets/boardmember.png";
import Slider from "react-slick";
import rightarrow from "./Assets/right-arrow.png";
import leftarrow from "./Assets/left-arrow.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Work() {
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  const goToPrev = () => {
    sliderRef && sliderRef.slickPrev();
  };

  const goToNext = () => {
    sliderRef && sliderRef.slickNext();
  };

  let sliderRef;

  return (
    <div className="work-sec" id="experience">
      <p class="Heading-1">Work Experience</p>
      <p className="work-par">
        In the dance between imagination and pixels, I've found my rhythm. From
        websites to apps, branding to transformations – I am the creator of
        digital magic, shaping experiences that leave a mark.
      </p>
      <div className="carousel-container">
        <Slider ref={(slider) => (sliderRef = slider)} {...sliderSettings}>
          <WorkCard
            imageUrl={logo1}
            title="Design Intern @Sedin"
            description="Completed In-house training at Sedin Technologies Pvt Ltd, specializing in Design over a five-week duration. "
            link="https://sedintechnologies.com/"
          />
          <WorkCard
            imageUrl={ambassador}
            title="Student Ambassador"
            description="Selected as a Microsoft Learn Student Ambassador (MLSA), grateful to Microsoft for this opportunity!"
            link="https://mvp.microsoft.com/studentambassadors"
          />
          <WorkCard
            imageUrl={coding}
            title="Front-End Intern"
            description="Contributed as a Front-End Web Developer at Orom Corporation, specializing in crafting engaging and responsive web interfaces."
            link="https://www.linkedin.com/company/oromcorp/"
          />
          <WorkCard
            imageUrl={ambassador}
            title="Campus Captain"
            description="Served as Campus Captain at Coding Minutes, fostering coding proficiency and community engagement through initiatives."
            link="https://codingminutes.com/"
          />
          <WorkCard
            imageUrl={boardmember}
            title="Community Advocate"
            description="As a Community Advocate at Moreficent, I drive student engagement and gather feedback to optimize our cloud application."
            link="https://www.moreficent.com/"
          />
          <WorkCard
            imageUrl={boardmember}
            title="Board Member"
            description="Past Board Member at Centre For Social Entrepreneurship And Development (C.S.E.D) enabling startup growth."
            link="https://www.linkedin.com/company/csedvit/"
          />
        </Slider>
      </div>
      <div className="arw-btns flex">
        <div className="prev-btn" onClick={goToPrev}>
          <img src={leftarrow} className="custom-prev-btn" />
        </div>
        <div className="prev-btn" onClick={goToNext}>
          <img src={rightarrow} className="custom-prev-btn" />
        </div>
      </div>
    </div>
  );
}

export default Work;
