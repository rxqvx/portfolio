import { Flex } from "@chakra-ui/react";

import styles from "../styles/Home.module.css";
import AboutSection from "./components/About/AboutSection";
import HomeSec from "./components/Home/HomeSec";
import ProjectsSection from "./components/Projects/ProjectsSection";
import Layout from "./components/Layout";

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
      </Layout>
    </>
  );
}
