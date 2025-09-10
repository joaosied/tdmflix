import React from "react";
import { FaYoutube, FaTwitter, FaInstagram, FaTwitch } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons w-full  justify-center flex gap-5 text-3xl ">
        <a href="https://www.youtube.com/@Polacool_" target="blank">
          <FaYoutube />
        </a>
        <a href="https://www.instagram.com/joaosied/" target="blank">
          <FaInstagram />
        </a>
        <a href="https://x.com/joaosied" target="blank">
          <FaTwitter />
        </a>
        <a href="https://www.twitch.tv/polacool_" target="blank">
          <FaTwitch />
        </a>
      </div>
    </div>
  );
};

export default Footer;
