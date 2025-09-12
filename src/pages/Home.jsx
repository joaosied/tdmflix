import React from "react";
import Navbar from "../components/Navbar";
import hero_banner from "../assets/hero_banner.webp";
import hero_title from "../assets/hero_title.webp";
import { MdPlayArrow, MdInfo } from "react-icons/md";
import {
  filmes,
  melhoresJogadas,
  popular,
  showDeHorrores,
  soAconteceTDM,
} from "../assets/cards/Cards_data";
import Footer from "../components/Footer";
import TitleCards from "../components/TitleCards";

const Home = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
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
            <button
              onClick={() => scrollToSection("filmes")}
              className="btn bg-white text-black"
            >
              <MdPlayArrow className="text-2xl" />
              Play
            </button>
            <div className="iconInfo relative">
              <button className="btn text-white bg-[#6d6d6eb3]">
                <MdInfo className="text-xl" />
                <div className="dropdownInfo absolute w-max bg-[#191919] z-10 top-[100%]">
                  <p>é um rime ruim mas a gente se diverte!</p>
                </div>
                Mais Info
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="more-cards pl-[6%]">
        <TitleCards title="Popular na TDM" cards={popular} />
        <div id="showHorrores">
          <TitleCards title="Show de Horrores" cards={showDeHorrores} />
        </div>
        <div id="soacontece">
          <TitleCards title="Só Acontece na Tdm" cards={soAconteceTDM} />
        </div>
        <div id="filmes">
          <TitleCards title="Filmes" cards={filmes} />
        </div>
        <div id="melhoresJogadas">
          <TitleCards title="Melhores Jogadas" cards={melhoresJogadas} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
