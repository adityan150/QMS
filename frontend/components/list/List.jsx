import styles from "./List.module.scss";
import Link from "next/link";

function List({ data }) {
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <li className={styles.listItem} key={item.key}>
          <Link href={item.link} className={styles.link}>
            {item.icon ? item.icon : ""}
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default List;
