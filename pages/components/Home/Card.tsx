import { Flex, Image } from "@chakra-ui/react";

import { AnimatedText } from "../../../styles/styled";

const Card = () => {
  return (
    <Flex
      flexDir="column"
      gap={5}
      width="30em"
      height="35em"
      background="rgba(255, 255, 255, 0.15)"
      boxShadow="0 8px 32px 0 rgba(28, 8, 34, 0.37)"
      backdropFilter="blur(6.5px)"
      borderRadius="10px"
      border="1px solid rgba(255, 255, 255, 0.18)"
    >
      <Flex alignItems="flex-start" justifyContent="center">
        <Image src="/images/me.png" width="300" height="300" alt="Me" />
      </Flex>
      <Flex
        margin="1em"
        alignItems="flex-start"
        justifyContent="center"
        color="#fff"
        letterSpacing="3px"
        fontSize="1.5em"
        fontFamily="helvetica"
      >
        <AnimatedText primary>
          <span>
            Olá, meu nome é <h1>Henrique</h1>
          </span>
        </AnimatedText>
      </Flex>
      <Flex
        alignItems="flex-start"
        justifyContent="center"
        color="#fff"
        letterSpacing="3px"
        fontSize="1.5em"
        fontFamily="helvetica"
      >
        <AnimatedText primary>
          <span>Desenvolvedor Front-End</span>
        </AnimatedText>
      </Flex>
    </Flex>
  );
};

export default Card;
