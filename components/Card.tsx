import styles from "../styles/Card.module.css";
import Image from "next/image";

const Card = () => {
  return (
    <div className={styles.divHome}>
      <div className={styles.card}>
        <div className={styles.euImage}>
          <Image src="/images/me.png" width="300" height="300" alt="Me" />
        </div>
        <p className={styles.textCard}>
          Olá, meu nome é <strong>Henrique</strong>
        </p>
      </div>
    </div>
  );
};

export default Card;
