import Link from "next/link";
import React from "react";
import styles from "../styles/RecipeCard.module.css";

const RecipeCard = ({ recipe }) => {
  return (
    <Link href={`/recipe/${recipe.id}`}>
      <div
        className={styles.RecipeCard}
        style={{
          background: `url(${recipe.imagelink}) rgba(0, 0, 0, 0.5)`,
          backgroundBlendMode: "color",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1>
          {recipe.title}
          <br />{" "}
          <span className={styles.RecipeAuthor}>Added by {recipe.author}</span>
        </h1>
      </div>
    </Link>
  );
};

export default RecipeCard;
