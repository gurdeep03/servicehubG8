import React from "react";
import styles from "./provider.module.css";
import { FaMapMarker, FaTags } from "react-icons/fa";

function provider(){
 

  return (
    <div className="to">
      <nav className={styles.nav}>
        <img src="download.png" alt="Logo" />
      </nav>

      <div className={styles.main}>
        <div className="side">
          <img src="worker.jpg" alt="Background" />
        </div>

        <div className={styles.logincontainer}>
          <p className="title">
            <h1>Earn money your way</h1>
            <h2></h2>
          </p>
          <div className={styles.separator}></div>
          <p className="welcomemessage">
            See how much you can make tasking on ServiceHub
          </p>

          <form className={styles.loginform}>
            <div className={styles.formcontrol}>
              <input
                type="text"
                placeholder="Enter your location"
              />
              <FaMapMarker className={styles.icon} aria-hidden="true" />
            </div>
            <div className={styles.formcontrol}>
              <input
                type="category"
                placeholder="Category"
                
              />
              <FaTags className={styles.icon} aria-hidden="true" />
            </div>
            <h1 style={{ textAlign: "center" }}>INR 2,500 per hour</h1>

            <button className={styles.submit} id="getStartedBtn" >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default provider;