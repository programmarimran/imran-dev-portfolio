import React from "react";
import HeroSection from "../hero/HeroSection";
import AboutMe from "../about/AboutMe";
import SkillsSection from "../skills/SkillsSection";
import EducationSection from "../education/EducationSection";
import ProjectSection from "../projects/ProjectSection";
import ContactSection from "../contac/ContactSection";
import ScrollToTopButton from "../../../components/ScrollToTopButton/ScrollToTopButton";
import LearningExperienceSection from "../learningExperience/LearningExperienceSection";

const Home = () => {
  return (
    <div>
      <div id="hero" className="bg-black/90 rounded-lg ">
        <HeroSection></HeroSection>
      </div>
      <section id="About" data-aos="fade-up" className=" rounded-lg ">
        <AboutMe></AboutMe>
      </section>
      <section id="Skills">
        <SkillsSection></SkillsSection>
      </section>
      <section>
        <LearningExperienceSection/>
      </section>
      <section id="Education">
        <EducationSection></EducationSection>
      </section>
      <section id="Projects">
        <ProjectSection></ProjectSection>
      </section>
      <section id="Contact">
        <ContactSection></ContactSection>
      </section>
      {/* // ScrollToTopButton */}
      <div>
        <ScrollToTopButton></ScrollToTopButton>
      </div>
    </div>
  );
};

export default Home;
