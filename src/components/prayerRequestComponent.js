import React, { useState } from "react";
import styles from "../Styles/ComponentStyles/prayerRequest.module.css";
import emailjs from "emailjs-com";

const PrayerRequestComponent = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const serviceId = "service_fw1hxme";
  const userId = "user_MjiUwPxmwWo7paZkY1Oir";
  const template = "oasis_prayer_request";

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(serviceId, template, e.target, userId).then(
      (result) => {
        setShowSuccess(true);
        setTimeout(function () {
          setShowSuccess(false);
        }, 10000);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  }

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
          believe that ye receive them, and ye shall have them."
          <span>- Mark 11:24</span>
        </p>

        <section className={styles.form}>
          <div
            className={`${styles.email_sent_successfully} ${
              showSuccess && styles.show
            }`}
          >
            <p className={styles.top}>Thank You</p>
            <p>
              We believe in the power of pray and we will stand in faith with
              you that this request will be meet according to Gods will.
            </p>
          </div>

          <form
            onSubmit={sendEmail}
            autoComplete="new-password"
            className={styles.form}
          >
            <p>
              <span className={styles.required}>* Required</span>
            </p>
            <label>
              Name<span className={styles.required}>*</span>
            </label>
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
            <label>
              Prayer Request<span className={styles.required}>*</span>
            </label>
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
