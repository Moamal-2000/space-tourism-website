import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  const desktopNav = useRef(null);
  const headerNav = useRef(null)
  const isNavLoading = useRef(false)


  function handleNavIcon() {
    const desktopNavEle = desktopNav.current;

    if (isNavLoading.current) return
    isNavLoading.current = true

    setTimeout(() => {
      desktopNavEle.dataset.active
      ? desktopNavEle.removeAttribute("data-active")
      : desktopNavEle.setAttribute("data-active", "true");
      isNavLoading.current = false
    }, 500);
  }


  function closeNav(delayTime = 0, e) {
    let isSameHref = false

    if (e) isSameHref = window.location.href === e.target.href

    if (isNavLoading.current || isSameHref) return

    isNavLoading.current = true
    setTimeout(() => {
      console.log('y');
      desktopNav.current.removeAttribute("data-active")
      isNavLoading.current = false
    }, delayTime)
  }


  useEffect(() => {
    const headerNavLinks = Array.from(headerNav.current.querySelectorAll("li a"))

    headerNavLinks.forEach(link => {
      link.addEventListener("click", (e) => closeNav(800, e))
    })

    return () => {
      headerNavLinks.forEach(link => {
        link.removeEventListener("click", closeNav)
      })
    }
  }, []);



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
        <div className={styles.closeNavIcon} onClick={() => closeNav(500)}>
          <img
            src={require("../assets/shared/icon-close.svg").default}
            alt="close icon"
          />
        </div>

        <ul ref={headerNav}>
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
