import React from "react";
import { Flex, Box, Progress, Text } from "@chakra-ui/react";
import Image from "next/image";
import Carousel from "react-elastic-carousel";

import react from "./SkillsIcon/React.png";
import ReactNative from "./SkillsIcon/react-native.png";
import Javascript from "./SkillsIcon/javascript.png";
import Typescript from "./SkillsIcon/typescript.png";
import GitHub from "./SkillsIcon/github.png";
import Git from "./SkillsIcon/git.png";
import NextIcon from "./SkillsIcon/next.png";
import ChakraUiIcon from "./SkillsIcon/chakra-ui.png";
import PythonIcon from "./SkillsIcon/python.png";
import { TextH1 } from "../../styles/styled";
import { breakPoints } from "./Skills.constants";

const Skills = () => {
  const skillsData = [
    {
      id: 1,
      name: "React",
      icon: react,
      progressValue: 75,
    },
    {
      id: 2,
      name: "React-Native",
      icon: ReactNative,
      progressValue: 75,
    },
    {
      id: 3,
      name: "JavaScript",
      icon: Javascript,
      progressValue: 75,
    },
    {
      id: 4,
      name: "TypeScript",
      icon: Typescript,
      progressValue: 75,
    },
    {
      id: 5,
      name: "Github",
      icon: GitHub,
      progressValue: 60,
    },
    {
      id: 6,
      name: "Git",
      icon: Git,
      progressValue: 60,
    },
    {
      id: 7,
      name: "Next.Js",
      icon: NextIcon,
      progressValue: 80,
    },
    {
      id: 8,
      name: "ChakraUI",
      icon: ChakraUiIcon,
      progressValue: 85,
    },
    {
      id: 9,
      name: "Python",
      icon: PythonIcon,
      progressValue: 40,
    },
  ];
  const ImageProps = {
    width: "100%",
    height: "100%",
    padding: "1em",
    zIndex: "2",
  };
  const SkillsCard = ({ data }) => {
    const RenderIcon = ({ data }) => {
      return (
        <>
          <Box
            position="absolute"
            bottom="0px"
            backgroundColor="#fff"
            height="10em"
            width="50%"
            opacity="30%"
            filter="blur(2em)"
            zIndex="0"
          />
          <Image src={data.icon} alt={data.name} {...ImageProps} />
        </>
      );
    };
    return (
      <Box
        maxW="20em"
        width="100%"
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
        marginTop="25px"
        backgroundColor="#1c0057"
        borderColor="#402972"
      >
        <Flex
          padding={10}
          justify="center"
          alignSelf="center"
          position="relative"
        >
          <RenderIcon data={data} />
        </Flex>

        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            <Text color="#fff">{data.name}</Text>
          </Box>
          <Progress value={data.progressValue} />
        </Box>
      </Box>
    );
  };
  const CarouselProps = {
    breakPoints: breakPoints,
    isRTL: false,
  };
  return (
    <Flex
      backgroundColor="#5E5FAD"
      width="100%"
      height="100%"
      padding="5em"
      flexDir="column"
    >
      <TextH1>Habilidades</TextH1>
      <Flex flexWrap="wrap" justifyContent="space-between">
        <Carousel {...CarouselProps}>
          {skillsData.map((skill) => (
            <SkillsCard data={skill} key={skill.id} />
          ))}
        </Carousel>
      </Flex>
    </Flex>
  );
};

export default Skills;
