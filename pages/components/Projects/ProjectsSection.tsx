import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import Carousel from "react-elastic-carousel";

import { TextH1 } from "./styled";
import api from "../../services/api";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const [repos, setRepos] = React.useState([]);
  const user: string = "rxqvx";

  const loadPayload = async () => {
    try {
      api.get(`https://api.github.com/users/${user}/repos`).then(({ data }) => {
        setRepos(data);
      });
    } catch {
      console.error("error on loadPayload");
    }
  };

  React.useEffect(() => {
    loadPayload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ];

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
          <Carousel breakPoints={breakPoints}>
            {repos.map((repos) => (
              <ProjectCard data={repos} key={repos.id} />
            ))}
          </Carousel>
        </Flex>
      </Flex>
    </>
  );
}
