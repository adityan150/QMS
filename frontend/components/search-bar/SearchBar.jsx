import styles from "./SearchBar.module.scss";

import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ placeholder }) {
  return (
    <div className={styles.searchBar}>
      <SearchIcon />
      <input
        type="search"
        name="searchQuery"
        id="query"
        placeholder={placeholder ?? " "}
      />
    </div>
  );
}
