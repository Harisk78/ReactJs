import React from 'react'
import './Foot.css'
const Footer = () => {
    function getYear(){
        let d = new Date();
        return d.getFullYear();
    }
  return (
    <div className='foot'>
        <p>copyright &copy; {getYear()}</p>
        <p>HARISK</p>
    </div>
  )
}

export default Footer