import React from "react";
import "../styles/projects.css";
import Project from "../components/Project";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Fade";

function projects() {
  return (
    <div className="Projects">
      <Zoom duration={4000} >
      <p>
        <ul>
          <li>
            i've worked on web and lately exploring cross-platform development.
          </li>
          <br />
          <li>
            Here are my most frequently used technologies <br /> <br /> &#123;
            <i className="badge">JavaScript</i> ,<i className="badge">C++</i> ,
            <i className="badge">HTML</i> ,<i className="badge">SQL</i> ,
            <i className="badge">Firebase</i> ,<i className="badge">React</i> ,
            <i className="badge">NodeJs</i> ,<i className="badge">MaterialUI</i>
            &#125;
          </li>
          <br />
        </ul>
      </p>
      </Zoom>

      <aside>
        <h2>Projects</h2>
        <br />
        <div className="project-list">
          <Fade bottom>
            <a target='_blank' href="https://github.com/bhandarii7/epistle-client">
              <Project
                heading={"EPISTLE"}
                desc={
                  "Epistle is a note taking app built using MERN stack. User can perform CRUD operations and provide secure user authentication using JWT."
                }
                date={'28 Feb 2022'}
                lang={['MERN','MaterialUI']}
              />
            </a>
          </Fade>

          <Fade delay={500} bottom>
            <a target='_blank' href="https://github.com/bhandarii7/spotify-clone">
              <Project
                heading={"UNIFIED-ID"}
                desc={
                  "Unified-id is a blockchain platform where E-KYC is done once and stored on a blockchain, and all member banks can use this data for KYC."
                }
                date={'3 Feb 2022'}
                lang={['IPFS','Blockchain','Moralis']}
              />
            </a>
          </Fade>

          <Fade delay={1000} bottom>
            <a target='_blank'  href="https://github.com/bhandarii7/Weather-app">
              <Project
                heading={"Weather App"}
                desc={
                  "weather web app made using html, CSS , JavaScript  with beautiful UI showing hourly and weekly weather information."
                }
                date={'21 June 2021'}
                lang={['HTML','CSS','JavaScript']}
              />
            </a>
          </Fade>


        </div>
      </aside>
    </div>
  );
}

export default projects;
