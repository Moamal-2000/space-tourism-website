import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "../Destination/shared-styles.module.scss";

const Planet = ({
  data: { planetName, description, avgDistance, travelTime, imagePath },
}) => {
  const location = useLocation();

  return (
    <div className={styles.planetsContainer}>
      <div className={styles.img}>
        <img src={imagePath} alt="planet" />
      </div>

      <div className={styles.content}>
        <nav className={styles.planetsNav}>
          <ul>
            <li>
              <Link
                to={"/destination"}
                className={`${
                  location.pathname === "/destination" ? "active" : ""
                }`}
              >
                Moon
              </Link>
            </li>
            <li>
              <NavLink to={"/destination/mars"}>Mars</NavLink>
            </li>
            <li>
              <NavLink to={"/destination/europa"}>Europa</NavLink>
            </li>
            <li>
              <NavLink to={"/destination/titan"}>Titan</NavLink>
            </li>
          </ul>
        </nav>

        <h3 className={styles.planetName}>{planetName}</h3>
        <p className={styles.description}>{description}</p>

        <hr />

        <div className={styles.boxes}>
        <div className={styles.box}>
          <span>Avg. Distance</span>
          <span>{avgDistance}</span>
        </div>

        <div className={styles.box}>
          <span>Est. Travel Time</span>
          <span>{travelTime}</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Planet;
