import styles from "./TitlePages.module.css";

const TitlePages = ({numberPage, title}) => {
  return (
    <h2 className={styles.introduction}>
      <span>{numberPage}</span> {title}
    </h2>
  );
};

export default TitlePages;