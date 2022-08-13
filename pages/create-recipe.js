import { getCookie } from "cookies-next";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import Router  from "next/router";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { db } from "../src/firebase";
import styles from "../styles/createRecipe.module.css";

const CreateRecipe = () => {
  const [FormData, setFormData] = useState({
    author: "",
    title: "",
    ingredients: "",
    imagelink: "",
    howToCook: "",
  });
  useEffect(() => {
    let uid = JSON.parse(getCookie("loggedUser"));
    getDoc(doc(db, "users", uid.id)).then((author) => {
      setFormData({ ...FormData, author: author.data().name });
    });
  }, []);
  console.log(FormData);
  let AddRecipe = (e) => {
    e.preventDefault();
    addDoc(collection(db, "recipes"), FormData).then(() => {
      Router.push("/");
    });
  };
  return (
    <div>
      <NavBar />
      <div className={styles.createRecipe}>
        <form className={styles.container}>
          <h2>Add New Recipe 🍳</h2>
          <input
            value={FormData.title}
            onChange={(e) =>
              setFormData({ ...FormData, title: e.target.value })
            }
            type="text"
            required
            className={styles.LoginInput}
            style={{ fontWeight: "bold" }}
            placeholder="Recipe Name"
            name=""
            id=""
          />
          <input
            value={FormData.ingredients}
            onChange={(e) =>
              setFormData({ ...FormData, ingredients: e.target.value })
            }
            type="text"
            required
            className={styles.LoginInput}
            placeholder="Ingredients"
            name=""
            id=""
          />
          <input
            value={FormData.imagelink}
            onChange={(e) =>
              setFormData({ ...FormData, imagelink: e.target.value })
            }
            type="url"
            required
            className={styles.LoginInput}
            placeholder="Image Link"
            name=""
            id=""
          />
          <textarea
            value={FormData.howToCook}
            onChange={(e) =>
              setFormData({ ...FormData, howToCook: e.target.value })
            }
            placeholder="How to Cook?"
            className={styles.ExtendedInput}
            name=""
            id=""
            cols="30"
            rows="1000"
          ></textarea>
          <input
            type="submit"
            onClick={AddRecipe}
            className={styles.Button}
            value="Add Recipe"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateRecipe;
