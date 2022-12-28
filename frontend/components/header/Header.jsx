import styles from "./Header.module.scss";

function Header({ client, account }) {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.title}>
          <span className={styles.client}>{client}</span> Helpdesk :
          <span className={styles.account}>{account}</span>
        </div>
        <span className={styles.feedback}>Feedback</span>
      </div>
    </div>
  );
}

export default Header;
