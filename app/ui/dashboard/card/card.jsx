import styles from "./card.module.css";
import { MdInsertChart } from "react-icons/md";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdInsertChart size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Chart</span>
        <span className={styles.number}>98.23</span>
        <span className={styles.detail}>
          <span className={styles.positive}>12%</span>more than previous report
        </span>
      </div>
      Card
    </div>
  );
};

export default Card;
