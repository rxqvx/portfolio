import { Flex, Text, Icon, Button } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { AiFillLinkedin, AiFillFilePdf, AiFillGithub } from "react-icons/ai";

const Footer = () => {
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
      link: "mailto:henriquedevcurriculo@gmail.com",
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
    window.open(link, "_blank");
  };

  return (
    <Flex
      height="100px"
      alignItems="center"
      paddingX="50px"
      justifyContent="space-between"
      backgroundColor="#100030"
      borderTop="2px"
    >
      <Text color="#fff">Made with ❤️ by Henrique Kenji © 2022</Text>
      <Flex justifyContent="space-between" width="250px">
        {buttonItems.map((buttonItem) => (
          <Button
            key={buttonItem.id}
            _hover={buttonItem.hover}
            colorScheme="gray"
            variant="solid"
            onClick={() => handlePress(buttonItem.link)}
          >
            {buttonItem.leftIcon}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default Footer;
