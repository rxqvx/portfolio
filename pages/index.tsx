import React from "react";
import Router from "next/router";

import styles from "../styles/Home.module.css";
import AboutSection from "../components/About/AboutSection";
import HomeSec from "../components/Home/HomeSec";
import ProjectsSection from "../components/Projects/ProjectsSection";
import Layout from "../components/Layout";
import Skills from "../components/Skills/index";
import Contact from "../components/Contact/index";

export default function Home() {


  return (
    <>
      <Layout>
        <section className={styles.secHome} id="home">
          <HomeSec />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </Layout>
    </>
  );
}
