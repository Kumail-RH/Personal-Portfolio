import React from 'react'
import '../styles/Home.css'
import Github from '../assets/github.png'
import LinkedIn from '../assets/linkedin.png'
import Instagram from '../assets/instagram.png'
import Vector1 from '../assets/Vector1.png'
import Vector2 from '../assets/Vector2.png'
import boy from '../assets/boy.png'
import thumbup from '../assets/thumbup.png'
import Crown from '../assets/crown.png'
import glassesemoji from '../assets/glassesimoji.png'
import FloatingDiv from './FloatingDiv'
import { themeContext } from '../Context'
import { useContext } from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-scroll'


const Home = () => {
  const transition = {duration: 2, type: "spring"};
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className='intro' id="Navbar">
      <div className="i-left">
        <div className="i-name">
            <span style={{color: darkMode? "white":""}}>Hy! I Am</span>
            <span>Kumail Raza</span>
            <span>Full Stack Developer with high level of experience in web & mobile development, producting the Quality work</span>
        </div>
        <Link to="Contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
            <img src={Github} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={Instagram} alt="" />
          
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />  
        
        <motion.img
          initial={{left:"-36%"}}
          whileInView={{left:"-24%"}}
          transition={transition}
          src={glassesemoji} alt="" /> 

        <motion.div
          initial={{top:"-4%",left:'74%'}}
          whileInView={{left:"68%"}}
          transition={transition}
          style={{top:"-4%",left:"68%"}}
          className='floating-div'>
          <FloatingDiv image={Crown} txt1='Web' txt2='Development'/>
        </motion.div>

        <motion.div
          initial={{left:'9rem', top:'18rem'}}
          whileInView={{left:'0rem'}}
          transition={transition}
          style={{top:"18rem",left:"0rem"}}
          className='floating-div'>
          <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
        </motion.div>

        {/* Blur divs */}
        <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
        <div className="blur" style={{background: '#C1F5FF', top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
      </div>
    </div>
  )
}

export default Home
