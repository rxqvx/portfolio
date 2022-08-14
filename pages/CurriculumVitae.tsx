import React from "react";
import { Flex, Button, Link } from "@chakra-ui/react";
import { AiOutlineDownload, AiFillFilePdf, AiFillHome } from "react-icons/ai";

const CurriculumVitae = () => {
  const embedUrl =
    "https://drive.google.com/file/d/15XsrLbQK5VuymcxTGXkUZWN2P5_1LbXD/preview";
  const shareUrl =
    "https://drive.google.com/file/d/15XsrLbQK5VuymcxTGXkUZWN2P5_1LbXD/view?usp=sharing";
  const downloadUrl =
    "https://drive.google.com/u/1/uc?id=15XsrLbQK5VuymcxTGXkUZWN2P5_1LbXD&export=download";

  const handlePress = () => {
    window.open(downloadUrl, "_blank");
  };

  const handleVizualize = () => {
    window.open(shareUrl, "_blank");
  };
  return (
    <>
      <Flex
        padding="5em"
        flexDir="column"
        gap={5}
        justifyContent="center"
        alignItems="center"
      >
        <iframe
          src={embedUrl}
          width="70%"
          height="1200"
          allow="autoplay"
        ></iframe>
        <Button
          onClick={() => handleVizualize()}
          width="20%"
          leftIcon={<AiFillFilePdf />}
          colorScheme="red"
        >
          Vizualize o Currículo
        </Button>
        <Button
          onClick={() => handlePress()}
          width="20%"
          leftIcon={<AiOutlineDownload />}
          colorScheme="red"
        >
          Baixe o Currículo
        </Button>
        <Link
          href="/"
          isExternal={false}
          justifyContent="center"
          alignSelf="center"
          width="20%"
        >
          <Button leftIcon={<AiFillHome />} colorScheme="purple" width="100%">
            Voltar a Home
          </Button>
        </Link>
      </Flex>
    </>
  );
};

export default CurriculumVitae;
