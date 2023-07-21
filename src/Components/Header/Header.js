import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <NavLink to="/" className={styles.navLogo}>
        <img src={require("../assets/shared/logo.svg").default} alt="" />
      </NavLink>
      <div className={styles.line}></div>
      <Nav />
    </header>
  );
};

export default Header;
