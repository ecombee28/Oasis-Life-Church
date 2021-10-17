import React from "react";
import styles from "../Styles/ComponentStyles/prayerRequest.module.css";

const PrayerRequestComponent = () => {
  return (
    <div className={styles.main_prayer_container}>
      <div className={styles.prayer_wrapper}>
        <p className={styles.title}>Prayer Request</p>

        <p className={styles.intro_text}>
          We believe prayer makes a difference. How can we pray for you and with
          you? Remember nothing is to big or small for God.
        </p>
        <p className={styles.scripture}>
          "Therefore I say unto you, What things soever ye desire, when ye pray,
          believe that ye receive them, and ye shall have them."{" "}
          <span>- Mark 11:24</span>
        </p>
        <section className={styles.form}>
          <form autoComplete="new-password" className={styles.form}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              autoComplete="Off"
              required
              className={styles.input}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Email"
              className={styles.input}
            />
            <label>Prayer Request</label>
            <textarea
              type="text"
              name="request"
              placeholder="Prayer Request"
              autoComplete="off"
              required
              className={`${styles.input} ${styles.message}`}
            />
            <input
              type="submit"
              className={`btn ${styles.submit_button}`}
              value="Submit"
            ></input>
          </form>
        </section>
      </div>
    </div>
  );
};

export default PrayerRequestComponent;
