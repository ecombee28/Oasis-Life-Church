import React from "react";
import styles from "../Styles/ComponentStyles/events.module.css";
import EventContainer from "./eventContainer";

const Events = () => {
  return (
    <div className={styles.events_container}>
      <p>Find out what is going on at Oasis Life</p>
      <span>Latest Events</span>
      <EventContainer
        image=""
        title="Family Picnic"
        body="Join us for our fall family picnic.This a great time to fellowship with
            your fellow brothers and sisters in Christ."
        location="Oasis Life Church"
        when="Sunday October 22"
        time="11:00am"
      />
      <EventContainer
        image=""
        title="Family Picnic"
        body="Join us for our fall family picnic.This a great time to fellowship with
            your fellow brothers and sisters in Christ."
        location="Oasis Life Church"
        when="Sunday 10, November"
        time="11:00am"
      />

      <button className="btn">More Events</button>
    </div>
  );
};

export default Events;
