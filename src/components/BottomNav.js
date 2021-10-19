import React, { useEffect, useRef, useState } from "react";
import styles from "../Styles/ComponentStyles/bottomNav.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

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
          <div
            className={`${styles.drop_menu_link} ${
              !show ? styles.fadeout : styles.fadein
            }`}
            onClick={closeMenu}
          >
            Our Story
          </div>
        </Link>
        <Link
          to={{
            pathname: "/About",
            aboutProps: { menu_focus: "beliefs" },
          }}
          style={{ textDecoration: "none" }}
        >
          <div
            className={`${styles.drop_menu_link} ${
              !show ? styles.fadeout : styles.fadein
            }`}
            onClick={closeMenu}
          >
            Our Beliefs
          </div>
        </Link>
        <Link
          to={{
            pathname: "/About",
            aboutProps: { menu_focus: "contact" },
          }}
          style={{ textDecoration: "none" }}
        >
          <div
            className={`${styles.drop_menu_link} ${
              !show ? styles.fadeout : styles.fadein
            }`}
            onClick={closeMenu}
          >
            {`Contact & Directions`}
          </div>
        </Link>
        <Link
          to={{
            pathname: "/About",
            aboutProps: { menu_focus: "prayer" },
          }}
          style={{ textDecoration: "none" }}
        >
          <div
            className={`${styles.drop_menu_link} ${
              !show ? styles.fadeout : styles.fadein
            }`}
            onClick={closeMenu}
          >
            Prayer Request
          </div>
        </Link>

        <Link to={`/Events`} style={{ textDecoration: "none" }}>
          <div
            className={`${styles.drop_menu_link} ${
              !show ? styles.fadeout : styles.fadein
            }`}
            onClick={closeMenu}
          >
            Events
          </div>
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
            className={`${styles.bottom_links} ${styles.about_stack}`}
            onClick={() => setShow(!show)}
            ref={ref}
          >
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`${styles.arrow_icon}  ${show && styles.rotate}`}
            />
            About
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
