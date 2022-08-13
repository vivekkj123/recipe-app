import React from "react";
import RecipeCard from "./RecipeCard";
import styles from "../styles/Home.module.css";

const RecipeGallery = ({ recipes }) => {
  return (
    <div className={styles.RecipeGallery}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
      {/* <RecipeCard />
      <RecipeCard />
      <RecipeCard /> */}
    </div>
  );
};

export default RecipeGallery;
