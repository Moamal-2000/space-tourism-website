import { Outlet } from "react-router-dom";
import TitlePages from "../Shared/TitlePages";
import styles from "./Technology.module.scss";

const Technology = () => {
  return (
    <div className={styles.technologyPage}>
      <div className="container">
        <TitlePages numberPage="04" title="Space Launch 101" />
      </div>

      <div className={styles.techContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default Technology;
