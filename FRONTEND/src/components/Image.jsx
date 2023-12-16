import styles from "../styles/LoginImage.module.css";

export const Image = () => {
  return (
    <div className={styles.container}>
      <div className>
        <img src="/viajes.jpg" className={styles.container} alt="" />
      </div>
    </div>
  );
};
