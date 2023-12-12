import { styles } from "../styles/Container.modules.css";
import paisaje from "../../public/paisaje.jpg";

export const Container = () => {
  return (
    <div className={styles.container}>
      <img src="paisaje" alt="" />
    </div>
  );
};
