import { useState, useEffect } from 'react'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)

    const toRotate = ["MERN Developer", "React Developer", "Web Designer"]

    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)
        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }

    }

    return (
        <section className="banner" id="home" >
            <Container>
                <Row className="align-items-center" >
                    <Col xs={12} md={6} xl={7}  >
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn " : ""}>
                                    <span className="tagline">My portfolio welcomes you</span>
                                    <h1>{`I am Gaurav Deol !`} <span className='wrap'>{text}</span></h1>
                                    <p>I have learnt MERN development from mindrisers for 3 months. Presently, seeking for an internship ! Completed bachelors in Bsc.(Hons) in Computer Science & Software Engineering </p>
                                    <button onClick={() => console.log("connect")} >Let's connect <ArrowRightCircle size={25} /> </button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                        <img src={headerImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>

        </section>
    )

}

export default Banner