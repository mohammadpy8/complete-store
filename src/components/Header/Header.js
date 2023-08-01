import React from "react";
import TopBar from "../TopBar/TopBar";
import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";

import "./Header.css";

const Header = () => {
  return (
    <header class="header">
      <TopBar />
      <Navbar />
      <Landing />
    </header>
  );
};

export default Header;
