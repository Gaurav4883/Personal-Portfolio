import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../assets/img/logo.png"
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";


function Footer() {
    return (
        <footer className='footer' >
            <Container>
                <Row className='align-item-center' >
                    <Col sm={6} >
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end " >
                        <div className="social-icon">
                            <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/gaurav-deol-9648aa212/"><img src={navIcon1} alt="" /></a>
                            <a target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/gaurav.dewal.56/"><img src={navIcon2} alt="" /></a>
                            <a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/__mr.gaurav/"><img src={navIcon3} alt="" /></a>
                        </div>
                        <p>Copy Right 2023. All rights reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer