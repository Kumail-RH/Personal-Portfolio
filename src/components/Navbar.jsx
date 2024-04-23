import React from 'react'
import '../styles/Navbar.css'
import Toggle from './Toggle'
import { Link } from 'react-scroll'
const Navbar = () => {
  return (
    <div className='n-wrapper' id="Navbar">
        <div className="n-left">
            <div className="n-name">Kumail</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>
                        <Link 
                            activeClass='active' to='Navbar' spy={true} smooth={true}>Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='Services' spy={true} smooth={true}>Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='Experience' spy={true} smooth={true}>Experience
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to='Portfolio' spy={true} smooth={true}>Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='Testimonials' spy={true} smooth={true}>Testimonials
                        </Link>
                    </li>
                </ul>
            </div>
            <button className="button n-button">
                Contact
            </button>
        </div>
    </div>
  )
}

export default Navbar
