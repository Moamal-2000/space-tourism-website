import { useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  const desktopNav = useRef(null);



  function handleNavIcon() {
    const desktopNavEle = desktopNav.current;
    desktopNavEle.dataset.active
      ? desktopNavEle.removeAttribute("data-active")
      : desktopNavEle.setAttribute("data-active", "true");
  }


  function handleCloseNav() {
    desktopNav.current.removeAttribute("data-active");
  }




  return (
    <>
      <div
        className={styles.navIcon}
        onClick={() => handleNavIcon()}
      >
        <img
          src={require("../assets/shared/icon-hamburger.svg").default}
          alt="Nav icon"
        />
      </div>

      <nav className={styles.desktopNav} ref={desktopNav}>
        <div className={styles.closeNavIcon} onClick={() => handleCloseNav()}>
          <img
            src={require("../assets/shared/icon-close.svg").default}
            alt="close icon"
          />
        </div>
        <ul>
          <li>
            <NavLink to="/">
              <span>01</span>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination">
              <span>02</span>
              Destination
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew">
              <span>03</span>
              Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology">
              <span>04</span>
              Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
