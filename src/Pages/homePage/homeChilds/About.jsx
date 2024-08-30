import React from 'react'
import "../Home.scss" 
import profileImg2 from "../../../assets/images/profileImage-Amal3.jpg"
import { FaCloudDownloadAlt } from "react-icons/fa";
import Resume from "../../../assets/pdf/AMAL-K_Mern Stack Dev.pdf"

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
                    I’m Amal Ashokh, a UI/UX Designer and MERN Stack Developer passionate about creating user-centered designs and robust web applications.
                    </p>
                    <p className='mb-4'>
                    With a background in both design and development, I bring a unique perspective to every project. My experience in UI/UX design ensures that the user experience is always front and center, while my expertise in MERN stack development allows me to turn those designs into high-performing, scalable web applications 
                    <br /> I'd love to hear from you! Whether you have a project in mind, want to collaborate, or just want to chat about design, feel free to drop me a message.
                    <br /> Combining my expertise in UI/UX design and MERN stack development, I offer a comprehensive service that bridges the gap between design and technology. Whether it's designing a user-friendly interface or developing a full-stack web application, I ensure that every element works together to create a cohesive and seamless experience
                       <a className='text-decoration-underline'> See More </a>
                    </p>
                    <a className='btn-1' target='blank' href={Resume}> Download CV   <span className='ms-1'> <FaCloudDownloadAlt /> </span>  </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About