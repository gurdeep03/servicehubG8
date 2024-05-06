import React, { Component } from 'react';
import styles from './connect.module.css';
import { Link } from 'react-router-dom';
import{ FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone,faEnvelope,faUser,faPenToSquare,faHouse} from '@fortawesome/free-solid-svg-icons'

library.add(faPhone,faEnvelope,faUser,faPenToSquare,faHouse)


function connect() {
    const sendEmail = (event) => {
        event.preventDefault();
        // Your email sending logic here
    }
        return (
            <div className={styles.connect}>
            <><div className={styles.navjet}>
                <div className={styles.logo}><img src="download.png" alt="" />
                </div>
                <div className={styles.home}>
                <Link to="/"><FontAwesomeIcon id={styles.homeicon} icon={faHouse} /></Link>
                </div>
            </div>
            <div className={styles.container}>
                    <form id={styles.feedback} onSubmit={sendEmail}>
                        <h3>GET IN TOUCH WITH US</h3>
                        <div className={styles.formcontrol}>
                            <input type="text" id={styles.input} placeholder="Your Name" required />
                            <FontAwesomeIcon id={styles.icon} icon={faUser} />
                        </div>

                        <div className={styles.formcontrol}>
                            <input type="email" id={styles.input} placeholder="Email ID" required />
                            <FontAwesomeIcon id={styles.icon} icon={faEnvelope} />
                        </div>
                        <div className={styles.formcontrol}>
                            <input type="text" id={styles.input} placeholder="Phone No."  required />
                            <FontAwesomeIcon id={styles.icon} icon={faPhone} />
                            
                            
                        </div>

                        <div className={styles.formcontrol}>
                            <input type="text" id={styles.message1} placeholder="How can we help you?" required />
                            <FontAwesomeIcon id={styles.icon} icon={faPenToSquare} />
                        </div>
                        <button type="submit" className={styles.submit}>Send</button>
                        
                    </form>
                </div></>
                </div>
        );
    }

export default connect;