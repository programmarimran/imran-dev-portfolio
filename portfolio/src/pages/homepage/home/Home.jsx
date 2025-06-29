import React from "react";
import HeroSection from "../hero/HeroSection";
import AboutMe from "../about/AboutMe";
import SkillsSection from "../skills/SkillsSection";
import EducationSection from "../education/EducationSection";
import ProjectSection from "../projects/ProjectSection";
import ContactSection from "../contac/ContactSection";
import ScrollToTopButton from "../../../components/ScrollToTopButton/ScrollToTopButton";
import ScrollToSectionButton from "../../../components/ScrollToSectionButton/ScrollToSectionButton";

const Home = () => {
  return (
    <div>
      <div>
        <HeroSection></HeroSection>
      </div>
      {/* //ScrollToSectionButton */}
      <div className=" sticky top-17 z-50 opacity-50 hover:opacity-500">
        <ScrollToSectionButton></ScrollToSectionButton>
      </div>
      <div>
        <AboutMe></AboutMe>
      </div>
      <section id="Skills">
        <SkillsSection></SkillsSection>
      </section>
      <EducationSection></EducationSection>
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
