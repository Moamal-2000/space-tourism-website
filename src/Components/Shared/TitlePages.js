import styles from "./TitlePages.module.scss";

const TitlePages = ({numberPage, title}) => {
  return (
    <h2 className={styles.mainPageTitle}>
      <span>{numberPage}</span> {title}
    </h2>
  );
};

export default TitlePages;
