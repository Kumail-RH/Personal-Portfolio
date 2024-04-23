import React from 'react'
import '../styles/FloatingDiv.css'
import { themeContext } from '../Context'
import { useContext } from 'react'
const FloatingDiv = ({image,txt1,txt2}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="floatingdiv">
      <div><img src={image} alt="" /></div>
      <div><span style={{color:darkMode?'black':''}}>
        {txt1}
        <br />
        {txt2}
      </span></div>
    </div>
  )  
}

export default FloatingDiv
