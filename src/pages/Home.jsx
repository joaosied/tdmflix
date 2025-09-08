import React from "react";
import Navbar from "../components/Navbar";
import hero_banner from "../assets/hero_banner.png";
import hero_title from "../assets/hero_title.png";
import { MdPlayArrow, MdInfo } from "react-icons/md";
import TitleCards from "../components/TitleCards";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="hero relative">
        <img src={hero_banner} alt="" className="banner-img w-full" />
        <div className="hero-caption absolute w-full bottom-0">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            O filme conta a história do melhor time do platina, contando
            histórias, clipes históricos e momentos inesquecíveis
          </p>
          <div className="hero-btns flex gap-2 mb-12">
            <button className="btn bg-white text-black"><MdPlayArrow className="text-2xl"/>Play</button>
            <button className="btn text-white bg-[#6d6d6eb3]"><MdInfo className="text-xl"/>Mais Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards pl-[6%]">
        <TitleCards title={"Show de Horrores"}/>
        <TitleCards title={"Clipes Antigos"}/>
        <TitleCards title={"Só acontece na TDM"}/>
        <TitleCards title={"Mais lembrados"}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
