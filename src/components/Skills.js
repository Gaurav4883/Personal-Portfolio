import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import coolorSharp from "../assets/img/color-sharp.png"

function Skills() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>..........</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item"><img src={meter1} alt="" />
                                    <h5>React JS</h5>
                                </div>
                                <div className="item"><img src={meter2} alt="" />
                                    <h5>NodeJS</h5>
                                </div>
                                <div className="item"><img src={meter3} alt="" />
                                    <h5>Express</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={coolorSharp} alt="" className="background-image-left" />
        </section>
    )

}

export default Skills