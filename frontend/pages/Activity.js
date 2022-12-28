import Navbar from "../components/navbar/Navbar";
import Layout from "../components/Layout";
import styles from "../styles/Activity.module.scss";

function Activity() {
  return (
    <Layout>
      <div className={styles.activity}>
        <Navbar current="activity" />
        Activity
      </div>
    </Layout>
  );
}

export default Activity;
