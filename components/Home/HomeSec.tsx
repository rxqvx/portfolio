import React from "react";
import { Flex, Button, Icon, Image, Box } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { AiFillLinkedin, AiFillFilePdf, AiFillGithub } from "react-icons/ai";

import { AnimatedText } from "../../styles/styled";

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

  const buttonItems = [
    {
      id: 1,
      name: "Linkedin",
      colorScheme: "linkedin",
      leftIcon: <Icon as={AiFillLinkedin} />,
      hover: { color: "#0A66C2", backgroundColor: "#fff" },
      link: "https://www.linkedin.com/in/henrique-kenji-808113202/",
    },
    {
      id: 2,
      name: "Github",
      colorScheme: "gray",
      leftIcon: <Icon as={AiFillGithub} />,
      hover: { color: "#fff", backgroundColor: "#000" },
      link: "https://github.com/rxqvx",
    },
    {
      id: 3,
      name: "Email",
      colorScheme: "teal",
      leftIcon: <EmailIcon />,
      hover: { color: "teal", backgroundColor: "#fff" },
      link: "#contact",
    },
    {
      id: 4,
      name: "Currículo",
      colorScheme: "red",
      leftIcon: <Icon as={AiFillFilePdf} />,
      hover: { color: "#e33d33", backgroundColor: "#fff" },
      link: "/CurriculumVitae",
    },
  ];

  const handlePress = (link) => {
    function scrollTo(hash) {
      location.hash = "#" + hash;
    }
    if (link === "#contact") {
      scrollTo("contact");
      return;
    }

    window.open(link, "_blank");
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
            <span>
              Desenvolvedor <strong>Front-End</strong>
            </span>
          </AnimatedText>
          <Flex flexDirection="row" gap={5}>
            {buttonItems.map((buttonItem) => (
              <Button
                key={buttonItem.id}
                _hover={buttonItem.hover}
                leftIcon={buttonItem.leftIcon}
                colorScheme={buttonItem.colorScheme}
                variant="solid"
                onClick={() => handlePress(buttonItem.link)}
              >
                {buttonItem.name}
              </Button>
            ))}
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
