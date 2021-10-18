import React, { useState, useEffect } from "react";
import styles from "../Styles/ComponentStyles/events.module.css";
import EventContainer from "./eventContainer";
import { getAllPosts } from "../api/api";
import { Link } from "react-router-dom";

const Events = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const allPost = await getAllPosts();
      await setBlog(allPost);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.events_container}>
      <p>Find out what is going on at Oasis Life</p>
      <span>Latest Events</span>

      {loading ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        blog.map((b) => <EventContainer blog={b} key={b._id} />)
      )}

      <Link to={`/Events`} style={{ textDecoration: "none" }}>
        <button className="btn">More Events</button>
      </Link>
    </div>
  );
};

export default Events;
