import { Flex, Button, Icon } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { AiFillLinkedin, AiFillFilePdf, AiFillGithub } from "react-icons/ai";

export default function MediasSection() {
  return (
    <Flex
      width="50em"
      height="35em"
      background="rgba(255, 255, 255, 0.15)"
      boxShadow="0 8px 32px 0 rgba(28, 8, 34, 0.37)"
      backdropFilter="blur(6.5px)"
      borderRadius="10px"
      border="1px solid rgba(255, 255, 255, 0.18)"
      align="center"
      justify="center"
    >
      <Flex flexDirection="column" gap={10} justify="space-around">
        <Flex spacing={4} gap={10} margin={10}>
          <Button
            _hover={{ color: "#0A66C2", backgroundColor: "#fff" }}
            leftIcon={<Icon as={AiFillLinkedin} />}
            colorScheme="linkedin"
            variant="solid"
          >
            Linkedin
          </Button>
          <Button
            _hover={{ color: "teal", backgroundColor: "#fff" }}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
            variant="solid"
          >
            Email
          </Button>
        </Flex>
        <Flex spacing={4} gap={10} margin={10}>
          <Button
            leftIcon={<Icon as={AiFillFilePdf} />}
            colorScheme="red"
            variant="solid"
            _hover={{ color: "#e33d33", backgroundColor: "#fff" }}
          >
            Currículo
          </Button>
          <Button
            leftIcon={<Icon as={AiFillGithub} />}
            colorScheme="gray"
            variant="solid"
            _hover={{ color: "#fff", backgroundColor: "#000" }}
          >
            Github
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
