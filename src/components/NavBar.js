import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useEffect, useState } from 'react'
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
} from "react-router-dom";

function NavBar() {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false)

    useEffect((onScroll) => {
        if (window.scrollY > 50) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }


    return (
        <Router>

            <Navbar expand="lg" className={scrolled ? "scrolled" : ""} >
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="Logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href='#home' className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}  >Home</Nav.Link>
                            <Nav.Link href='#skills' className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} >Skills</Nav.Link>
                            <Nav.Link href='#projects' className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/gaurav-deol-9648aa212/"><img src={navIcon1} alt="" /></a>
                                <a target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/gaurav.dewal.56/"><img src={navIcon2} alt="" /></a>
                                <a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/__mr.gaurav/"><img src={navIcon3} alt="" /></a>
                            </div>
                            <HashLink to='#connect'>
                                <button className="vvd"><span>Get Connected</span></button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </Router>
    );
}

export default NavBar