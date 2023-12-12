import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import projImg5 from '../assets/img/project-img5.png'
import projImg4 from '../assets/img/project-img4.png'
import projImg6 from '../assets/img/project-img6.png'
import projImg7 from '../assets/img/project-img7.png'
import projImg8 from '../assets/img/project-img8.png'
import projImg9 from '../assets/img/project-img9.png'
import projImg10 from '../assets/img/project-img10.png'
import projImg11 from '../assets/img/project-img11.png'
import ProjectCard from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png"
import TrackVisibility from 'react-on-screen';

function Projects() {

    const projects = [
        {
            title: "Voice Life",
            description: 'EJS-Nodejs-SQL',
            imgUrl: 'https://marketplace.voicelife.io/uploads/thumbnail.jpg',
            projUrl: 'https://marketplace.voicelife.io/'
        },
        {
            title: "Job Portal (Hire ME)",
            description: 'EJS-Nodejs-SQL',
            imgUrl: projImg9,
            projUrl: "https://hireme.caandd.com/"
        },
        {
            title: "Dazz Chat",
            description: 'MERN',
            imgUrl: projImg11,
            projUrl: "https://dazzchat.vercel.app/"
        },

        {
            title: "Corrtex Plugin and Browser Extension",
            description: 'HTML CSS JS Office JS',
            imgUrl: projImg10,
            projUrl: "https://appsource.microsoft.com/en-GB/product/office/WA200004547?tab=Overview"
        },
        {
            title: "Snake Game",
            description: "Javascript",
            imgUrl: projImg3,
            projUrl: "https://gdsnake.netlify.app"
        },
        {
            title: "Clock",
            description: "Javascript",
            imgUrl: projImg1,
            projUrl: "https://gdclock.netlify.app/"
        },
        {
            title: "Drum",
            description: "Javascript",
            imgUrl: projImg2,
            projUrl: "https://gddrum.netlify.app/"
        },
        {
            title: "CSS Updater",
            description: "Javascript",
            imgUrl: projImg4,
            projUrl: "https://gcss.netlify.app/",
        },
        {
            title: "DALL-E 2",
            description: 'MERN STACK (currently not working because DALLE API is not free) ',
            imgUrl: projImg5,
            projUrl: "https://gd-dalle-clone.netlify.app/"
        },
        {
            title: "PROPERTY SELLING APP",
            description: 'MERN STACK',
            imgUrl: projImg8,
            projUrl: "https://gdyariga.netlify.app/"
        },

    ];


    const nodeProjects = [
        {
            title: "RealTime Chat App",
            description: "Nodejs",
            imgUrl: projImg6,
            projUrl: ""
        },
        {
            title: "Contact Manager App",
            description: "Nodejs",
            imgUrl: projImg7,
            projUrl: ""
        },
    ]


    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__slideInUp " : ""}>
                                    <h2>Projects</h2>
                                    <p> These are my projects ! You can check it out </p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id='projects-tab' defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">MERN</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">REACT</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">NODE</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" >
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second" >Coming Soon </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            nodeProjects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>

                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} alt="" className="background-image-right" />
        </section>
    )


}

export default Projects