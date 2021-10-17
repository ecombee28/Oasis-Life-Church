import React from "react";
import styles from "../Styles/ComponentStyles/location.module.css";

const Location = () => {
  return (
    <div className={styles.location_container}>
      <div className={styles.location_text_area}>
        <p>
          Come and <span>Join Us</span>
        </p>
        <p>
          "For where two or three are gathered together in my name, there am I
          in the midst of them" - Matthew 18:20
        </p>
        <br />
        <p>{`Sunday - 10:30am | 6:00pm`}</p>
        <p>{`Wednesday - 6:30pm`}</p>
        <br />
        <p>
          We would love see you and worship with you in person but if you can't
          make it don't worry you can join us live.
        </p>
        <button className={`btn ${styles.location_btn}`}>Join Us Live</button>
      </div>
      <div className={styles.location_map_wrapper}>
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
    </div>
  );
};

export default Location;
