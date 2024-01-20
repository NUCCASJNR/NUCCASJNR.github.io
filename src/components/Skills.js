import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import JavaScript from "../assets/img/skills/JavaScript.svg";
import Nodejs from "../assets/img/skills/Nodejs.svg";
import Mongodb from "../assets/img/skills/Mongodb.svg";
import Python from "../assets/img/skills/python.svg";
import Bash from "../assets/img/skills/bash.svg";
import Debian from "../assets/img/skills/debian.svg";
import Flask from "../assets/img/skills/flask.svg";
import Github from "../assets/img/skills/github.svg";
import Html5 from "../assets/img/skills/html5.svg";
import Linux from "../assets/img/skills/linux.svg";
import Mysql from "../assets/img/skills/mysql.svg";
import Nginx from "../assets/img/skills/nginx.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    { logo: Python, name: "Python" },
    { logo: Linux, name: "Linux" },
    { logo: Bash, name: "Bash" },
    { logo: Debian, name: "Debian" },
    { logo: Flask, name: "Flask" },
    { logo: Github, name: "GitHub" },
    { logo: JavaScript, name: "JavaScript" },
    { logo: Nodejs, name: "Node.js" },
    { logo: Mongodb, name: "MongoDB" },


    { logo: Html5, name: "HTML5" },

    { logo: Mysql, name: "MySQL" },
    { logo: Nginx, name: "Nginx" }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
            <h2>Skills</h2>
            <p>
              As a seasoned Python Backend Engineer, I bring a wealth of expertise in software development, design, and delivery. My approach is rooted in applying industry best practices to ensure robust, scalable, and efficient solutions.
              <br /><br />
              Specializing in Python, I am adept at crafting high-performance backend systems using frameworks such as Django and Flask. My proficiency extends to building RESTful APIs, implementing authentication and authorization mechanisms, and optimizing database interactions.
              <br /><br />
              Embracing a polyglot programming philosophy, I excel in navigating a diverse technological landscape. Beyond Python, I am versed in utilizing various tools and languages to address unique challenges and deliver innovative solutions.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={skill.logo} alt="..." />
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt=".." />
    </section>
  );
};
