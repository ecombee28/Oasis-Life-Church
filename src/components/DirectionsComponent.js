import React from "react";
import styles from "../Styles/ComponentStyles/direction.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faAt, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const DirectionsComponent = () => {
  return (
    <div className={styles.main_direction_container}>
      <div className={styles.direction_wrapper}>
        <p className={styles.title}>{`Contact & Directions`}</p>
        <section className={styles.body_wrapper}>
          <div className={styles.contact}>
            <p>
              <FontAwesomeIcon icon={faPaperPlane} className={styles.icon} />
              6301 W Thomas Rd, Phoenix,AZ 85033
            </p>
            <a href="tel:6235551234">
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              (623)555-1234
            </a>
            <a
              href="mailto:Bruce.Orner@oasislifeaz.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faAt} className={styles.icon} />
              Bruce.Orner@oasislifeaz.com
            </a>
            <h3>Service Times</h3>
            <p>Sunday - 10:30am | 6:00pm</p>
            <p>Wednesday - 6:00pm</p>
          </div>
          <div className={styles.map}>
            <p>{`(Formally known as Eagles Wing Christian Center)`}</p>
            <iframe
              width="100%"
              height="100%"
              title="Google Maps"
              frameBorder="0"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBASnwEYCgWlW5_tE4hvXZmisr9u-xftvg&q=Eagles Wing Christian Center&center=33.47992333560359,-112.19570113540034`}
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DirectionsComponent;
