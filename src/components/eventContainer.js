import React from "react";
import styles from "../Styles/ComponentStyles/events.module.css";
import UseImageBuilder from "../customHooks/useImageBuilder";
import PortableText from "@sanity/block-content-to-react";
import { Link } from "react-router-dom";

const eventContainer = ({ blog }) => {
  const { imageUrl } = UseImageBuilder(blog);

  return (
    <div className={styles.event_box}>
      <div className={styles.event_box_img}>
        <img src={imageUrl} alt="" className={styles.img} />
      </div>
      <div className={styles.event_box_msg}>
        <p className={styles.title}>{blog.title}</p>
        <p>{blog.description}</p>

        <p>{`When: ${blog.event_when}`}</p>
        <p>{`Time: ${blog.event_Time}`}</p>
        <Link
          to={`/Events/${blog.slug.current}`}
          style={{ textDecoration: "none" }}
        >
          <button className={styles.info_btn}>More Info</button>
        </Link>
      </div>
    </div>
  );
};

export default eventContainer;
