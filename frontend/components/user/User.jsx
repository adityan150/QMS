import styles from "./User.module.scss";

function User({ data }) {
  return (
    <div className={styles.user}>
      <img src={data.img} alt="" />
      <div className={styles.info}>
        <div className={styles.uid}>
          UID: <span className={styles.value}>{data.UID}</span>
        </div>
        <h1 className={styles.name}>{data.name}</h1>
        <h2 className={styles.class}>({data.desc})</h2>
        <div className={styles.editProfile}>edit profile</div>
      </div>
    </div>
  );
}

export default User;
