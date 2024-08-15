import React from 'react'
import Topbar from '../components/Topbar'
import './landing.css'
import About from './About'
import Services from './Services'
import Gallery from './Gallery'
import GetInTouch from './GetInTouch'
import Footer from './Footer'
function Landing() {
  return <>
  <Topbar/>
  <About/>
  <Services/>
  <Gallery/>
  <GetInTouch/>
  <Footer/>
  </>
}

export default Landing