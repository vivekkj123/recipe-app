import { doc, getDoc } from "firebase/firestore";
import NavBar from "../../components/NavBar";
import { db } from "../../src/firebase";
import styles from "../../styles/recipeView.module.css";

const RecipePage = (props) => {
  return (
    <>
      <NavBar />
      <div className={styles.RecipePage}>
        <p className={styles.RecipeTitle}>{props.title}</p>
        <p className={styles.RecipeAuthorText}>
          Recipe Added by: <span>{props.author}</span>
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={styles.RecipeImage}
          alt={props.title}
          src={props.imageLink}
        />
        <h2>Ingredients</h2>
        <p>{props.ingredients}</p>
        <h2>Steps to prepare </h2>
        <p>{props.howToCook}</p>
      </div>
    </>
  );
};
export async function getServerSideProps(context) {
  let id = context.params.id;
  let collectionRef = await getDoc(doc(db, "recipes", id));
  const data = collectionRef.data();
  return {
    props: {
      title: data.title,
      author: data.author,
      howToCook: data.howToCook,
      imageLink: data.imagelink,
      ingredients: data.ingredients,
    },
  };
}
export default RecipePage;
