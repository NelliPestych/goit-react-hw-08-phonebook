import React from "react";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Home Page</h2>
      <p className={styles.p}>Welcome!</p>
    </div>
  );
}

export default Home;
