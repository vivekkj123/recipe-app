import { getCookie } from "cookies-next";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { db, storage } from "../src/firebase";
import styles from "../styles/createRecipe.module.css";

const CreateRecipe = () => {
  const [ImageasFile, setImageasFile] = useState();
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
  let AddRecipe = (e) => {
    e.preventDefault();
    let storageRef = ref(storage, `files/${Date.now()}-${ImageasFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, ImageasFile);
    uploadTask.then(() => {
      getDownloadURL(storageRef).then((imageLink) => {
        setFormData({ ...FormData, imagelink: imageLink });
        addDoc(collection(db, "recipes"), {
          ...FormData,
          imagelink: imageLink,
        }).then(() => {
          Router.push("/");
        });
      });
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
          <label>Upload Recipe Image</label>
          <input
            required
            className={styles.fileUpload}
            onChange={(e) => {
              setImageasFile(e.target.files[0]);
            }}
            type="file"
            name="recipeImage"
            accept="image/png, image/jpeg, image/jpg"
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
