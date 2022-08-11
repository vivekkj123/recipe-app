import React from "react";
import NavBar from "../components/NavBar";
import RecipeCard from "../components/RecipeCard";
import Search from "../components/Search";
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Search />
      <h1>Recipes</h1>
      <div className={styles.RecipeGallery}>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </div>
  );
};

export default Home;
