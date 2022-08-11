import Link from "next/link";
import React from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/Login.module.css";

const Signup = () => {
  return (
    <div style={{ height: "100vh" }}>
      <NavBar />
      <div className={styles.Signup}>
        <form className={styles.container}>
          <h2>Register for new Account </h2>
          <input
            type="text"
            required
            className={styles.LoginInput}
            placeholder="Name"
            name=""
            id=""
          />
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
          <input type="submit" className={styles.Button} value="Signup" />
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
