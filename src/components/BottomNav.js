import React, { useEffect, useRef, useState } from "react";
import styles from "../Styles/ComponentStyles/bottomNav.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const BottomNav = () => {
  const [show, setShow] = useState(false);
  const ref = useRef();

  const closeMenu = () => {
    setShow(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [show]);

  return (
    <div>
      <div
        className={`${styles.pop_up} ${show && styles.show_popup}`}
        ref={ref}
      >
        <Link
          to={{
            pathname: "/About",
            aboutProps: { menu_focus: "ourStory" },
          }}
          style={{ textDecoration: "none" }}
        >
          <p
            className={`${styles.drop_menu_link} ${
              !show ? styles.fadeout : styles.fadein
            }`}
            onClick={closeMenu}
          >
            Our Story
          </p>
        </Link>
        <Link
          to={{
            pathname: "/About",
            aboutProps: { menu_focus: "beliefs" },
          }}
          style={{ textDecoration: "none" }}
        >
          <p
            className={`${styles.drop_menu_link} ${
              !show ? styles.fadeout : styles.fadein
            }`}
            onClick={closeMenu}
          >
            Our Beliefs
          </p>
        </Link>
        <Link
          to={{
            pathname: "/About",
            aboutProps: { menu_focus: "contact" },
          }}
          style={{ textDecoration: "none" }}
        >
          <p
            className={`${styles.drop_menu_link} ${
              !show ? styles.fadeout : styles.fadein
            }`}
            onClick={closeMenu}
          >
            {`Contact & Directions`}
          </p>
        </Link>
        <Link
          to={{
            pathname: "/About",
            aboutProps: { menu_focus: "prayer" },
          }}
          style={{ textDecoration: "none" }}
        >
          <p
            className={`${styles.drop_menu_link} ${
              !show ? styles.fadeout : styles.fadein
            }`}
            onClick={closeMenu}
          >
            Prayer Request
          </p>
        </Link>
      </div>

      <div className={styles.bottom_nav}>
        <div className={styles.bottom_link_container}>
          <Link to={`/`} style={{ textDecoration: "none" }} onClick={closeMenu}>
            <li className={styles.bottom_links}>Home</li>
          </Link>
        </div>
        <div className={styles.bottom_link_container}>
          <li
            className={styles.bottom_links}
            onClick={() => setShow(!show)}
            ref={ref}
          >
            About
            {show ? (
              <FontAwesomeIcon
                icon={faChevronDown}
                className={styles.arrow_icon}
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronUp}
                className={styles.arrow_icon}
              />
            )}
          </li>
        </div>
        <div className={styles.bottom_link_container}>
          <Link
            to={`/Sermons`}
            style={{ textDecoration: "none" }}
            onClick={closeMenu}
          >
            <li className={styles.bottom_links}>Sermons</li>
          </Link>
        </div>
        <div className={styles.bottom_link_container}>
          <Link
            to={`/Give`}
            style={{ textDecoration: "none" }}
            onClick={closeMenu}
          >
            <li className={styles.bottom_links}>Give</li>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
