import { Outlet } from "react-router-dom";
import TitlePages from "../Shared/TitlePages";
import styles from "./Crew.module.scss";

const Crew = () => {
  return (
    <div className={styles.crewPage}>
      <div className="container">
        <TitlePages numberPage="02" title="MEET YOUR CREW" />
        <Outlet />
      </div>
    </div>
  );
};

export default Crew;
