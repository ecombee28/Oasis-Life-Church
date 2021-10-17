import React from "react";
import styles from "./Styles/MainPageStyles/Give.module.css";

export const Give = () => {
  return (
    <div className={styles.main_give_container}>
      <div className={styles.give_hero}>
        <section className={styles.give_text_area}>
          <p className={styles.title}>Give</p>
          <p className={styles.scripture}>
            "And we know that for those who love God all things work together
            for good, for those who are called according to His purpose." -
            Romans 8:28
          </p>
        </section>
      </div>
      <div className={styles.give_wrapper}>
        <h1>Coming Soon!</h1>
      </div>
    </div>
  );
};
