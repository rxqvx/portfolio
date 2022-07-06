import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";

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
