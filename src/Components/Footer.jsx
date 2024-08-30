import React from 'react'
import "./Footer.scss"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className='Footer d-flex align-items-center text-center'>
        <div className="container pt-3 pt-sm-0"> 
           <div className="row"> 
             <div className="col-sm-3 mt-3"> Logo</div>
             <div className="col-sm-2 mt-3"> <a href=""> Education</a> </div>
             <div className="col-sm-2 mt-3"> <a href="">My Works</a> </div>
             <div className="col-sm-2 mt-3"> <a href="#LetsTalk">Connect Me</a>  </div>
             <div className="col-sm-3 mt-3">   
                <ul>
                    <li> <a href=""><FaLinkedin /></a>  </li>
                    <li> <a href=""> <FaGithub /></a> </li>
                    <li> <a href=""> <IoMdMail /></a> </li>
                    <li> <a href=""><FaFacebookSquare /></a> </li>
                </ul>
             </div>

           </div>
        </div>
    </div>
  )
}

export default Footer