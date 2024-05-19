import React from 'react';
import styles from './login.module.css';
import { Link } from 'react-router-dom';
import{ FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone,faEnvelope,faUser,faPenToSquare,faHouse} from '@fortawesome/free-solid-svg-icons';

library.add(faPhone,faEnvelope,faUser,faPenToSquare,faHouse);



function Login() {
  return (
    <div style={{background: "url(paintingbackground.jpg)", backgroundSize: "cover"}} className="body">
      <div className={styles.navjet}>
                <div className={styles.logo}><img src="download.png" alt="" />
                </div>
                <div className={styles.home}>
                <Link to="/"><FontAwesomeIcon id={styles.homeicon} icon={faHouse} /></Link>
                </div>
            </div>
      <div style={{textAlign: "center"}}>
        <div style={{width: "300px", margin: "0 auto", padding: "0px"}}>
          <div className={styles.main}>  
            <h1 style={{color: "#e3eadc"}}>ServiceHub</h1>
            <h4 style={{color: "#b2cddd"}}>Your Gateway to Seamless Service</h4>
          </div>
        </div>
      </div>
      <div className={styles.formcontainer}>
        <form className={styles.loginform} method="post" action="/login">
          <label htmlFor="email">Enter username</label><br />
          <input type="email" id="email" name="email" required /><br />
          <label htmlFor="password">Password</label><br />
          <input type="password" id="password" name="password" required /><br />
          <label htmlFor="remember-me">
            <input type="checkbox" id="remember-me" name="remember-me" />Remember me
          </label><br />
          <button type="submit">Login</button><br />
          <a href="/forgot.html">Forgot Password?</a><br />
          <p>Don't have an account?<a href="register.html">Register</a></p>
        </form>
      </div>f
      <div className={styles.none}></div>

    </div>
  );
}

export default Login;
