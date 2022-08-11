import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";

const NavBar = () => {
  return (
    <div className={styles.Navbar}>
      <Link href={"/"}>
        <h1 style={{ cursor: "pointer" }}>Recipe App</h1>
      </Link>
      <Link href={"/login"}>
        <div className={styles.AccountButton}>Login / Register</div>
      </Link>
    </div>
  );
};

export default NavBar;
