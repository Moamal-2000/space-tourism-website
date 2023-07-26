import { useEffect, useRef, useState } from "react";
import styles from "./Nav.module.scss";
import NavLinks from "./NavLinks";

const Nav = () => {
  const headerNav = useRef(null),
    isNavLoading = useRef(false),
    [isNavActive, setIsNavActive] = useState(false);


  function handleNavIcon() {
    if (isNavLoading.current) return;
    isNavLoading.current = true;

    setTimeout(() => {
      setIsNavActive((prevVal) => !prevVal);
      isNavLoading.current = false;
    }, 500);
  }


  function closeNav(delayTime = 0, e) {
    let isSameHref = false;

    if (e) isSameHref = window.location.href === e.target.href;

    if (isNavLoading.current || isSameHref) return;
    isNavLoading.current = true;

    setTimeout(() => {
      setIsNavActive(false);
      isNavLoading.current = false;
    }, delayTime);
  }


  function changeFaviconImg(e, faviconImgs) {
    const favicon = document.querySelector('link[rel="shortcut icon"'),
      clickedSpan = e.target.querySelector("span"),
      indexSpan = +clickedSpan?.innerHTML;

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
      <div className={styles.navIcon} onClick={() => handleNavIcon()}>
        <img
          src={require("../assets/shared/icon-hamburger.svg").default}
          alt="Nav icon"
        />
      </div>

      <nav
        className={`${styles.desktopNav} ${isNavActive ? styles.active : ""}`}
      >
        <div className={styles.closeNavIcon} onClick={() => closeNav(500)}>
          <img
            src={require("../assets/shared/icon-close.svg").default}
            alt="close icon"
          />
        </div>

        <ul ref={headerNav}>
          <NavLinks />
        </ul>
      </nav>
    </>
  );
};

export default Nav;
