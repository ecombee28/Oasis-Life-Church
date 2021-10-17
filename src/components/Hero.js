import React from "react";
import styles from "../Styles/ComponentStyles/hero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_wrapper}>
        <h1>Welcome</h1>
        <p>Join us live or in-person every Sunday at 10:30am</p>
        <div className={styles.btn_wrapper}>
          <button className={`btn ${styles.hero_btn}`}>Join us live</button>
          <button className={`btn ${styles.hero_btn}`}>About us</button>
        </div>
        <div className={styles.scroll}>
          <p>Scroll Down</p>
          <FontAwesomeIcon
            icon={faAngleDoubleDown}
            className={styles.icon}
            onClick={scrollToTop}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
