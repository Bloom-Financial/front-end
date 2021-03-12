/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import Sarah from './sarah.jpg';
import Ryan from './ryan.jpg';
import Linkedin from './linkedinlogo.png';
import Twitter from './twitterlogo.png';
import GitHub from './githubicon.png';
import Ethan from './Ethan.jpg';
import Ray from './Ray.jpg';
import styles from './BioPage.css';

export default function BioPage() {
  return (
    <>
      <Link to="/home">
        <h1 className={styles.link}>Portfolio</h1>
      </Link>
      <div className={styles.BioContainer}>
        <span className={styles.Person}>
          <h2>Sarah Skillen</h2>
          <img src={Sarah} height="170px"></img>
          <p>
            A software engineer who enjoys solving problems by testing the functions and feels that investing your money should be available to everyone!
          </p>
          <div className={styles.links}>
            <a 
              className={styles.linkedin}
              href="https://www.linkedin.com/in/sarah-skillen-7339b61b8/">
              <img
                className="linkedinlogo"
                alt="linkedinlogo"
                src={Linkedin}
                height="25px"
                width="25px"
              />
            </a>
            <a className={styles.twitter} 
              href="https://twitter.com/@SarahSkillen3">
              <img
                className="twitterlogo"
                alt="twitterlogo"
                src={Twitter}
                height="25px"
                width="25px"
              />
            </a>
            <a className={styles.github}
              href="https://github.com/sarah-svg">
              <img
                className="githublogo"
                alt="githublogo"
                src={GitHub}
                height="27px"
                width="27px"
              />
            </a>
          </div>
        </span>
        <span className={styles.Person}>
          <h2>Ryan Carreras</h2>
          <img src={Ryan} height="170px"></img>
          <p>
            A software engineer who loves finding simple solutions to complex problems, working with a team towards a shared goal, and Stonks. Always love those stonks!
          </p>
          <div className={styles.links}>
            <a className={styles.linkedin}
              href="https://www.linkedin.com/in/ryancarreras/">
              <img 
                className="linkedinlogo"
                alt="linkedinlogo" 
                src={Linkedin} 
                height="25px" 
                width="25px" />
            </a>
            <a className={styles.twitter}
              href="https://twitter.com/@ryanleviathan">
              <img 
                className="twitterlogo" alt="twitterlogo"
                src={Twitter} 
                height="25px" 
                width="25px" />
            </a>
            <a className={styles.github}
              href="https://github.com/ryanleviathan">
              <img className="githublogo" alt="githublogo" 
                src={GitHub} height="27px" width="27px" />
            </a>
          </div>
        </span>
        <span className={styles.Person}>
          <h2>Ethan Pierce</h2>
          <img src={Ethan} height="170px"></img>
          <p>
            A full stack Javascript engineer who loves to create, fix bugs and discuss new and interesting ideas.
          </p>
          <div className={styles.links}>
            <a className={styles.linkedin} 
              href="https://www.linkedin.com/in/ethanpiercepresents/">
              <img
                className="linkedinlogo"
                alt="linkedinlogo"
                src={Linkedin}
                height="25px"
                width="25px"
              />
            </a>
            <a className={styles.twitter}
              href="https://twitter.com/EthanPierce82">
              <img
                className="twitterlogo"
                alt="twitterlogo"
                src={Twitter}
                height="25px"
                width="25px"
              />
            </a>
            <a className={styles.github}
              href="https://github.com/jumpybuns">
              <img
                className="githublogo"
                alt="githublogo"
                src={GitHub}
                height="27px"
                width="27px"
              />
            </a>
          </div>
        </span>
        <span className={styles.Person}>
          <h2>Ray Sakultarawattn</h2>
          <img src={Ray} height="170px"></img>
          <p>
            A full-stack software developer who loves to write efficient code, and turn it into awesome things that help humans!
          </p>
          <div className={styles.links}>
            <a className={styles.linkedin} 
              href="https://www.linkedin.com/in/raysakultarawattn/">
              <img 
                className="linkedinlogo"
                alt="linkedinlogo" 
                src={Linkedin} 
                height="25px" 
                width="25px" />
            </a>
            <a className={styles.twitter}
              href="https://twitter.com/@rsakultarawattn">
              <img 
                className="twitterlogo" alt="twitterlogo"
                src={Twitter} 
                height="25px" 
                width="25px" />
            </a>
            <a className={styles.github}
              href="https://github.com/rsakultarawattn">
              <img 
                className="githublogo" alt="githublogo" 
                src={GitHub} 
                height="27px" 
                width="27px" />
            </a>
          </div>
        </span>
      </div>
    </>
  );
}
