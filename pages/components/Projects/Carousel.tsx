import React from "react";
import Carousel from "react-elastic-carousel";
import { TBreakpoint, CarouselProps } from "./Carousel.types";
import api from "../../services/api";
import ProjectCard from "./ProjectCard";

const ProjectsCarousel = () => {
  const breakPoints: TBreakpoint = [
    { width: 1, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ];
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

  const CarouselProps = {
    breakPoints: breakPoints,
    isRTL: true,
  };
  return (
    <Carousel {...CarouselProps}>
      {repos.map((repos) => (
        <ProjectCard data={repos} key={repos.id} />
      ))}
    </Carousel>
  );
};

export default ProjectsCarousel;
