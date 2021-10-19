import React, { useState, useEffect } from "react";
import styles from "../Styles/ComponentStyles/eventsComponent.module.css";
import { getPostBySlug } from "../api/api";
import UseImageBuilder from "../customHooks/useImageBuilder";
import PortableText from "@sanity/block-content-to-react";

export const EventComponent = ({ match }) => {
  const {
    params: { slug },
  } = match;
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const { imageUrl } = UseImageBuilder(blog);

  useEffect(() => {
    const fetchData = async () => {
      const post = await getPostBySlug(slug);
      await setBlog(post);
      setLoading(false);
    };

    fetchData();
  }, [slug]);

  return (
    <div className={styles.main_container}>
      {/* <div className={styles.hero_container}>
        <p className={styles.hero_title}>Events</p>
      </div> */}
      <section className={styles.content_wrapper}>
        <p className={styles.title}>{!loading && blog.title}</p>
        <div className={styles.image_wrapper}>
          <img src={imageUrl} alt="" />
        </div>
        <div className={styles.event_content}>
          <p className={styles.time}>{blog.event_when}</p>
          <p className={styles.time}>{blog.event_Time}</p>
          <div className={styles.body_container}>
            <PortableText
              blocks={blog.body}
              projectId="jynldnuf"
              dataset="production"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
