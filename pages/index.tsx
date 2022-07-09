import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import MediasSection from "../components/MediasSection";
import { Flex } from "@chakra-ui/react";
export default function Home() {
  return (
    <>
      <section className={styles.secHome} id="home">
        <Flex justifyContent="space-around" paddingTop="15em">
          <Card />
          <MediasSection />
        </Flex>
      </section>
    </>
  );
}
