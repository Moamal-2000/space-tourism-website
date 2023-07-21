import { NavLink } from "react-router-dom";
import styles from "./CrewRoute.module.css";

const CrewRoute = ({ data }) => {
  return (
    <div className={styles.crewContainer}>
      <div className={styles.crewContent}>
        <p className={styles.role}>{data.role}</p>
        <p className={styles.name}>{data.name}</p>
        <p className={styles.bio}>{data.bio}</p>

        <nav className={styles.crewNav}>
          <ul>
            <li>
              <NavLink to="/crew/"></NavLink>
            </li>
            <li>
              <NavLink to="/crew/mark-shuttleworth"></NavLink>
            </li>
            <li>
              <NavLink to="/crew/victor-glover"></NavLink>
            </li>
            <li>
              <NavLink to="/crew/anousheh-ansari"></NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.crewImg}>
        <img src={data.img} alt={data.name} title={data.name} />
      </div>
    </div>
  );
};

export default CrewRoute;
