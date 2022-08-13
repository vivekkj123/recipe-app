import { hasCookie } from "cookies-next";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { auth, db } from "../src/firebase";
import styles from "../styles/Login.module.css";

const Signup = () => {
  useEffect(() => {
    if (hasCookie("loggedUser")) {
      Router.push("/");
    }
  }, []);
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  let SignupUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, FormData.email, FormData.password)
      .then((authUser) => {
        setDoc(doc(db, "users", authUser.user.uid), {
          name: FormData.name,
          email: authUser.user.email,
        })
        .then(() => {
          Router.push("/login");
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div style={{ height: "100vh" }}>
      <NavBar />
      <div className={styles.Signup}>
        <form className={styles.container}>
          <h2>Register for new Account </h2>
          <input
            value={FormData.name}
            onChange={(e) => setFormData({ ...FormData, name: e.target.value })}
            type="text"
            required
            className={styles.LoginInput}
            placeholder="Name"
            name=""
            id=""
          />
          <input
            type="email"
            value={FormData.email}
            onChange={(e) =>
              setFormData({ ...FormData, email: e.target.value })
            }
            required
            className={styles.LoginInput}
            placeholder="E-mail"
            name=""
            id=""
          />
          <input
            type="password"
            value={FormData.password}
            onChange={(e) =>
              setFormData({ ...FormData, password: e.target.value })
            }
            required
            className={styles.LoginInput}
            placeholder="Password"
            name=""
            id=""
          />
          <input
            type="submit"
            className={styles.Button}
            value="Signup"
            onClick={SignupUser}
          />
          <Link href={"/login"}>
            <p
              style={{
                color: "#000",
                cursor: "pointer",
              }}
            >
              Login to Existing Account
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
