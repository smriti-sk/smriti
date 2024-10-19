import React from "react";
import { Home } from "../pages/home";
import { Projects } from "../pages/projects";
import { ContactUs } from "../pages/contact";
import { Resume } from "../components/resume";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";

function AllSections() {
  return (
    <div className="s_c">
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <Socialicons />
    </div>
  );
}

export default AllSections;
