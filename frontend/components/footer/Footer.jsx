import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.footerContainer}>
        <li className={styles.link}>My Campus</li>
        <li className={styles.link}>Career</li>
        <li className={styles.link}>About</li>
        <li className={styles.link}>Support</li>
        <li>
          ©Copyright reserved | <span className={styles.link}>Adcratic Studios</span>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
