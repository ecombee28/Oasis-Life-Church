import React, { useState, useEffect } from "react";
import styles from "../Styles/ComponentStyles/scrollToTop.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    function getHeight() {
      if (window.scrollY > 1200) {
        setShow(true);
      } else {
        setShow(false);
      }
    }

    window.addEventListener("scroll", getHeight);

    //return window.removeEventListener("scroll", getHeight);
  });

  return (
    <>
      <div
        className={`${styles.scroll_container} ${
          show ? styles.show : styles.hide
        }`}
        onClick={scrollUp}
      >
        <FontAwesomeIcon icon={faChevronUp} className={styles.move_up} />
      </div>
    </>
  );
};

export default ScrollToTop;
