import Link from "next/link";
import { Image, List, ListItem } from "@chakra-ui/react";

import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image
          // className={styles.logo}
          src="/images/icon.png"
          width="110px"
          height="110px"
          alt="logo"
          _hover={{ transform: "scale(1.1)" }}
        />
      </Link>
      <List display="flex" gap="5px">
        {/* ul */}
        <Link href="#home">
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
        <Link href="#about">
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
        <Link href="#projects">
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
        <Link href="#skills">
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
        <Link href="#contact">
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
    </nav>
  );
};

export default Header;
