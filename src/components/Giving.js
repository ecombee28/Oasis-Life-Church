import React from "react";
import styles from "../Styles/ComponentStyles/giving.module.css";

const Giving = () => {
  return (
    <div className={styles.giving_container}>
      <div className={styles.img_container}></div>
      <div className={styles.giving_wrapper}>
        <p>
          If you would like to join us and help spread the word of God, you can
          take part by giving online.
        </p>
        <button className={`btn ${styles.give_btn}`}>Give Online</button>
      </div>
    </div>
  );
};

export default Giving;
