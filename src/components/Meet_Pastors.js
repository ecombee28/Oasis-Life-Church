import React from "react";
import styles from "../Styles/ComponentStyles/meetPastors.module.css";
import { Link } from "react-router-dom";

const MeetPastors = () => {
  return (
    <div id="pastors" className={styles.meet_pastors_container}>
      <div className={styles.left_wrapper}>
        <div className={styles.text_container}>
          <h1>
            Meet the <span>Pastors</span>
          </h1>
          <p>
            Bruce and Tammy Orner are the pastors at Oasis Life Church. They
            have been ministers for more then 30 years.They have been the lead
            Pastors at Oasis Life for more then a year.
          </p>
          <Link
            to={{
              pathname: "/About",
              aboutProps: { menu_focus: "ourStory" },
            }}
            style={{ textDecoration: "none" }}
          >
            <button className={`btn ${styles.meet_pastor_btn} `}>
              Our Story
            </button>
          </Link>
          <Link
            to={{
              pathname: "/About",
              aboutProps: { menu_focus: "beliefs" },
            }}
            style={{ textDecoration: "none" }}
          >
            <button className={`btn ${styles.meet_pastor_btn} `}>
              Our Beliefs
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.right_wrapper}>
        <div className={styles.pastors_img}></div>
      </div>
    </div>
  );
};

export default MeetPastors;
