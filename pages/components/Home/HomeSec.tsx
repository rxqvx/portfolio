import React from "react";
import { Flex, Button, Icon, Image, Box } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { AiFillLinkedin, AiFillFilePdf, AiFillGithub } from "react-icons/ai";

import { AnimatedText } from "../../../styles/styled";

const HomeSec = () => {
  const Background = () => {
    return (
      <Box
        position="absolute"
        top="14em"
        backgroundColor="#000"
        height="40em"
        width="100%"
        opacity="50%"
        filter="blur(2em)"
      />
    );
  };

  return (
    <>
      <Flex
        width="100%"
        height="47rem"
        justifyContent="space-around"
        paddingTop="20em"
      >
        <Flex
          margin="1em"
          alignItems="flex-start"
          justifyContent="center"
          color="#fff"
          letterSpacing="3px"
          fontSize="2em"
          fontFamily="helvetica"
          flexDir="column"
          gap={5}
          zIndex="25"
        >
          <AnimatedText primary>
            <span>
              Olá, meu nome é <h1>Henrique</h1>
            </span>
            <span>Desenvolvedor Front-End</span>
          </AnimatedText>

          <Flex flexDirection="row" gap={5}>
            {/* criar um array com as props hover icon e colorscheme etc para fazer um .map */}
            <Button
              _hover={{ color: "#0A66C2", backgroundColor: "#fff" }}
              leftIcon={<Icon as={AiFillLinkedin} />}
              colorScheme="linkedin"
              variant="solid"
            >
              Linkedin
            </Button>
            <Button
              leftIcon={<Icon as={AiFillGithub} />}
              colorScheme="gray"
              variant="solid"
              _hover={{ color: "#fff", backgroundColor: "#000" }}
            >
              Github
            </Button>
            <Button
              _hover={{ color: "teal", backgroundColor: "#fff" }}
              leftIcon={<EmailIcon />}
              colorScheme="teal"
              variant="solid"
            >
              Email
            </Button>
            <Button
              leftIcon={<Icon as={AiFillFilePdf} />}
              colorScheme="red"
              variant="solid"
              _hover={{ color: "#e33d33", backgroundColor: "#fff" }}
            >
              Currículo
            </Button>
          </Flex>
        </Flex>
        <Flex alignItems="center" justifyContent="center" zIndex="25">
          <Image src="/images/me.png" width="450" height="450" alt="Me" />
        </Flex>
      </Flex>
      <Background />
    </>
  );
};

export default HomeSec;
