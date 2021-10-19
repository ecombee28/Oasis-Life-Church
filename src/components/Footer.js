import React from "react";
import styles from "../Styles/ComponentStyles/footer.module.css";
import logo from "../images/logo-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import BottomNav from "./BottomNav";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer_location}>
          <img src={logo} alt="" className={styles.footer_logo} />
          <a
            href="https://www.google.com/maps/place/6301+W+Thomas+Rd,+Phoenix,+AZ+85033/@33.4798503,-112.1978841,17z/data=!3m1!4b1!4m5!3m4!1s0x872b151ea6fb8ccb:0x9b14dbae52eac9d6!8m2!3d33.4798458!4d-112.1956954"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>6301 W Thomas Rd</p>
            <p>Phoenix, AZ 85033</p>
          </a>

          <a href="tel:6235551234">
            <p>(623)555-1234</p>
          </a>
          <a
            href="mailto:Bruce.Orner@oasislifeaz.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Bruce.Orner@oasislifeaz.com</p>
          </a>
        </div>
        <div className={styles.footer_hyperlink}>
          <h2>Service Times</h2>
          <ul>
            <li>Sunday Morning - 10:30am</li>
            <li>Sunday Evening - 5:00pm</li>
            <li>Wednesday Bible Study - 6:30pm</li>
          </ul>
        </div>
        <div className={styles.footer_social}>
          <FontAwesomeIcon
            icon={faFacebook}
            className={styles.footer_social_icon}
          />
          <FontAwesomeIcon
            icon={faYoutube}
            className={styles.footer_social_icon}
          />
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Footer;
