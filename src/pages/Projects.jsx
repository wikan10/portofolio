import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import lift from "../assets/projects/lift.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="JB Store"
              description="JB Store is a mobile e-commerce application developed with Flutter. Its main features include login via Google, Facebook, or email, product search, product categories, discount promotions, and featured products. Users can fill in personal information, view product details, select payment methods, and complete transactions. The app provides an easy and convenient online shopping experience with API integration for communication with backend servers and payment services."
              ghLink="https://github.com/gentaananda48/jb_store"
              demoLink="https://drive.google.com/file/d/1j7x6hoy4TN3DTiWwKFNavIM3-4Hz3wow/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              isBlog={false}
              title="Hi Kids"
              description="HiKids is a mobile application developed with Android Studio using Java. This app is designed for children to learn and memorize Juz Amma, daily prayers, and stories of the Prophets and Messengers. Its main features include a list of Juz Amma surahs, a collection of daily prayers, and engaging stories of the Prophets. Additionally, the app offers daily quizzes to test children's knowledge and memorization, making the learning process more interactive and enjoyable."
              ghLink="https://github.com/wikan10/HiKids"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              isBlog={false}
              title="A Subagja Website"
              description="A Subagja is an online store website that sells various types of furniture. The website has two main types of pages: a user page for ordering products and an admin page for managing website data. As part of a university course project, this website includes 360-degree images and several products that can be viewed in 3D. These 3D products allow users to change their textures, and this feature is developed using Three.js."
              ghLink="https://github.com/wikan10/webasubagja/"
              demoLink="https://drive.google.com/file/d/1p2jd2i4Ocbk7vGXd_KzNZs9S6bzVlxn9/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project4}
              isBlog={false}
              title="Blog Website"
              description="Central Kos is an innovative platform offering boarding house solutions with guaranteed quality and the lowest prices. With over 100 partners, Central Kos is ready to help you find the best boarding room that suits your needs. Explore a wide range of boarding house and shop options to conveniently meet your daily needs."
              ghLink="https://github.com/19sajib/mern-blog-app"
              demoLink="https://centralkos.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Project Krypto"
              description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
              ghLink="https://github.com/19sajib/Project-Krypto-Web-3.0"
              demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Solidity Kickstart"
              description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
              ghLink="https://github.com/19sajib/Solidity-Kickstart"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
