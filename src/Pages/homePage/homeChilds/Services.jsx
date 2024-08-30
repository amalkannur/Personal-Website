import React from 'react'
import "../Home.scss"




function Services() {
    return (
        <div className='Services'>
            <div className="container">
                <div className="my-container"> 
                <h1 className=''> Services </h1>
                 <div className="row"> 
                    <div className="col-md-3"> 
                        <div className="card"> 
                            <h3> Custom Website Design </h3>
                            <ul>
                                <li>User-centered design</li>
                                <li>Responsive design</li>
                                <li>Cross-browser compatibility</li>
                            </ul>
                            <p> 
                            Tailored website design that aligns with a client's brand, target audience, and business goals. 
                            </p>
                            <a className=' text-center p-2' href="#LetsTalk">Contact Now</a>
                        </div>
                    </div>

                    <div className="col-md-3"> 
                        <div className="card"> 
                            <h3> Web Development </h3>
                            <ul>
                                <li>Responsive web designing </li>
                                <li>Performance optimization</li>
                                <li>Integration with back-end </li>
                            </ul>
                            <p> 
                            Development of the visual aspects of a website, including the layout, UI elements, animations, and interactivity 
                            </p>
                            <a className=' text-center p-2' href="#LetsTalk">Contact Now</a>
                        </div>
                    </div>



                    <div className="col-md-3"> 
                        <div className="card"> 
                            <h3> UI/UX Design </h3>
                            <ul>
                                <li>User research and personas</li>
                                <li>Wireframing and prototyping</li>
                                <li>Usability testing</li>
                            </ul>
                            <p> 
                            This service focuses on optimizing the usability, accessibility, and overall experience for users 
                            </p>
                            <a className=' text-center p-2' href="#LetsTalk">Contact Now</a>
                        </div>
                    </div>

                    <div className="col-md-3"> 
                        <div className="card"> 
                            <h3> Branding and Graphic Design </h3>
                            <ul>
                                <li>Logo and brand identity design</li>
                                <li>Marketing materials </li>
                                <li>Visual content creation </li>
                            </ul>
                            <p> 
                            This service ensures that all design elements are consistent across all platforms 
                            </p>
                            <a className=' text-center p-2' href="#LetsTalk">Contact Now</a>
                        </div>
                    </div>

                 </div>
                </div>
               
            </div>
        </div>
    )
}

export default Services