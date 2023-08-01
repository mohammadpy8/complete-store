import React from "react";
import "./Header.css";
import TopBar from "../TopBar/TopBar";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header class="header">
      <TopBar />
      <Navbar />
    </header>
  );
};

export default Header;
