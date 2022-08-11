import React from "react";
import styles from "../styles/RecipeCard.module.css";

const RecipeCard = () => {
  return (
    <div
      className={styles.RecipeCard}
      style={{
        background:
          "url('https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg') rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "color",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1>
        Biriyani <br />{" "}
        <span className={styles.RecipeAuthor}>Added by Admin</span>
      </h1>
    </div>
  );
};

export default RecipeCard;
