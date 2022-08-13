import { deleteCookie, getCookie, getCookies, hasCookie } from "cookies-next";
import { getAuth, signOut } from "firebase/auth";
import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { auth } from "../src/firebase";
import styles from "../styles/Navbar.module.css";

const NavBar = () => {
  const [CookieData, setCookieData] = useState();
  useEffect(() => {
    let cookieData = getCookie("loggedUser");
    setCookieData(cookieData);
    hasCookie("loggedUser") ? setCookieData(JSON.parse(cookieData)) : null;
  }, []);

  return (
    <div className={styles.Navbar}>
      <Link href={"/"}>
        <h1 style={{ cursor: "pointer" }}>Recipe App</h1>
      </Link>
      {CookieData ? (
        <div className={styles.AuthUserOptions}>
          <Link href={"/create-recipe"}>
            <div className={styles.AccountButton}>Create New Recipe</div>
          </Link>
          <div
            className={styles.AccountButton}
            onClick={() => {
              signOut(auth).then(() => {
                deleteCookie("loggedUser");
                Router.reload();
              });
            }}
          >
            Log out
          </div>
        </div>
      ) : (
        <Link href={"/login"}>
          <div className={styles.AccountButton}>Login / Register</div>
        </Link>
      )}
    </div>
  );
};

export default NavBar;
