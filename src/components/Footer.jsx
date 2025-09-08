import React from 'react'
import { FaYoutube, FaTwitter, FaInstagram, FaTwitch } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons w-full  justify-center flex gap-5 text-3xl ">
        <FaYoutube/>
        <FaInstagram/>
        <FaTwitter/>
        <FaTwitch/>
      </div>
    </div>
  )
}

export default Footer
