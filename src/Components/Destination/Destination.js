import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import TitlePages from "../Shared/TitlePages";
import styles from "./Destination.module.css";
import Planet from "./Planet";

const Destination = () => {
  const [planetsData] = useState([
    {
      planetName: "Moon",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      avgDistance: "384,400 km",
      travelTime: "3 days",
      imagePath: require("../assets/destination/image-moon.png"),
      id: 1,
    },
    {
      planetName: "Mars",
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      avgDistance: "225 mil. km",
      travelTime: "9 months",
      imagePath: require("../assets/destination/image-mars.png"),
      id: 2,
    },
    {
      planetName: "Europa",
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      avgDistance: "628 mil. km",
      travelTime: "3 years",
      imagePath: require("../assets/destination/image-europa.png"),
      id: 3,
    },
    {
      planetName: "Titan",
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      avgDistance: "1.6 bil. km",
      travelTime: "7 years",
      imagePath: require("../assets/destination/image-titan.png"),
      id: 4,
    },
  ]);

  return (
    <div className={styles.destinationPage}>
      <div className="container">
        <TitlePages numberPage="01" title="PICK YOUR DESTINATION" />

        <div className={styles.planetsContainer}>
          <Routes>
            {planetsData.map((data) => {
              if (data.id === 1) {
                return (
                  <Route
                    key={data.id}
                    path={`/`}
                    element={<Planet data={data} />}
                  />
                );
              }
              return (
                <Route
                  key={data.id}
                  path={`/${data.planetName.toLowerCase()}`}
                  element={<Planet data={data} />}
                />
              );
            })}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Destination;



// Moamal