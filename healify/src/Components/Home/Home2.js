import React from "react";
import image from "../../Assets/homePage.webp";
import styles from "./Home.module.css";
import { Header } from "./Header";

export const Home2 = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles["top-container"]}>
          <div className={styles.img}>
            <img src={image} alt="home" />
          </div>
        </div>

        <footer>
          {" "}
          <div className={styles["bottom-container"]}>
            <a
              className={styles["footer-link"]}
              href="https://twitter.com/iit_tirupati?s=20"
            >
              Twitter
            </a>
            <a className={styles["footer-link"]} href="https://iittp.ac.in/">
              Website
            </a>
            <p className={styles.copyright}>© 2021 IIT Tirupati</p>
          </div>
        </footer>
      </div>
    </>
  );
};