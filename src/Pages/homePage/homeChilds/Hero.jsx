import React from 'react'
import "../Home.scss" 
import profileImage from "../../../assets/images/profileImage-Amal.jpg"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";


function Hero() {
  return (
    <div className='Hero'>
         <div className="container"> 
          <div className="row"> 
               <div className="col-2 col-lg-1 first-col"> 
                    <ul>
                        <li> <FaLinkedin />  </li>
                        <li> <FaGithub /> </li>
                        <li> <IoMdMail /> </li>
                        <li> <FaFacebookSquare /> </li>
                    </ul>
                </div>
                <div className="col-10 col-lg-6 second-col"> 
                     <div> 
                        <h1> UI/UX Designer & MERN Stack Developer </h1>
                        <p> Bridging Design & Development for Seamless User Experiences </p>
                        <a href="#LetsTalk"> Lets Talk </a>
                     </div>
                </div>
                <div className="col-lg-5 third-col"> 
                    <div className='outer-circle'> 
                    <ul>
                        <li> <FaLinkedin />  </li>
                        <li> <FaGithub /> </li>
                        <li> <IoMdMail /> </li>
                        <li> <FaFacebookSquare /> </li>
                    </ul>
                    </div>
                    <div className="inner-circle"> 
                      <img className='w-100' src={profileImage} alt="" />    
                    </div>
                </div>
          </div>
         </div>
    </div>
  )
}

export default Hero