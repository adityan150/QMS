import Navbar from "../components/navbar/Navbar";
import NewQuery from "../components/new-query/NewQuery";
import styles from "../styles/Query.module.scss";
import Layout from "../components/Layout";
import SearchBar from "../components/search-bar/SearchBar";

function Query() {
  return (
    <Layout>
      <div className={styles.query}>
        <Navbar current="query" />
        <div className={styles.queryContainer}>
          <SearchBar />
          <NewQuery />
        </div>
      </div>
    </Layout>
  );
}

export default Query;
