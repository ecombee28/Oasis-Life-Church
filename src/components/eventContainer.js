import React from "react";
import styles from "../Styles/ComponentStyles/events.module.css";
import Picnic from "../images/picnic.jpg";

const eventContainer = ({ image, title, body, location, when, time }) => {
  return (
    <div className={styles.event_box}>
      <div className={styles.event_box_img}>
        <img src={Picnic} alt="" className={styles.img} />
      </div>
      <div className={styles.event_box_msg}>
        <p className={styles.title}>{title}</p>
        <p>{body}</p>
        <p>{`When: ${when}`}</p>
        <p>{`Time: ${time}`}</p>
      </div>
    </div>
  );
};

export default eventContainer;
