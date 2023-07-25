import { Route, Routes } from "react-router-dom";
import TitlePages from "../Shared/TitlePages";
import styles from "./Destination.module.css";
import Planet from "./Planet";
import { planetsData } from "../../Data/Data";

const Destination = () => {

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
