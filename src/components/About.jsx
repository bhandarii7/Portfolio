import React from "react";
import "../styles/about.css";
import Fade from "react-reveal/Fade";
function About() {
  return (
    <div className="About">
      <Fade>
      <section>
        <h1>Hey there, I'm Yash 👋</h1>
        <br />
        <ul>
          <li>
            <p>
            I am a undergraduate student working on some cool
            projects.
            </p>
          </li>
          <br />
          <li>
            <p>

            I've worked with wide variety of programming languages & frameworks
            although <br /> my area of expertise is Full-stack development & JavaScript!
            </p>
          </li>
          <br />
          <li>
            <p>

            Currently, I am trying my hands on React Native.
            </p>
          </li>
          <br />
          <li>
            <p>

            Came Top 5 out of 90 teams at BITBOX'21 Hackathon conducted by
            DSC-JIIT128.
            </p>
          </li>
          <br />
          <li>
            <p>
            Shortlisted for IBM Reimagine Hackathon out of 900 teams
            </p>
          </li>
          <br />
          <li>
            <p>

            Volunteered at IEEE student branch and conducted workshop of web development and mentored my juniors
            </p>
          </li>
          <br />
          <li>
            <p>

            Qualified Publicis Sapient Jumpstart'22.
            </p>
          </li>
          <br />
        </ul>
      </section>
      </Fade>
    </div>
  );
}

export default About;
