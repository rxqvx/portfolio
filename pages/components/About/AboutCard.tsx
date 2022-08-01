import { Flex, Image } from "@chakra-ui/react";
import { TextH1 } from "../../../styles/styled";
const AboutCard = () => {
  return (
    <Flex
      flexDir="column"
      align="center"
      gap={5}
      width="20em"
      height="25em"
      padding="1em"
      background="rgba(255, 255, 255, 0.15)"
      boxShadow="0 8px 32px 0 rgba(28, 8, 34, 0.37)"
      backdropFilter="blur(6.5px)"
      borderRadius="10px"
      border="1px solid rgba(255, 255, 255, 0.18)"
    >
      <Image
        // className={styles.logo}
        src="/images/icon.png"
        width="150px"
        height="150px"
        alt="logo"
        margin="2em"
        _hover={{ transform: "scale(0.9)" }}
      />
      <TextH1>Sobre mim</TextH1>
    </Flex>
  );
};

export default AboutCard;
