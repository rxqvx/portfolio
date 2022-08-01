import { Flex, Image } from "@chakra-ui/react";

import styles from "../styles/Home.module.css";
import Card from "./components/Home/Card";
import MediasSection from "./components/Home/MediasSection";
import AboutSection from "./components/About/AboutSection";
import { TextH1 } from "../styles/styled";

export default function Home() {
  return (
    <>
      <section className={styles.secHome} id="home">
        <Flex justifyContent="space-around" paddingTop="15em">
          <Card />
          <MediasSection />
        </Flex>
      </section>
      <section id="about">
        <AboutSection />
      </section>
    </>
  );
}
