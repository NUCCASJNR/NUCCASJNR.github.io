import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import JavaScript from "../assets/img/skills/JavaScript.svg";
import Nodejs from "../assets/img/skills/Nodejs.svg";
import Mongodb from "../assets/img/skills/Mongodb.svg";
import Reactjs from "../assets/img/skills/Reactjs.svg";
import DigitalOcean from "../assets/img/skills/digitalocean.svg";
import Python from "../assets/img/skills/python.svg";
import Apache from "../assets/img/skills/apache.svg";
import Android from "../assets/img/skills/android.svg";
import AndroidStudio from "../assets/img/skills/androidstudio.svg";
import Bash from "../assets/img/skills/bash.svg";
import Debian from "../assets/img/skills/debian.svg";
import FastApi from "../assets/img/skills/fastapi.svg";
import Fedora from "../assets/img/skills/fedora.svg";
import Flask from "../assets/img/skills/flask.svg";
import Flutter from "../assets/img/skills/flutter.svg";
import Github from "../assets/img/skills/github.svg";
import Html5 from "../assets/img/skills/html5.svg";
import Linux from "../assets/img/skills/linux.svg";
import Mysql from "../assets/img/skills/mysql.svg";
import Nginx from "../assets/img/skills/nginx.svg";
import Vue from "../assets/img/skills/vuejs.svg";
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
    { logo: FastApi, name: "FastAPI" },
    { logo: Fedora, name: "Fedora" },
    { logo: Flask, name: "Flask" },
    { logo: Flutter, name: "Flutter" },
    { logo: Github, name: "GitHub" },
    { logo: JavaScript, name: "JavaScript" },
    { logo: Nodejs, name: "Node.js" },
    { logo: Mongodb, name: "MongoDB" },
    { logo: Reactjs, name: "ReactJS" },
    { logo: DigitalOcean, name: "Digital Ocean" },

    { logo: Apache, name: "Apache" },
    { logo: Android, name: "Android" },
    { logo: AndroidStudio, name: "Android Studio" },

    { logo: Html5, name: "HTML5" },

    { logo: Mysql, name: "MySQL" },
    { logo: Nginx, name: "Nginx" },
    { logo: Vue, name: "Vue.js" },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I apply best practices to software development, design, and
                delivery. <br></br> I'm a polyglot programmer who is able to
                work with diverse technologies.
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
