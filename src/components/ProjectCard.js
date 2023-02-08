import React from 'react'
import { Col } from 'react-bootstrap'

function ProjectCard({ title, description, imgUrl, projUrl }) {

    return (
        <Col sm={6} md={4} >
            <div className="proj-imgbx" onClick={() => window.open(projUrl, "_blank")} >
                <img src={imgUrl} alt="" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description} </span>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard