import styles from "../styles/All.module.scss";
import Navbar from "../components/navbar/Navbar";
import Layout from "../components/Layout";

function All() {
  return (
    <Layout>
      <div className={styles.all}>
        <Navbar current="all" />
        <div className={styles.allContainer}>
          
        </div>
      </div>
    </Layout>
  );
}

export default All;
