import React from 'react'
import '../styles/Services.css'
import HeartEmoji from '../assets/heartemoji.png'
import Glasses from '../assets/glasses.png'
import Humble from '../assets/humble.png'
import Card from './Card'
import Resume from '../assets/resume.pdf'
import { themeContext } from '../Context'
import { useContext } from 'react'
import { motion } from "framer-motion"

const Services = () => {
  const transition = {
    duration: 1,
    type: "spring",
  };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='services' id="Services">
        {/* Left Side */}
      <div className="awesome">
        <span style={{color:darkMode?'white':''}}>My Awesome</span>
        <span>services</span>
        <span>lorem ispum is simply dummy text of printing of printing lorem
        <br/>
        ispum is simply dummy text of printing
        </span>
        <a href="Resume" download>
            <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
        {/* Left Side */}
      <div className="cards">
            {/* First Card */}
            <motion.div
              initial={{ left: "25rem" }}
              whileInView={{ left: "14rem" }}
              transition={transition}
              style={{left:'14rem'}}>
                <Card
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {'Figma, Sketch, Photoshop, Adobe XD, PSD, Adobe'}
                />
            </motion.div>
            {/* Second Card */}
            <motion.div 
              initial={{left:"-11rem", top:"12rem"}}
              whileInView={{left:'-4rem'}}
              transition={transition} 
              style={{top:'12rem',left:'-4rem'}}>
                <Card
                    emoji = {Glasses}
                    heading = {'Developer'}
                    detail = {'HTML, CSS, JS, REACT JS, REACT NATIVE, NEXT JS, EXPRESS JS'}
                />
            </motion.div>
            {/* Third Card */}
            <motion.div
              initial={{ top: "19rem", left: "25rem" }}
              whileInView={{ left: "12rem" }}
              transition={transition}
              style={{left:'12rem',top:'19rem'}}>
                <Card
                    emoji = {Humble}
                    heading = {'UI/UX'}
                    detail = {"lorem ispum dummy text are usually use in section where...."}
                />
            </motion.div>
            <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  )
}

export default Services
