import React from 'react'
import "./Home.scss"
import Hero from './homeChilds/Hero'
import About from './homeChilds/About'
import Skills from './homeChilds/Skills'
import Services from './homeChilds/Services'
import LetsTalk from './homeChilds/LetsTalk'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'

function Home() {
  return (
    <div>
        <Header />
        <Hero />
        <div className="App1"> 
        <About />
        <Skills />
        <Services />
        <LetsTalk />
        </div>
        <Footer />

        
    </div>
  )
}

export default Home