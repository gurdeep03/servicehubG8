import React from "react";
import styles from "../App.module.css";
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone,faEnvelope,faUser,faPenToSquare,faHouse} from '@fortawesome/free-solid-svg-icons'

library.add(faPhone,faEnvelope,faUser,faPenToSquare,faHouse)




function home() {
    return (
        <div className={styles.App}>
        <header>
          <nav className={styles.navbar}>
            <div className={styles.sec} data-aos="fade-right">
              <img src="download1.png" alt="logo" /> {/* Adding logo image */}
              <img src="slogan3.png" alt="slogan" />
            </div>
            <div className={styles.url} data-aos="fade-left">
              <ul>
                <li>
                  <button href="#help" className={styles.nava}>
                    Services
                  </button>
                </li>
                <li>
                  <button className={styles.nava}>Sign up</button>
                </li>
                <li>
                  <Link to="/Login"><button className={styles.login}>
                    Log in</button></Link>
              </li>

            </ul>
            <ul id={styles.btn}>
              <li>
                <button className={styles.Btn} href="Provider.html">
                  Join Us
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header><main>
          <div data-aos="zoom-out" className={styles.back}>
            <section className={styles.hero}>
              <h1>Book trusted help for home tasks</h1>
            </section>

            <div className={styles.searchbar}>
              <div className={styles.entryarea}>
                <input id={styles.searchInput} type="text" required />
                <div className={styles.labelline}>What do you need help with?</div>
              </div>
              <div className="search-button">
                <button id={styles.searchbutton} type="button">
                  <img src="searchicon.png" alt="Search" />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.empty}></div>
        </main><div className={styles.houseservices}>
          <a className={styles.serviceitem}>
            <img src="cleaning.png" alt="Cleaning service" />
            <h2>Cleaning</h2>
            <p>Daily or weekly cleaning services for your home.</p>
          </a>
          <a className={styles.serviceitem}>
            <img src="car-repair.jpg" alt="Car repair service" />
            <h2> Car Repairs</h2>
            <p>Handyman services for repairs and maintenance.</p>
          </a>
          <a className={styles.serviceitem}>
            <img src="gardening.jpg" alt="Gardening service" />
            <h2>Gardening</h2>
            <p>Lawn care and gardening services.</p>
          </a>
          <a className={styles.serviceitem}>
            <img src="carpentry.png" alt="Carpentry service" />
            <h2>Carpentry</h2>
            <p>Custom carpentry and woodworking services.</p>
          </a>
          <a className={styles.serviceitem}>
            <img src="cooking.png" alt="Cooking service" />
            <h2>Cooking</h2>
            <p>Private chef or meal preparation services.</p>
          </a>
          <a className={styles.serviceitem}>
            <img src="painting.png" alt="Painting service" />
            <h2>Painting</h2>
            <p>Interior and exterior painting services.</p>
          </a>
          <a className={styles.serviceitem}>
            <img src="Plumbing.jpg" alt="Plumbing service" />
            <h2>Plumbing</h2>
            <p>Plumbing repairs and installations.</p>
          </a>
          <a className={styles.serviceitem}>
            <img src="electricity.jpg" alt="Electrical service" />
            <h2>Electrical</h2>
            <p>Electrical repairs and installations.</p>
          </a>
          <a className={styles.serviceitem}>
            <img src="carwash.jpeg" alt="Car wash service" />
            <h2>Car Wash</h2>
            <p>Mobile car wash and detailing services.</p>
          </a>
          <a className={styles.serviceitem}>
            <img src="event planning.jpg" alt="Event planning service" />
            <h2>Event Planning</h2>
            <p>Full-service event planning and coordination.</p>
          </a>
          <a className={styles.serviceitem}>
            <img src="pest-control.jpeg" alt="Pest control service" />
            <h2>Pest Control</h2>
            <p>Pest removal and prevention services.</p>
          </a>
        </div><div className={styles.container}>
          <h1 data-aos="fade-right">Your Satisfaction, Guaranteed</h1>
          <div className={styles.headings}>
            <h2 id="happiness-pledge" data-aos="fade-right">
              Happiness Pledge{" "}
              <p
                data-aos="fade-right"
                style={{ color: "#3A522A", fontSize: "small" }}
              >
                If you're not satisfied, we'll work to make it right.
              </p>
            </h2>
            <h2 data-aos="fade-right" id="vetted-taskers">
              Vetted Taskers{" "}
              <p
                data-aos="fade-right"
                style={{ color: "#3A522A", fontSize: "small" }}
              >
                Taskers are always background checked before joining the
                platform.
              </p>
            </h2>
            <h2 data-aos="fade-right" id="dedicated-support">
              Dedicated Support{" "}
              <p
                data-aos="fade-right"
                style={{ color: "#3A522A", fontSize: "small" }}
              >
                Friendly service when you need us - every day of the week.
              </p>
            </h2>
          </div>
        </div>
        <div className={styles.working}>
          <div data-aos="zoom-in" className="bg">
            <div className={styles.picture}>
              <img src="how.jpg" alt="How it works image" />
            </div>

            <div id={styles.howitworks}>
              <h2>How it works</h2>
              <ol>
                <li>
                  <h3>Choose a Tasker</h3>
                  <p>
                    Browse our marketplace of skilled Taskers and choose the one
                    that fits your needs and budget.
                  </p>
                </li>
                <li>
                  <h3>Schedule a Tasker</h3>
                  <p>
                    Schedule your Tasker for a time that works for you, as early
                    as today.
                  </p>
                </li>
                <li>
                  <h3>Chat, Pay, and Review</h3>
                  <p>
                    Chat with your Tasker, pay for the task, and leave a review
                    all in one place.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div><div id={styles.help}>
          <h2>Get Help Today</h2>
        </div><div className={styles.serve}>
          <Link to="/Tasks"><button style={{ "--clr": "#522522" }}>
            Clebuttonning
          </button></Link>
          <Link to="/Tasks"><button style={{ "--clr": "#522522" }}>
            Plumbing Help
          </button></Link>
          <Link to="/Tasks"><button style={{ "--clr": "#522522" }}>
            Gbuttonrdening Services
          </button></Link>
          <Link to="/Tasks"><button style={{ "--clr": "#522522" }}>
            Woodworking services
          </button></Link>
          <Link to="/electricbuttonl"><button style={{ "--clr": "#522522" }}>
            Electricbuttonl repbuttonirs
          </button></Link>
          <Link to="/Tasks"><button style={{ "--clr": "#522522" }}>
            Mobile cbuttonr wbuttonsh buttonnd detailing services
          </button></Link>
          <Link to="/Tasks"><button style={{ "--clr": "#522522" }}>
            Pest removbuttonl buttonnd prevention services
          </button></Link>
          <Link to="/Tasks"><button style={{ "--clr": "#522522" }}>
            Event plbuttonnning
          </button></Link>
          <Link to="/Tasks"><button style={{ "--clr": "#522522" }}>
            Cooking
          </button></Link>
          <Link to="/Tasks"><button style={{ "--clr": "#522522" }}>
            Cbuttonr repbuttonirs
          </button></Link>
          <Link to="/Tasks"><button style={{ "--clr": "#522522" }}>
            House Painting
          </button></Link>
        </div><div className={styles.about}>
          <div className={styles.aboutus}>• About Us •</div>
          <div className={styles.sect}>
            <section className={styles.aboutusc}>
              <div className={styles.aboutuscontent}>
                <h6>Welcome to ServiceHub</h6>
                <p>
                  Founded in 2024 by a group of four friends, known as The
                  Quartet, ServiceHub is a revolutionary home services company
                  that aims to make your life easier, one task at a time. Our
                  mission is to provide top-notch, hassle-free solutions for all
                  your daily home maintenance needs, so you can focus on what
                  matters most - your family, your work, and your well-being.
                </p>
              </div>
            </section>
            <section className={styles.aboutussec}>
              <h6>servicehubg8@gmail.com
              </h6>
              
              
              <h6>9034607228</h6>
            </section>
          </div>

          <div className={styles.text}>
            ~ Crafted with passion by{" "}
            <div className={styles.quar}>' The Quartet '</div>
          </div>

          <div id={styles.progress}>
            <span id={styles.progressvalue}>&#x1F815;</span>
          </div>

          <div id={styles.connect}>
          <Link to="/Connect"><a style={{ color: "#522522", textDecoration: "none" }}>
              <span id="connect-value"> &#63; </span>
            </a></Link>
          </div>
        </div>
      </div>
    );
}

export default home;
