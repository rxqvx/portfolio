import styles from "../styles/Home.module.css";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <section className={styles.secHome} id="#home">
        <Card />
      </section>
    </>
  );
}
