import React from 'react'
import "../Home.scss"
import Accordion from 'react-bootstrap/Accordion';


function Skills() {



    
  return (
    <div className='Skills'>
        <div className="container"> 
            <Accordion className='my-container' >
            <h1 className=''> SKILLS </h1>

                <Accordion.Item eventKey="0">
                    <Accordion.Header > <span>  </span>  UI/UX Design</Accordion.Header>
                    <Accordion.Body>
                    <h5> Figma </h5>
                    <h5> Adobe Photoshop </h5> 
                    <h5> Canva </h5>
                    <h5> Wire Framing  </h5>
                    <h5> SVG animations </h5>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>UI Development</Accordion.Header>
                    <Accordion.Body>
                     <h5> HTML5 </h5>
                     <h5> CSS3 </h5>
                     <h5> Sass </h5>
                     <h5> JavaScript </h5>
                     <h5> Bootstrap </h5>
                     <h5> Tailwind </h5>
                     <h5> JQuery </h5>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header> Front End Coding</Accordion.Header>
                    <Accordion.Body>
                     <h5> JavaScript </h5>
                     <h5> React.JS </h5>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>Back-End Coding</Accordion.Header>
                    <Accordion.Body>
                     <h5> Node.js </h5>
                     <h5> Express.js </h5>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header>Data Base</Accordion.Header>
                    <Accordion.Body>
                     <h5> MongoDB </h5>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header> Version Control </Accordion.Header>
                    <Accordion.Body>
                     <h5> Git  </h5>
                     <h5> GitHub </h5>
                     <h5> GitLab </h5>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default Skills