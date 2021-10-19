import React, { useState, useEffect } from "react";
import styles from "./Styles/MainPageStyles/Events.module.css";
import { getAllPosts } from "./api/api";
import EventContainer from "./components/eventContainer";

export const Events = () => {
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
    <div className={styles.main_wrapper}>
      {/* <div className={styles.hero_container}>
        <p className={styles.hero_title}>Events</p>
      </div> */}
      <div className={styles.main_content}>
        <p className={styles.title}>Events</p>
        {loading ? (
          <p className={styles.loading}>Loading...</p>
        ) : (
          blog.map((b) => <EventContainer blog={b} key={b._id} />)
        )}
      </div>
    </div>
  );
};
