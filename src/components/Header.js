import React, { useState } from "react";
import styles from "../Styles/ComponentStyles/header.module.css";
import Logo from "../images/logo-2.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

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

  return (
    <>
      <header className={`${open && styles.header_fixed}`}>
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
          >
            About
            {showDropDown ? (
              <FontAwesomeIcon
                icon={faChevronUp}
                className={styles.arrow_icon}
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronDown}
                className={styles.arrow_icon}
              />
            )}
            <div
              className={`${styles.dropdown_menu} ${
                showDropDown && styles.show
              }`}
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
