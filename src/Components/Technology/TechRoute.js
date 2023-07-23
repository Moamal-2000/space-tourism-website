import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./TechRoute.module.css";

const TechRoute = ({ data }) => {
  const location = useLocation();

  return (
    <div className={styles.techContainer}>
      <div className={styles.techContent}>
        <div className={styles.textContainer}>
          <p className={styles.role}>THE TERMINOLOGY..</p>
          <p className={styles.name}>{data.name}</p>
          <p className={styles.bio}>{data.bio}</p>
        </div>

        <nav className={styles.techNav}>
          <ul>
            <li>
              <Link
                className={`${location.pathname === "/technology" ? "active" : ""}`}
                to="/technology"
              >
                1
              </Link>
            </li>
            <li>
              <NavLink to="/technology/spaceport">2</NavLink>
            </li>
            <li>
              <NavLink to="/technology/capsule">3</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.techImg}>
        <img src={data.img} alt={data.name} title={data.name} />
      </div>
    </div>
  );
};

export default TechRoute;
