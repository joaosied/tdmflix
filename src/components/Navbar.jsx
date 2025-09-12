import React from "react";
import logo from "../../src/assets/logo.webp";
import { MdSearch } from "react-icons/md";
import { FaUser, FaBell, FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="navbar w-full flex justify-between fixed color-[#e5e5e5] z-10">
      <div className="navbar-logo flex items-center gap-12.5">
        <img className="w-23" src={logo} alt="logo TdmFlix" />
        <ul className="flex list-none gap-5">
          <a href="/">
            {" "}
            <li>Início</li>{" "}
          </a>
          <li onClick={() => scrollToSection("showHorrores")}>
            Shows de Horrores
          </li>
          <li onClick={() => scrollToSection("soAcontece")}>
            Só Acontece na TDM
          </li>
          <li onClick={() => scrollToSection("filmes")}>Filmes</li>
          <li onClick={() => scrollToSection("melhoresJogadas")}>
            Melhores Jogadas
          </li>
        </ul>
      </div>
      <div className="navbar-icons flex gap-5 items-center">
        <div className="iconBell relative">
          <FaBell className="icons" />
          <div className="dropdown absolute top-full right-0 w-max bg-[#191919] z-10">
            <p>para de vasculhar seu danado</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
