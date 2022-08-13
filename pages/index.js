import { collection, doc, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import RecipeCard from "../components/RecipeCard";
import RecipeGallery from "../components/RecipeGallery";
import Search from "../components/Search";
import { db } from "../src/firebase";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [Recipes, setRecipes] = useState([]);
  const [TempRecipes, setTempRecipes] = useState([]);
  useEffect(() => {
    let records = [];
    getDocs(query(collection(db, "recipes"))).then((docs) => {
      docs.forEach((doc) => {
        records.push({...doc.data(), id:doc.id});
      });
      setRecipes(records);
      setTempRecipes(records)
    });
  }, []);
  console.log(Recipes);
  return (
    <div>
      <NavBar />
      <Search Recipes={Recipes} TempRecipes={TempRecipes} setTempRecipes={setTempRecipes}/>
      <h1>Recipes</h1>
      <RecipeGallery recipes={TempRecipes} />
    </div>
  );
};

export default Home;
