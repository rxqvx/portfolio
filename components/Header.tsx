import React, { useState } from "react";
import Link from "next/link";
import { Image, List, ListItem, Flex, Icon } from "@chakra-ui/react";
import { Divider } from "../styles/styled";
import { AiOutlineMenu } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Flex
      as="nav"
      position="fixed"
      justifyContent={["space-between", "space-around"]}
      alignItems="center"
      padding="1em"
      width="100%"
      /* glassmorphism */
      background="rgba(250, 241, 255, 0.25)"
      boxShadow=" 0 8px 32px 0 rgba(27, 27, 27, 0.37)"
      backdropFilter="blur(8px)"
      border="1px solid rgba(255, 255, 255, 0.18)"
      zIndex="999"
    >
      <Link href="/" scroll={false}>
        <Image
          // className={styles.logo}
          src="/images/icon.png"
          width="110px"
          height="110px"
          alt="logo"
          _hover={{ transform: "scale(1.1)" }}
        />
      </Link>
      <List display={["none", "flex"]} gap="5px">
        {/* ul */}
        <Link href="#home" scroll={false}>
          <ListItem
            // li
            letterSpacing="3px"
            marginLeft="50px"
            color="#fff"
            cursor="pointer"
            backgroundImage="linear-gradient(transparent 0%,transparent 90%,hotpink 90%,hotpink 100%)"
            backgroundRepeat="no-repeat"
            backgroundSize="0% 100%"
            transition="background-size 300ms"
            _hover={{
              fontWeight: "bold",
              backgroundSize: "100% 100%",
            }}
          >
            Início
          </ListItem>
        </Link>
        <Link href="#about" scroll={false}>
          <ListItem
            letterSpacing="3px"
            marginLeft="50px"
            color="#fff"
            cursor="pointer"
            backgroundImage="linear-gradient(transparent 0%,transparent 90%,hotpink 90%,hotpink 100%)"
            backgroundRepeat="no-repeat"
            backgroundSize="0% 100%"
            transition="background-size 300ms"
            _hover={{
              fontWeight: "bold",
              backgroundSize: "100% 100%",
            }}
          >
            Sobre mim
          </ListItem>
        </Link>

        <Link href="#projects" scroll={false}>
          <ListItem
            letterSpacing="3px"
            marginLeft="50px"
            color="#fff"
            cursor="pointer"
            backgroundImage="linear-gradient(transparent 0%,transparent 90%,hotpink 90%,hotpink 100%)"
            backgroundRepeat="no-repeat"
            backgroundSize="0% 100%"
            transition="background-size 300ms"
            _hover={{
              fontWeight: "bold",
              backgroundSize: "100% 100%",
            }}
          >
            Projetos
          </ListItem>
        </Link>
        <Link href="#skills" scroll={false}>
          <ListItem
            letterSpacing="3px"
            marginLeft="50px"
            color="#fff"
            cursor="pointer"
            backgroundImage="linear-gradient(transparent 0%,transparent 90%,hotpink 90%,hotpink 100%)"
            backgroundRepeat="no-repeat"
            backgroundSize="0% 100%"
            transition="background-size 300ms"
            _hover={{
              fontWeight: "bold",
              backgroundSize: "100% 100%",
            }}
          >
            Habilidades
          </ListItem>
        </Link>
        <Link href="#contact" scroll={false}>
          <ListItem
            letterSpacing="3px"
            marginLeft="50px"
            color="#fff"
            cursor="pointer"
            backgroundImage="linear-gradient(transparent 0%,transparent 90%,hotpink 90%,hotpink 100%)"
            backgroundRepeat="no-repeat"
            backgroundSize="0% 100%"
            transition="background-size 300ms"
            _hover={{
              fontWeight: "bold",
              backgroundSize: "100% 100%",
            }}
          >
            Contato
          </ListItem>
        </Link>
      </List>
      {modalVisible && (
        <Flex
          flexDir="column"
          backgroundColor="#CBC3E3"
          position="fixed"
          zIndex={1020}
          height="60vh"
          width="60%"
          top="145"
          right="0"
          borderRadius="15px"
          padding="20px"
        >
          <Icon
            as={MdCancel}
            color="red.500"
            w={12}
            h={12}
            onClick={() => setModalVisible(false)}
            backgroundColor="#fff"
            borderRadius="15px"
            alignSelf="flex-end"
          />
          <List
            display={["column"]}
            textAlign="center"
            lineHeight={2}
            marginTop="50px"
          >
            {/* ul */}
            <Link href="#home" scroll={false}>
              <ListItem
                // li
                fontSize="30px"
                letterSpacing="3px"
                color="#fff"
                cursor="pointer"
                backgroundImage="linear-gradient(transparent 0%,transparent 90%,hotpink 90%,hotpink 100%)"
                backgroundRepeat="no-repeat"
                backgroundSize="0% 100%"
                transition="background-size 300ms"
                _hover={{
                  fontWeight: "bold",
                  backgroundSize: "100% 100%",
                }}
              >
                Início
              </ListItem>
            </Link>
            <Divider />
            <Link href="#about" scroll={false}>
              <ListItem
                fontSize="30px"
                letterSpacing="3px"
                color="#fff"
                cursor="pointer"
                backgroundImage="linear-gradient(transparent 0%,transparent 90%,hotpink 90%,hotpink 100%)"
                backgroundRepeat="no-repeat"
                backgroundSize="0% 100%"
                transition="background-size 300ms"
                _hover={{
                  fontWeight: "bold",
                  backgroundSize: "100% 100%",
                }}
              >
                Sobre mim
              </ListItem>
            </Link>
            <Divider />
            <Link href="#projects" scroll={false}>
              <ListItem
                fontSize="30px"
                letterSpacing="3px"
                color="#fff"
                cursor="pointer"
                backgroundImage="linear-gradient(transparent 0%,transparent 90%,hotpink 90%,hotpink 100%)"
                backgroundRepeat="no-repeat"
                backgroundSize="0% 100%"
                transition="background-size 300ms"
                _hover={{
                  fontWeight: "bold",
                  backgroundSize: "100% 100%",
                }}
              >
                Projetos
              </ListItem>
            </Link>
            <Divider />
            <Link href="#skills" scroll={false}>
              <ListItem
                fontSize="30px"
                letterSpacing="3px"
                color="#fff"
                cursor="pointer"
                backgroundImage="linear-gradient(transparent 0%,transparent 90%,hotpink 90%,hotpink 100%)"
                backgroundRepeat="no-repeat"
                backgroundSize="0% 100%"
                transition="background-size 300ms"
                _hover={{
                  fontWeight: "bold",
                  backgroundSize: "100% 100%",
                }}
              >
                Habilidades
              </ListItem>
            </Link>
            <Divider />
            <Link href="#contact" scroll={false}>
              <ListItem
                fontSize="30px"
                letterSpacing="3px"
                color="#fff"
                cursor="pointer"
                backgroundImage="linear-gradient(transparent 0%,transparent 90%,hotpink 90%,hotpink 100%)"
                backgroundRepeat="no-repeat"
                backgroundSize="0% 100%"
                transition="background-size 300ms"
                _hover={{
                  fontWeight: "bold",
                  backgroundSize: "100% 100%",
                }}
              >
                Contato
              </ListItem>
            </Link>
          </List>
        </Flex>
      )}

      <Icon
        as={AiOutlineMenu}
        w={12}
        h={12}
        onClick={() => setModalVisible(true)}
      />
    </Flex>
  );
};

export default Header;
