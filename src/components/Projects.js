import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import humandect from "../assets/img/projects/humandect.png";
import ChatGptC from "../assets/img/projects/chagptclone.png";
import Dammark from "../assets/img/projects/Dammark.png";
import Logistics from "../assets/img/projects/Logistics.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen"
import "animate.css";

export const Projects = () => {
  const workProjects = [
    {
      title: "Dammark Global Resources",
      tagLine: "a consultancy firm in Ibadan, Nigeria that specializes in business and HR consulting, financial advisory, project management",
      imgUrl: Dammark,
      githubUrl: "https://dammarkglobalresources.com.ng/",
      deployedUrl: "https://dammarkglobalresources.com.ng/",
    },
    {
      title: "Logistics Website",
      tagLine:
        "Logistics Website.",
      imgUrl: Logistics,
      githubUrl: "https://logistics.dammarkglobalresources.com.ng",
      deployedUrl: "https://logistics.dammarkglobalresources.com.ng",
    },
  ];

  const sideProjects = [
    {
      title: "ChatGptClone",
      tagLine: "ChatGptClone is a clone of OpenAI's ChatGPT virtual assistant, built using Python and the openai api",
      imgUrl: ChatGptC,
      githubUrl: "https://github.com/CyberRide/ChatGptClone",
      deployedUrl: "https://github.com/CyberRide/ChatGptClone",
    },
    {
      title: "Human-Detection-Web-App",
      tagLine:
        "A Flask-based web app for detecting humans in images using OpenCV and NumPy, with a user-friendly interface built using HTML, Bootstrap, and JavaScript.",
      imgUrl: humandect,
      githubUrl: "https://github.com/CyberRide/Human-Detection-Web-App",
      deployedUrl: "https://github.com/CyberRide/Human-Detection-Web-App",
    },
  ];

  const miscProjects = [
    {
      title: "ChatGptClone",
      tagLine: "ChatGptClone is a clone of OpenAI's ChatGPT virtual assistant, built using Python and the openai api",
      imgUrl: ChatGptC,
      githubUrl: "https://github.com/CyberRide/ChatGptClone",
      deployedUrl: "https://github.com/CyberRide/ChatGptClone",
    },
    {
      title: "Human-Detection-Web-App",
      tagLine:
        "A Flask-based web app for detecting humans in images using OpenCV and NumPy, with a user-friendly interface built using HTML, Bootstrap, and JavaScript.",
      imgUrl: humandect,
      githubUrl: "https://github.com/CyberRide/Human-Detection-Web-App",
      deployedUrl: "https://github.com/CyberRide/Human-Detection-Web-App",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                  My side projects and freelance work
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Work</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Side Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Misc</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {workProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                        <a
                          href="https://github.com/CyberRide"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button>
                            <span>View More</span>
                          </button>
                        </a>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {sideProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                        <a
                          href="https://github.com/CyberRide"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button>
                            <span>View More</span>
                          </button>
                        </a>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {miscProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                        <button>
                          <span>View More</span>
                        </button>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2} alt="..."></img>
    </section>
  );
};
