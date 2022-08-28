import React from "react";
import { Flex, Button } from "@chakra-ui/react";

import { TextH1 } from "./styled";
import api from "../../services/api";
import ProjectsCarousel from "./Carousel";

export default function ProjectsSection(): React.CElement<any, any> {
  return (
    <>
      <Flex
        backgroundColor="#1c0057"
        width="100%"
        height="100%"
        padding="5em"
        flexDir="column"
      >
        <TextH1>Projetos do Github</TextH1>
        <Flex flexWrap="wrap" justifyContent="space-between">
          <ProjectsCarousel />
        </Flex>
      </Flex>
      {/* <Button onClick={() => console.log(repos)} /> */}
    </>
  );
}
