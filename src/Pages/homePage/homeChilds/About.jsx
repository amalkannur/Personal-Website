import React from 'react'
import "../Home.scss" 
import profileImg2 from "../../../assets/images/profileImage-Amal3.jpg"
import { FaCloudDownloadAlt } from "react-icons/fa";

function About() {
  return (
    <div className='About'>
        <div className="container"> 
            
            <div className="row"> 
                <div className="col-md-6 d-flex justify-content-center"> 
                    <img className='profileImg2' src={profileImg2} alt="" />
                </div>
                <div className="col-md-6"> 
                <h1 > About </h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p className='mb-4'>
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining esse
                       <a className='text-decoration-underline'> See More </a>
                    </p>
                    <a className='btn-1' href=""> Download CV   <span className='ms-1'> <FaCloudDownloadAlt /> </span>  </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About