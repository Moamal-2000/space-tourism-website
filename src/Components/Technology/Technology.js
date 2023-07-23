import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import TitlePages from "../Shared/TitlePages";
import TechRoute from "./TechRoute";
import styles from "./Technology.module.css";

const Technology = () => {
  const [techData] = useState([
    {
      name: "Launch vehicle",
      routePath: "Launch vehicle",
      img: require("../assets/technology/image-launch-vehicle-portrait.jpg"),
      bio: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      id: 1,
    },
    {
      name: "Spaceport",
      routePath: "Spaceport",
      img: require("../assets/technology/image-spaceport-portrait.jpg"),
      bio: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      id: 2,
    },
    {
      name: "Space capsule",
      routePath: "capsule",
      img: require("../assets/technology/image-space-capsule-portrait.jpg"),
      bio: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      id: 3,
    },
  ]);

  return (
    <div className={styles.technologyPage}>
      <div className="container">
        <TitlePages numberPage="04" title="Space Launch 101" />
      </div>

      <div className={styles.techContainer}>
        <Routes>
          {techData.map((obj, i) => {
            let path = obj.routePath.replace(" ", "-").toLowerCase();
            if (!i) path = "/";

            // console.log(path);
            return (
              <Route
                key={obj.id}
                path={path}
                element={<TechRoute data={obj} />}
              />
            );
          })}
        </Routes>
      </div>
    </div>
  );
};

export default Technology;
