import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";

const Home = () => {
  const navigateTo = useNavigate();

  function handleExploreLink(e) {
    const favicon = document.querySelector('link[rel="shortcut icon"');

    e.preventDefault();

    setTimeout(() => {
      navigateTo("/destination");
      favicon.href = "https://img.icons8.com/fluency/96/waning-crescent.png";
    }, 400);
  }

  return (
    <main className={styles.homePage}>
      <div className="container">
        <section className={styles.text}>
          <h1>
            So, you want to travel to
            <span>Space</span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>

        <NavLink
          className={styles.wordSpace}
          to="/destination"
          onClick={(e) => handleExploreLink(e)}
        >
          Explore
        </NavLink>
      </div>
    </main>
  );
};

export default Home;
