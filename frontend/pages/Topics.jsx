import Navbar from "../components/navbar/Navbar";
import Layout from "../components/Layout";
import styles from "../styles/Topics.module.scss";

function Topics() {
  return (
    <Layout>
      <div className={styles.topics}>
        <Navbar current="topics" />
        Topics
      </div>
    </Layout>
  );
}

export default Topics;
