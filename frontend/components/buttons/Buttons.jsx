import styles from "./Buttons.module.scss";

function ButtonPrimary({ children, ...props }) {
  return (
    <button className={styles.buttonPrimary} {...props}>
      {children}
    </button>
  );
}

function ButtonSecondary({ children, ...props }) {
  return (
    <button className={styles.buttonSecondary} {...props}>
      {children}
    </button>
  );
}

export { ButtonPrimary, ButtonSecondary };