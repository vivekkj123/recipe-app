import { hasCookie, setCookie } from "cookies-next";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { auth } from "../src/firebase";
import styles from "../styles/Login.module.css";

const Login = () => {
  useEffect(() => {
    if (hasCookie("loggedUser")) {
      Router.push("/");
    }
  }, []);
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });
  let SigninUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, FormData.email, FormData.password)
      .then((AuthUser) => {
        setCookie(
          "loggedUser",
          JSON.stringify({
            id: AuthUser.user.uid,
          })
        );
        Router.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div style={{ height: "100vh" }}>
      <NavBar />
      <div className={styles.Login}>
        <form className={styles.container}>
          <h2>Login </h2>
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
            onClick={SigninUser}
            className={styles.Button}
            value="Login"
          />
          <Link href={"/signup"}>
            <p
              style={{
                color: "#000",
                cursor: "pointer",
              }}
            >
              Register for a new Account...
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
