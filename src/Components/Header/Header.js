import styles from "./Header.module.css"
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <a href="../Home/Home.js" className={styles.navLogo}>
        <img src={require("../assets/shared/logo.svg").default} alt="" />
      </a>
      <div className={styles.line}></div>
      <Nav />
    </header>
  );
};

export default Header;
