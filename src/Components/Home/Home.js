import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className={styles.homePage}>
      <div className={styles.container}>
      <section className={styles.text}>
        <h2>
          So, you want to travel to
          <span>Space</span>
        </h2>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>

      <div className={styles.wordSpace}>Explore</div>
      </div>
    </main>
  );
};

export default Home;
