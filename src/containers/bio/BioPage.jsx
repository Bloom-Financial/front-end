/* eslint-disable max-len */
import React from 'react';
import Sarah from './sarah.jpg';
import Ryan from './ryan.jpg';
import Linkedin from './linkedinlogo.png';
import Twitter from './twitterlogo.png';
import GitHub from './githubicon.png';
import Ethan from './Ethan.jpg';
import Ray from './Ray.jpg';

export default function BioPage() {
  return (
    <>
      <h1></h1>
      <p></p>
      <img></img>
      <span>
        <h1>Sarah Skillen</h1>
        <p>
          A software engineer who enjoys solving problems by testing the
          functions and feels that investing your money should be availble to
          everyone!
        </p>
        <img src={Sarah} height="170px"></img>
        <a href="https://www.linkedin.com/in/sarah-skillen-7339b61b8/">
          <img
            className="linkedinlogo"
            alt="linkedinlogo"
            src={Linkedin}
            height="25px"
            width="25px"
          />
        </a>
        <a href="https://twitter.com/@SarahSkillen3">
          <img
            className="twitterlogo"
            alt="twitterlogo"
            src={Twitter}
            height="25px"
            width="25px"
          />
        </a>
        <a href="https://github.com/sarah-svg">
          <img
            className="githublogo"
            alt="githublogo"
            src={GitHub}
            height="27px"
            width="27px"
          />
        </a>
      </span>

      <span>
        <h1>Ryan Carreras</h1>
        <p>A software engineer who loves finding simple solutions to complex problems, working with a team towards a shared goal, and Stonks. Always love those stonks!
        </p>
        <img src={Ryan} height="170px"></img>
        <a href="https://www.linkedin.com/in/ryancarreras/">
          <img className="linkedinlogo"
            alt="linkedinlogo" src={Linkedin} 
            height="25px" width="25px" />
        </a>
        <a href="https://twitter.com/@ryanleviathan">
          <img className="twitterlogo" alt="twitterlogo"
            src={Twitter} height="25px" width="25px" />
        </a>
        <a href="https://github.com/ryanleviathan">
          <img className="githublogo" alt="githublogo" 
            src={GitHub} height="27px" width="27px" />
        </a>
      </span>

      <span>
        <h1>Ethan Pierce</h1>
        <p>Let us make some money!!</p>
        <img></img>
        <img src={Ethan} height="170px"></img>
        <a href="https://www.linkedin.com/in/ethanpiercepresents/">
          <img
            className="linkedinlogo"
            alt="linkedinlogo"
            src={Linkedin}
            height="25px"
            width="25px"
          />
        </a>
        <a href="https://twitter.com/EthanPierce82">
          <img
            className="twitterlogo"
            alt="twitterlogo"
            src={Twitter}
            height="25px"
            width="25px"
          />
        </a>
        <a href="https://github.com/jumpybuns">
          <img
            className="githublogo"
            alt="githublogo"
            src={GitHub}
            height="27px"
            width="27px"
          />
        </a>
      </span>
      <span>
        <h1>Ray Sakultarawattn</h1>
        <p>A full-stack software developer who loves to get down and dirty with code, and turn it into
          awesome things that help humans!
        </p>
        <img src={Ray} height="170px"></img>
        <a href="https://www.linkedin.com/in/raysakultarawattn/">
          <img className="linkedinlogo"
            alt="linkedinlogo" src={Linkedin} 
            height="25px" width="25px" />
        </a>
        <a href="https://twitter.com/@rsakultarawattn">
          <img className="twitterlogo" alt="twitterlogo"
            src={Twitter} height="25px" width="25px" />
        </a>
        <a href="https://github.com/rsakultarawattn">
          <img className="githublogo" alt="githublogo" 
            src={GitHub} height="27px" width="27px" />
        </a>
      </span>
    </>
  );
}
