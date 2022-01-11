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
            <i className="badge">HTML</i> ,<i className="badge">Sass</i> ,
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
            <a target='_blank'  href="https://github.com/bhandarii7/Weather-app">
              <Project
                heading={"Weather App"}
                desc={
                  "weather web app made using html, CSS , JavaScript  with beautiful UI showing hourly and weekly weather information."
                }
                date={'5 Mar'}
                lang={['HTML','CSS','javascript']}
              />
            </a>
          </Fade>

          <Fade delay={500} bottom>
            <a target='_blank' href="#">
              <Project
                heading={"Portfolio website"}
                desc={
                  "Designed by portfolio website using React and implemented routing also used reveal Library to add cool animations."
                }
                date={'5 Mar'}
                lang={['HTML','CSS','javascript','React','React Reveal']}
              />
            </a>
          </Fade>

          <Fade delay={1000} bottom>
            <a target='_blank' href="https://github.com/bhandarii7/spotify-clone">
              <Project
                heading={"Spotify Clone"}
                desc={
                  "Used Spotify APIS to Authenticate and fetch users data, designed the whole UI."
                }
                date={'5 Mar'}
                lang={['HTML','CSS','javascript','MaterialUI']}
              />
            </a>
          </Fade>
          <Fade delay={1500} bottom>
            <a target='_blank' href="https://github.com/bhandarii7/recipe-app">
              <Project
                heading={"Recipe App"}
                desc={
                  "A site that provides wide variety of recipes with a click on a button. takes multiple ingredients as arguments and provides the best recipe according to your need."  
                }
                date={'5 Mar'}
                lang={['HTML','CSS','javascript','React','Bootstrap']}
              />
            </a>
          </Fade>
        </div>
      </aside>
    </div>
  );
}

export default projects;
