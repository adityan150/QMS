import Navbar from "../components/navbar/Navbar";
import NewQuery from "../components/new-query/NewQuery";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../styles/Query.module.scss";
import Layout from "../components/Layout";

function Query() {
  return (
    <Layout>
      <div className={styles.query}>
        <Navbar current="query" />
        <div className={styles.queryContainer}>
          <div className={styles.searchBar}>
            <SearchIcon />
            <input type="search" name="searchQuery" id="query" />
          </div>
          <NewQuery />
        </div>
      </div>
    </Layout>
  );
}

export default Query;
