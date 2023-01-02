import { useState } from "react";
import styles from "../styles/All.module.scss";
import Navbar from "../components/navbar/Navbar";
import Layout from "../components/Layout";
import SearchBar from "../components/search-bar/SearchBar";
import Table from "../components/table/Table";
import Counter from "../components/counter/Counter";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";

function All() {
  const [showButton, setShowButton] = useState(false);
  return (
    <Layout>
      <div className={styles.all}>
        <Navbar current="all" />
        <div className={styles.allContainer}>
          <div>
            {/* react select element */}
            <SearchBar placeholder={"Search by UID / QueryID"} />
          </div>
          <div className={styles.counters}>
            <Counter title="All" count={14} />
            <Counter title="Untouched" count={3} />
            <Counter title="Active" count={2} />
            <Counter title="Closed" count={5} />
            <Counter title="Unresolved" count={4} />
          </div>
          <div className={styles.buttons}>
            <button disabled={!showButton}>
              <DeleteOutlineOutlinedIcon sx={{ fontSize: "1.1rem" }} />
              &nbsp; Delete
            </button>
            <button disabled={!showButton}>
              <BlockOutlinedIcon sx={{ fontSize: "1.1rem" }} />
              &nbsp; Close
            </button>
            <button disabled={!showButton}>
              <TimelineOutlinedIcon sx={{ fontSize: "1.1rem" }} />
              &nbsp; Activity
            </button>
          </div>
          <Table setShowButton={setShowButton} />
        </div>
      </div>
    </Layout>
  );
}

export default All;
