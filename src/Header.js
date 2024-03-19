import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch(`${window.configs.apiUrl}/categories`)
      .then(response => response.json())
      .then(data => setMenuItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // The empty array ensures this effect runs only once after the initial render

  return (
    <nav className="navbar">
      <div className="logo">HAPPYNEWS</div>
      <div className="menu">
        {menuItems.map(item => (
          <a key={item.id} href='#'>{item.category}</a>
        ))}
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