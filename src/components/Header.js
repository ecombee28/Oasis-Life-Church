import React, { useState, useRef, useEffect } from "react";
import styles from "../Styles/ComponentStyles/header.module.css";
import Logo from "../images/logo-2.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const ref = useRef();

  const checkIfMenusOpen = () => {
    if (open) {
      setOpen(false);
    }

    if (showDropDown) {
      setShowDropDown(false);
    }
  };

  const dropDownMenu = () => {
    setShowDropDown(!showDropDown);
    console.log(showDropDown);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (showDropDown && ref.current && !ref.current.contains(e.target)) {
        setShowDropDown(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showDropDown]);

  return (
    <>
      <header className={`${showDropDown && styles.black_background}`}>
        <div
          className={`${styles.logo_container} ${open && styles.logo_fixed}`}
        >
          <Link to={`/`} style={{ textDecoration: "none" }}>
            <img
              src={Logo}
              alt=""
              className={styles.logo}
              onClick={checkIfMenusOpen}
            />
          </Link>
        </div>

        <ul className={`${styles.nav_links} ${open && styles.open}`}>
          <li
            className={`${styles.nav_list} ${open && styles.fade} ${
              styles.about_link
            }`}
            onClick={dropDownMenu}
            ref={ref}
          >
            About
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`${styles.arrow_icon}  ${
                showDropDown && styles.rotate
              }`}
            />
            <div
              className={`${styles.dropdown_menu} ${
                showDropDown && styles.show
              }`}
              ref={ref}
            >
              <Link
                to={{
                  pathname: "/About",
                  aboutProps: { menu_focus: "ourStory" },
                }}
                style={{ textDecoration: "none" }}
              >
                <p className={styles.drop_menu_link} onClick={checkIfMenusOpen}>
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
                <p className={styles.drop_menu_link} onClick={checkIfMenusOpen}>
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
                  className={styles.drop_menu_link}
                  onClick={checkIfMenusOpen}
                >{`Contact & Directions`}</p>
              </Link>
              <Link
                to={{
                  pathname: "/About",
                  aboutProps: { menu_focus: "prayer" },
                }}
                style={{ textDecoration: "none" }}
              >
                <p className={styles.drop_menu_link} onClick={checkIfMenusOpen}>
                  Prayer Request
                </p>
              </Link>
            </div>
          </li>

          <Link to={`/Sermons`} style={{ textDecoration: "none" }}>
            <li
              className={`${styles.nav_list} ${open && styles.fade}`}
              onClick={checkIfMenusOpen}
            >
              Sermons
            </li>
          </Link>
          <Link to={`/Events`} style={{ textDecoration: "none" }}>
            <li
              className={`${styles.nav_list} ${open && styles.fade}`}
              onClick={checkIfMenusOpen}
            >
              Events
            </li>
          </Link>
          <Link to={`/Give`} style={{ textDecoration: "none" }}>
            <li
              className={`${styles.nav_list} ${open && styles.fade} `}
              onClick={checkIfMenusOpen}
            >
              Give
            </li>
          </Link>
        </ul>
      </header>
    </>
  );
};

export default Header;
