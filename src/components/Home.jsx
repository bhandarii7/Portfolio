import React from "react";
import "../styles/home.css";
import Fade from "react-reveal/Fade";
import myImg from "../assets/myimg.jpg";

function Home() {
  return (
    <div className="Home">
      <Fade duration={1500} left>
        <p className="basic-info">
          <h1 className="title">
            Hey! I am Yash, <br />I'm a <span>Web Developer!</span> 
          </h1>
          <br />
          <ul className="detailed-info">
            <li>
              I'm a second year Infromation Technology student pursuing my btech 
              <br />from Jaypee Institute Of Information Technology, Noida.
            </li>
            <br />
            <li>
              I enjoy building awesome softwares that solve practical problems,
              <br /> that why I often participant in Hackathons.
            </li>
            <br />
            <li>
              When I am not coding, I like to spend my time playing guitar or
              <br />
              brainstorming with friends.
            </li>
            <br />
            <li>
              <a target='_blank' href="https://github.com/bhandarii7">
                <i class="fab fa-github fa-2x "> </i>
              </a>
              
              <a target='_blank' href="https://www.linkedin.com/in/yash-bhandari-84bb661b0/">
                <i class="fab fa-linkedin fa-2x "></i>
              </a>
              <a target='_blank'  href="mailto:yashbhandari5018@gmail.com">
              <i class="far fa-envelope fa-2x "></i>
              </a>
              <a target='_blank' href="https://twitter.com/Bhandarii7">
              <i class="fab fa-twitter fa-2x "></i>
              </a>
            </li>
          </ul>
        </p>
      </Fade>
      <Fade duration={1500} top>
        <img src={myImg} alt="" />
      </Fade>
    </div>
  );
}

export default Home;
