import { Flex, Text, Box, Badge, Link, Image } from "@chakra-ui/react";
import format from "date-fns/format";
import parse from "date-fns/parse";
import React from "react";
import { AiFillGithub, AiFillPlayCircle } from "react-icons/ai";

import api from "../../services/api";
import { ButtonStylished } from "./styled";

export default function ProjectCard({ data }) {
  const user = "rxqvx";
  const [languages, setLanguages] = React.useState([]);

  const loadLanguages = async () => {
    try {
      api
        .get(`https://api.github.com/repos/${user}/${data.name}/languages`)
        .then(({ data }) => {
          const lang = Object.keys(data);
          setLanguages(lang);
        });
    } catch {
      console.error("error on loadLanguages");
    }
  };

  React.useEffect(() => {
    loadLanguages();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderDate = (createdDate) => {
    const date = parse(createdDate, "yyyy-MM-dd'T'HH:mm:ss'Z'", new Date());
    const result = format(date, "dd/MM/yyyy");
    return result;
  };

  const verifyUrl = (data) => {
    //se não tiver o https ele redireciona para localhost:3000/data.homepage ao invés de só data.homepage
    const url = `https://${data.homepage}`;
    if (data.homepage.includes("http")) {
      return data.homepage;
    }
    return url;
  };

  const renderSiteButton = (data) => {
    return (
      <Link href={verifyUrl(data)}>
        <ButtonStylished leftIcon={<AiFillPlayCircle />}>
          <Text as="a" variant="header">
            Site
          </Text>
        </ButtonStylished>
      </Link>
    );
  };

  const renderRepoButton = (data) => {
    return (
      <Link href={data.html_url}>
        <ButtonStylished leftIcon={<AiFillGithub />}>
          <Text as="a" variant="header">
            Repositório
          </Text>
        </ButtonStylished>
      </Link>
    );
  };

  const renderBadge = (language) => {
    return (
      <Badge
        key={language}
        borderRadius="full"
        px="2"
        colorScheme="purple"
        fontSize="sm"
        margin="5px"
      >
        {language}
      </Badge>
    );
  };

  return (
    <>
      <Box
        maxW="20em"
        height="38em"
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
        marginTop="25px"
        backgroundColor="#5E5FAD"
      >
        <Image src={data.owner.avatar_url} alt={data.name} />
        <Box p="6">
          <Box display="column" alignItems="baseline" flexWrap="wrap">
            {languages.map((language) => renderBadge(language))}
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              Languages
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {data.name}
          </Box>

          <Box>
            <Box as="span" color="gray.400" fontSize="sm">
              Criado em{" "}
            </Box>
            {renderDate(data.created_at)}
          </Box>
          <Flex flexDir="column">
            {data.html_url && renderRepoButton(data)}
            {data.homepage && renderSiteButton(data)}
          </Flex>
        </Box>
      </Box>
    </>
  );
}
