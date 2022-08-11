import React from "react";
import styles from "../styles/Search.module.css";

const Search = () => {
  return (
    <div className={styles.Search}>
      <input type="text" placeholder="Search your recipe" name="" className={styles.SearchInput} />
      <div className={styles.SearchBtn}>
        Search
      </div>
    </div>
  );
};

export default Search;
