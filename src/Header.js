import React, { useState, useEffect } from 'react';
import './Header.css';
import Login from './Login';

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
          <a key={item.id} href='#'>{item.category.toUpperCase()}</a>
        ))}
        <Login/>
      </div>
    </nav>
  );
};

export default Header;