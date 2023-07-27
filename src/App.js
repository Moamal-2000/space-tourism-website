import { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Crew from "./Components/Crew/Crew";
import Destination from "./Components/Destination/Destination";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Technology from "./Components/Technology/Technology";
import { OverlayContext } from "./Hooks/OverlayContext";
import { renderCrewRoutes, renderPlanetsRoutes, renderTechRoutes } from "./Methods/methods";
import styles from "./_App.module.scss";

function App() {
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const cursorEffect = useRef(null);

  useEffect(() => {
    function drawCursorEffect(e) {
      cursorEffect.current.style.background = `radial-gradient(400px at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 100, 0.2), transparent 100%)`;
    }

    document.addEventListener("mousemove", (e) => drawCursorEffect(e));

    return () =>
      document.removeEventListener("mousemove", () => drawCursorEffect);
  }, []);

  return (
    <div className="App">
      <OverlayContext.Provider value={{ isOverlayActive, setIsOverlayActive }}>
        <div
          className={`${styles.globalOverlay} ${
            isOverlayActive ? `${styles.active}` : ""
          }`}
          onClick={() => setIsOverlayActive(false)}
        ></div>

        <div className={styles.effectScreen} ref={cursorEffect}></div>

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />}>
            {renderPlanetsRoutes()}
          </Route>
          <Route path="/crew" element={<Crew />}>
            {renderCrewRoutes()}
          </Route>
          <Route path="/technology" element={<Technology />} >
            {renderTechRoutes()}
          </Route>
        </Routes>
      </OverlayContext.Provider>
    </div>
  );
}

export default App;
