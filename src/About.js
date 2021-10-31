import React, { useState, useEffect } from "react";
import styles from "./Styles/MainPageStyles/About.module.css";
import AboutComponent from "./components/AboutComponent";
import DirectionsComponent from "./components/DirectionsComponent";
import PrayerRequestComponent from "./components/prayerRequestComponent";
import OurBeliefsComponent from "./components/OurBeliefsComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

export const About = (props) => {
  const [focus, setFocus] = useState("ourStory");

  useEffect(() => {
    const changeProps = () => {
      const ob = props.location;

      if (ob.hasOwnProperty("aboutProps")) {
        setFocus(props.location.aboutProps.menu_focus);
      } else {
        setFocus("ourStory");
      }
    };

    changeProps();
  }, [props]);

  return (
    <div className={styles.main_about_container}>
      <div className={styles.main_content}>
        <section className={styles.menu_panel}>
          <div className={styles.menu_links}>
            <div className={styles.title_wrapper}>
              <p className={styles.main_links_title}>About</p>
            </div>
            <div className={styles.link_wrapper}>
              <p
                onClick={() => setFocus("ourStory")}
                className={`${styles.selections} ${
                  focus === "ourStory" && styles.bold
                }`}
              >
                Our Story
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className={` ${
                    focus === "ourStory" ? styles.show_icon : styles.hide_icon
                  }`}
                />
              </p>
              <p
                onClick={() => setFocus("beliefs")}
                className={`${styles.selections} ${
                  focus === "beliefs" && styles.bold
                }`}
              >
                What We Believe
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className={`${
                    focus === "beliefs" ? styles.show_icon : styles.hide_icon
                  }`}
                />
              </p>

              <p
                onClick={() => setFocus("contact")}
                className={`${styles.selections} ${
                  focus === "contact" && styles.bold
                }`}
              >
                {`Contact & Directions`}
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className={`${
                    focus === "contact" ? styles.show_icon : styles.hide_icon
                  }`}
                />
              </p>

              <p
                onClick={() => setFocus("prayer")}
                className={`${styles.selections} ${
                  focus === "prayer" && styles.bold
                }`}
              >
                Prayer Request
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className={`${
                    focus === "prayer" ? styles.show_icon : styles.hide_icon
                  }`}
                />
              </p>
            </div>
          </div>
        </section>
        <section className={styles.display_panel}>
          {focus === "ourStory" && <AboutComponent />}
          {focus === "beliefs" && <OurBeliefsComponent />}
          {focus === "contact" && <DirectionsComponent />}
          {focus === "prayer" && <PrayerRequestComponent />}
        </section>
      </div>
    </div>
  );
};
