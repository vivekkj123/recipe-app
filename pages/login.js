import Link from "next/link";
import React from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/Login.module.css";

const Login = () => {
  return (
    <div style={{ height: "100vh" }}>
      <NavBar />
      <div className={styles.Login}>
        <form className={styles.container}>
          <h2>Login </h2>
          <input
            type="email"
            required
            className={styles.LoginInput}
            placeholder="E-mail"
            name=""
            id=""
          />
          <input
            type="password"
            required
            className={styles.LoginInput}
            placeholder="Password"
            name=""
            id=""
          />
          <input type="submit" className={styles.Button} value="Login" />
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
