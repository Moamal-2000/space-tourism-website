import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import TitlePages from "../Shared/TitlePages";
import styles from "./Crew.module.css";
import CrewRoute from "./CrewRoute";

const Crew = () => {
  const [crewData] = useState([
    {
      name: "Douglas Hurley",
      img: require("../assets/crew/image-douglas-hurley.webp"),
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      id: 1,
    },
    {
      name: "Mark Shuttleworth",
      img: require("../assets/crew/image-mark-shuttleworth.webp"),
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      id: 2,
    },
    {
      name: "Victor Glover",
      img: require("../assets/crew/image-victor-glover.webp"),
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      id: 3,
    },
    {
      name: "Anousheh Ansari",
      img: require("../assets/crew/image-anousheh-ansari.webp"),
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      id: 4,
    },
  ]);

  return (
    <div className={styles.crewPage}>
      <div className="container">
        <TitlePages numberPage="02" title="MEET YOUR CREW" />

        <Routes>
          {crewData.map((obj, i) => {
            let path = obj.name.replace(" ", "-").toLowerCase();
            if (!i) path = "/";

            return (
              <Route
                key={obj.id}
                path={path}
                element={<CrewRoute data={obj} />}
              />
            );
          })}
        </Routes>
      </div>
    </div>
  );
};

export default Crew;
