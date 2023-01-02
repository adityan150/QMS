import styles from "./Counter.module.scss";

export default function Counter({ title, count }) {
  return (
    <div className={`${styles.counter} ${styles[`${title}`]}`}>
      <div className={styles.title}>{title}</div>
      <div className={styles.count}>{count}</div>
    </div>
  );
}
