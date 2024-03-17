import React from 'react';
import './Header.css'; // You might want to create a separate CSS file for the menu

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">HAPPYNEWS</div>
      <div className="menu">
        <a href="#home">Home</a>
        <a href="#debate">Politics</a>
        <a href="#india-news">Health</a>
        <a href="#news-details">Entertainment</a>
        <a href="#sports-news">Sports News</a>
        <a href="#sports-details">Sports Details</a>
        <a href="#contact">Contact</a>
        <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            <a href="#link1">Link 1</a>
            <a href="#link2">Link 2</a>
            <a href="#link3">Link 3</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;