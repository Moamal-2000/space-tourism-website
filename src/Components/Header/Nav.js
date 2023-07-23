import { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  const desktopNav = useRef(null),
    headerNav = useRef(null),
    isNavLoading = useRef(false),
    path = useLocation().pathname;


  function handleNavIcon() {
    const desktopNavEle = desktopNav.current;

    if (isNavLoading.current) return;
    isNavLoading.current = true;

    setTimeout(() => {
      desktopNavEle.dataset.active
        ? desktopNavEle.removeAttribute("data-active")
        : desktopNavEle.setAttribute("data-active", "true");
      isNavLoading.current = false;
    }, 500);
  }


  function closeNav(delayTime = 0, e) {
    let isSameHref = false;

    if (e) isSameHref = window.location.href === e.target.href;

    if (isNavLoading.current || isSameHref) return;

    isNavLoading.current = true;
    setTimeout(() => {
      desktopNav.current.removeAttribute("data-active");
      isNavLoading.current = false;
    }, delayTime);
  }


  function changeFaviconImg(e, faviconImgs) {
    const favicon = document.querySelector('link[rel="shortcut icon"');
    const clickedSpan = e.target.querySelector("span");
    const indexSpan = +clickedSpan?.innerHTML;

    for (let i = 1; i <= faviconImgs.length; i++)
      if (indexSpan === i) favicon.href = faviconImgs[i - 1];
  }


  useEffect(() => {
    const headerNavLinks = Array.from(
      headerNav.current.querySelectorAll("li a")
    );
    const faviconImgs = [
      "https://img.icons8.com/fluency/96/new-moon.png",
      "https://img.icons8.com/fluency/96/waning-crescent.png",
      "https://img.icons8.com/fluency/96/waxing-gibbous.png",
      "https://img.icons8.com/fluency/96/full-moon.png",
    ];


    function handleNavLinks(e) {
      closeNav(600, e);
      changeFaviconImg(e, faviconImgs);
    }


    headerNavLinks.forEach((link) => {
      link.addEventListener("click", (e) => handleNavLinks(e));
    });

    return () => {
      headerNavLinks.forEach((link) => {
        link.removeEventListener("click", handleNavLinks);
      });
    };
  }, []);


  return (
    <>
      <div
        className={styles.navIcon}
        onClick={() => handleNavIcon()}
        style={{ marginRight: path === "/" && "55px" }}
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
