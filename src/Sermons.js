import React from "react";
import styles from "./Styles/MainPageStyles/Sermons.module.css";

export const Sermons = () => {
  return (
    <div className={styles.main_sermons_container}>
      <div className={styles.sermons_hero}>
        <section className={styles.sermons_text_area}>
          <p className={styles.title}>Sermons</p>
          <p className={styles.scripture}>
            "And we know that for those who love God all things work together
            for good, for those who are called according to His purpose." -
            Romans 8:28
          </p>
        </section>
      </div>
      <div className={styles.sermons_wrapper}>
        <h1>Coming Soon!</h1>
      </div>
    </div>
  );
};
