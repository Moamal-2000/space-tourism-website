import { Route, Routes } from "react-router-dom";
import { techData } from "../../Data/Data";
import TitlePages from "../Shared/TitlePages";
import TechRoute from "./TechRoute";
import styles from "./Technology.module.scss";

const Technology = () => {
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
