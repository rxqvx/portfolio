import Link from "next/link";
import styles from "../styles/Header.module.css";
import { Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image
          className={styles.logo}
          src="/images/icon.png"
          width="110px"
          height="110px"
          alt="logo"
          _hover={{ transform: "scale(1.1)" }}
        />
      </Link>
      <ul className={styles.ul}>
        <Link href="#home">
          <li className={styles.li}>Início</li>
        </Link>
        <Link href="/">
          <li className={styles.li}>Sobre mim</li>
        </Link>
        <Link href="/">
          <li className={styles.li}>Projetos</li>
        </Link>
        <Link href="/">
          <li className={styles.li}>Habilidades</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
