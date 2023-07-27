import { Outlet } from "react-router-dom";
import TitlePages from "../Shared/TitlePages";
import styles from "./Destination.module.scss";

const Destination = () => {

  return (
    <div className={styles.destinationPage}>
      <div className="container">
        <TitlePages numberPage="01" title="PICK YOUR DESTINATION" />

        <div className={styles.planetsContainer}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Destination;
