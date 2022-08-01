import { Flex, Image } from "@chakra-ui/react";

import AboutCard from "./AboutCard";

const AboutSection = () => {
  return (
    <Flex
      backgroundColor="#5E5FAD"
      width="100%"
      height="100%"
      //   paddingY="3em"
      //   paddingX="10em"
      padding="10em"
      justify="space-between"
    >
      <AboutCard />
      <Flex
        flexDir="column"
        gap={5}
        width="70%"
        height="25em"
        padding="1em"
        background="rgba(255, 255, 255, 0.15)"
        boxShadow="0 8px 32px 0 rgba(28, 8, 34, 0.37)"
        backdropFilter="blur(6.5px)"
        borderRadius="10px"
        border="1px solid rgba(255, 255, 255, 0.18)"
        overflow="auto"
      >
        <p>
          Atualmente sou um estagiário em tecnologia, tenho aprendizado em
          algumas linguagens de programação como por exemplo Python, Java, C,
          HTML, CSS, Javascript e Typescript. Gosto bastante de trabalhar com os
          frameworks React e React Native além dos próprios frameworks do React.
          Procuro aprender cada vez mais, principalmente pelo fato de que amo
          trabalhar com tecnologias :D
        </p>
        <p>
          Busco o FullStack, mas atualmente estou focado no Front-End, seja no
          Front Engineering ou Front Engineering Design.
        </p>
        <p>
          Me considero esforçado no aprendizado e buscando resolver desafios!
          Sou bom com trabalho em equipe, mas também com trabalho individual. Me
          definindo em 3 palavras: organizado, motivado e dedicado.
        </p>
      </Flex>
    </Flex>
  );
};

export default AboutSection;
