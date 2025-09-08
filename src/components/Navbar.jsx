import React from "react";
import logo from "../../src/assets/logo.png";
import { MdSearch } from "react-icons/md";
import { FaUser, FaBell, FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar w-full flex justify-between fixed color-[#e5e5e5] z-10">
      <div className="navbar-logo flex items-center gap-12.5">
        <img className="w-23" src={logo} alt="logo TdmFlix" />
        <ul className="flex list-none gap-5">
          <li>Home</li>
          <li>Shows de Horrores</li>
          <li>Filmes</li>
          <li>Novos</li>
          <li>Meus Favoritos</li>
        </ul>
      </div>
      <div className="navbar-icons flex gap-5 items-center">
        <MdSearch className="icons" />
        <p>Children</p>
        <FaBell className="icons" />
        <div className="nav-profile flex items-center gap-2 cursor-pointer relative">
          <FaUser className="profile" />
          <FaCaretDown />
          <div className="dropdown  absolute top-[100%] right-0 w-max bg-[#191919] underline z-10 cursor-pointer ">
            <p>Sair do TdmFlix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
