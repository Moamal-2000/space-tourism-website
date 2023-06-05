import styles from "../Destination/shared-styles.module.css";

const Planet = ({ data }) => {
  return (
    <>
      <div className={styles.img}>
        <img src={data.imagePath} alt="" />
      </div>

      <div className={styles.content}>
        <h3 className={styles.planetName}>Moon</h3>
        <p className={styles.description}>
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>

        <div className={styles.box}>
          <span>Avg. Distance</span>
          <span>384,400 Km</span>
        </div>

        <div className={styles.box}>
          <span>Est. Travel Time</span>
          <span>3 Days</span>
        </div>
      </div>
    </>
  );
};

export default Planet;
