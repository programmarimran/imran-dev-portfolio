import React from "react";
import HeroSection from "../hero/HeroSection";
import AboutMe from "../about/AboutMe";
import SkillsSection from "../skills/SkillsSection";
import EducationSection from "../education/EducationSection";
import ProjectSection from "../projects/ProjectSection";
import ContactSection from "../contac/ContactSection";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <AboutMe></AboutMe>
      <SkillsSection></SkillsSection>
      <EducationSection></EducationSection>
      <ProjectSection></ProjectSection>
      <ContactSection></ContactSection>
    </div>
  );
};

export default Home;
