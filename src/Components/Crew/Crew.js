import { Route, Routes } from "react-router-dom";
import TitlePages from "../Shared/TitlePages";
import styles from "./Crew.module.scss";
import CrewRoute from "./CrewRoute";
import { crewData } from "../../Data/Data";

const Crew = () => {

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
