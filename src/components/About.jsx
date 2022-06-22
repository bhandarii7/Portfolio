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
            but my area of expertise are <span className="accent" >Front-end development, React.JS &
            JavaScript!</span> 
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

            When I am not coding, I like to spend my time playing guitar or
            brainstorming ideas with friends.
            </p>
          </li>
          <li></li>
        </ul>
      </section>
      </Fade>
    </div>
  );
}

export default About;
