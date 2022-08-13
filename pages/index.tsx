import { Flex } from "@chakra-ui/react";

import styles from "../styles/Home.module.css";
// import Card from "./components/Home/Card";
// import MediasSection from "./components/Home/MediasSection";
import AboutSection from "./components/About/AboutSection";
import Background from "./components/Home/Background";
import HomeSec from "./components/Home/HomeSec";
import ProjectsSection from "./components/Projects/ProjectsSection";

export default function Home() {
  return (
    <>
      <section className={styles.secHome} id="home">
        <HomeSec />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
    </>
  );
}
