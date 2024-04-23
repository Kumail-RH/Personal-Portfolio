import React from 'react'
import '../styles/Works.css'
import Upwork from '../assets/Upwork.png';
import Fiverr from '../assets/fiverr.png';
import Amazon from '../assets/amazon.png';
import Shopify from '../assets/Shopify.png';
import Facebook from '../assets/Facebook.png';
import { themeContext } from '../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='works'>
            <div className="w-left">
                <div className="awesome">
                    <span style={{color: darkMode?'white':''}}>Works for All these</span>
                    <span>Brands & Clients</span>
                    <span>
                        Lorem ispum is simpley dummy text of printing of printing Lorem
                        <br />
                        ispum is simpley dummy text of printingLorem ispum is simpley dummy
                        text
                        <br />
                        y dummy text of printingLorem
                        <br />
                        ispum is simpley dummy text of printing
                    </span>
                    <button className='button s-button'>Hire Me</button>
                </div>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* Right Side */}
            <div className="w-right">
                <motion.div
                    initial={{rotate:45}}
                    whileInView={{rotate:0}}
                    viewport={{ margin: "-40px" }}
                    transition={{duration:3.5, type:"spring"}} 
                    className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works
