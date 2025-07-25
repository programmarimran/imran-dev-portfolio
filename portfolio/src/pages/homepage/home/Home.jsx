import React from "react";
import HeroSection from "../hero/HeroSection";
import AboutMe from "../about/AboutMe";
import SkillsSection from "../skills/SkillsSection";
import EducationSection from "../education/EducationSection";
import ProjectSection from "../projects/ProjectSection";
import ContactSection from "../contac/ContactSection";
import ScrollToTopButton from "../../../components/ScrollToTopButton/ScrollToTopButton";

const Home = () => {
  return (
    <div>
      <div>
        <HeroSection></HeroSection>
      </div>
      <section
        id="About"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className=" overflow-x-hidden"
      >
        <AboutMe></AboutMe>
      </section>
      <section id="Skills">
        <SkillsSection></SkillsSection>
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
