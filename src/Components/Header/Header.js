import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import Nav from "./Nav";

const Header = () => {
  function changeBackFavicon() {
    const favicon = document.querySelector('link[rel="shortcut icon"');
    favicon.href = "https://img.icons8.com/fluency/96/new-moon.png";
  }

  return (
    <header>
      <NavLink
        to="/"
        className={styles.navLogo}
        onClick={() => changeBackFavicon()}
      >
        <img src={require("../assets/shared/logo.svg").default} alt="Home page icon" />
      </NavLink>

      <div className={styles.line}></div>

      <Nav />
    </header>
  );
};

export default Header;
