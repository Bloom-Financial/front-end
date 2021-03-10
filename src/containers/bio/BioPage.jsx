import React from 'react';
import Sarah from '../../../src/sarah.jpg';
import Linkedin from './linkedinlogo.png';
import Twitter from './twitterlogo.png';
import GitHub from './githubicon.png';
import Ethan from './Ethan.jpg';

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
      <h1></h1>
      <p></p>
      <img></img>
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
    </>
  );
}
