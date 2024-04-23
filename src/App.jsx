import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import Experience from './components/Experience'
import Works from './components/Works'
import Portfolio from './components/Portfolio'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { themeContext } from './Context'
import { useContext } from 'react'
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{background: darkMode? 'black':'', color: darkMode? 'white':'' }}>
      <Navbar/>
      <Home/>
      <Services/>
      <Experience/>
      <Works />
      <Portfolio />
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
