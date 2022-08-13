import React, { useState } from "react";
import styles from "../styles/Search.module.css";

const Search = ({ Recipes, TempRecipes, setTempRecipes }) => {
  const [Query, setQuery] = useState("");
  const filteredRecipes = TempRecipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(Query.toLowerCase())
  );
  return (
    <div className={styles.Search}>
      <input
        // value={Query}
        onChange={(e) => {
          setQuery(e.target.value);
          if (e.target.value === "") {
            setTempRecipes(Recipes);
          } else {
            setTempRecipes(filteredRecipes);
          }
        }}
        type="text"
        placeholder="Search your recipe"
        name=""
        className={styles.SearchInput}
      />
    </div>
  );
};

export default Search;
