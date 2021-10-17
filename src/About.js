import React, { useState, useEffect } from "react";
import styles from "./Styles/MainPageStyles/About.module.css";
import AboutComponent from "./components/AboutComponent";
import DirectionsComponent from "./components/DirectionsComponent";
import PrayerRequestComponent from "./components/prayerRequestComponent";
import OurBeliefsComponent from "./components/OurBeliefsComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

export const About = (props) => {
  const menuFocus = props.location.aboutProps.menu_focus;
  const [focus, setFocus] = useState(menuFocus);

  useEffect(() => {
    const changeProps = () => {
      setFocus(props.location.aboutProps.menu_focus);
    };

    changeProps();
  }, [props]);

  return (
    <div className={styles.main_about_container}>
      <div className={styles.about_hero}>
        <section className={styles.about_text_area}>
          <p className={styles.title}>About</p>
          <p>
            "In the world you will have tribulation. But take heart; I have
            overcome the world" - John 16:33
          </p>
        </section>
      </div>
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
                Our Beliefs
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
