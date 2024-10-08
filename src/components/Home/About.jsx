import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/fotodiri.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, my name is{" "}
              <span className="yellow">Wikan Gandang Palgunadi </span>
              and I'm from <span className="yellow">Bandung, Indonesia.</span>
              <br />
              <br />
              I am currently a sixth-semester student at Universitas Pendidikan
              Indonesia, majoring in Computer Engineering.
              <br />
              <br />
              As a <b className="yellow">Front-End Web Developer</b> and{" "}
              <b className="yellow">Mobile Developer</b>, I enjoy tackling new
              challenges and continuously expanding my skillset.
              <br />
              <br />I am proficient in
              <b className="yellow"> JavaScript, </b>
              as well as have knowledge in programming languages such as C++,
              Dart, SQL, and PHP.
              <br />
              <br />I have a passion for working with{" "}
              <b className="yellow">React.js, Flutter,</b> and
              <i>
                <b className="yellow">
                  {" "}
                  modern Javascript libraries and frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="yellow"> React.js and Flutter</b>
              </i>
              <br />
              <br />I am also interested in building new
              <i>
                <b className="yellow">
                  {" "}
                  Web Technologies and Mobile Applications,{" "}
                </b>
                as well as exploring areas related to
                <b className="yellow">
                  {" "}
                  Artificial Intelligence and TensorFlow Lite.
                </b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{" "}
              <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/wikan10/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/wikangandangpalgunadi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/wikan_gp/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
