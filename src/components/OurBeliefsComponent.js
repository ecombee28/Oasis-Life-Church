import React from "react";
import styles from "../Styles/ComponentStyles/beliefs.module.css";
import BeliefsMiniContainers from "./BeliefsMiniContainers";
import { Data } from "../Lib/beliefsObject";

const OurBeliefsComponent = () => {
  return (
    <div className={styles.beliefs_wrapper}>
      <p className={styles.title}>What We Believe</p>

      <section className={styles.body_wrapper}>
        {Data.map((d) => (
          <BeliefsMiniContainers title={d.title} body={d.body} />
        ))}
      </section>
    </div>
  );
};

export default OurBeliefsComponent;
