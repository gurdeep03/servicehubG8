
import styles from  "./tasks.module.css";
import { Link } from 'react-router-dom';
import{ FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone,faEnvelope,faUser,faPenToSquare,faHouse} from '@fortawesome/free-solid-svg-icons'

library.add(faPhone,faEnvelope,faUser,faPenToSquare,faHouse)

function elect() {
  return (
    <div className={styles.task}>
     <div className={styles.navjet}>
                <div className={styles.logo}><img src="download.png" alt="" />
                </div>
                <div className={styles.home}>
                <Link to="/"><FontAwesomeIcon id={styles.homeicon} icon={faHouse} /></Link>
                </div>
            </div>
    <div className={styles.all}>
      <section className={styles.side}>
        <img src="electricity.jpg" alt="" />
      </section>

      <section className={styles.main}>
        <div className={styles.logincontainer}>
          <p className={styles.title}>
          </p>
          <div className={styles.seprator}></div>
          <p className={styles.welcomemessage}></p>

          <form className={styles.loginform}>
            <div className={styles.formcontrol}>
              <input id={styles.taskinput} placeholder="Enter your city" />
              <i className="fa fa-map-marker" aria-hidden="true"></i>
            </div>
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>How big is your task ?</button>
              <div className={styles.dropdowncontent}>
                <form action="/submit-task" method="post">
                  <label htmlFor="small"><input type="radio" id="small" name="task_size" value="Small" /> Small - Est. 1 hr</label><br/>
                  <label htmlFor="medium"><input type="radio" id="medium" name="task_size" value="Medium" /> Medium - Est. 2-3 hrs</label><br/>
                  <label htmlFor="large"><input type="radio" id="large" name="task_size" value="Large" /> Large - Est. 4+ hrs</label><br/>
                </form>
              </div>
            </div>
            <div className={styles.formcontrol}>
              <input id={styles.taskinput} type="task" placeholder="Describe your task" />
              <i className="fa fa-tasks" aria-hidden="true"></i>
            </div>
            <button className={styles.submit}>Book Your Tasker</button>
          </form>
        </div>
      </section>
      </div> 
    </div>
  );
}

export default elect;