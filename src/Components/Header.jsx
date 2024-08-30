import React from 'react'
import "./Header.scss"
// import logoHeader from '../assets/images/logo-header.png'
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {



  return (
    <div className='header'>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">

          <div className='w-50'>
            <a className="navbar-brand" href="#">
              {/* <img className='header-logo' src={logoHeader} alt="" /> */} LOGO
            </a>
          </div>

          <div className='w-50 text-end'>
            <a
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
                <span className="border-0">  <RxHamburgerMenu /> </span>
            </a>
          </div>

          <div className="collapse navbar-collapse parent-pages" id="navbarSupportedContent">

            <div className='pages'>
              <div className='pages-child' >
                <a  aria-current="page">
                  Home
                </a>
              </div>
              <div className='pages-child' >
                <a  >
                  Education
                </a>
              </div>
              <div className='pages-child' >
                <a  >
                  Resume
                </a>
              </div>
            
              <div className='pages-child' >
                <a href='#LetsTalk' >Contact</a>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </div>

  )
}

export default Header
