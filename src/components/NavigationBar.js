import React, { useState, useEffect } from 'react'
import { Link  } from 'react-router-dom';
import logo from "../assets/logo.png";
import "../styles/NavigationBar.css";

export default function NavigationBar() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to top when the link is clicked
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > window.innerHeight-500)
        if (currentScrollY < lastScrollY) 
          setShowNav(true)
        else 
          setShowNav(false)
      else 
        setShowNav(true)
      
      setLastScrollY(currentScrollY);      
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY])

  return (
    <div className={`navigation-bar ${showNav ? "visible" : "hidden"}`}>
      <div class="container">
        <div className="logo-container">
          <img src={logo} alt="home-logo" />
        </div>
        <div className="navigation-tabs">
          <ul>
            <li className="tab"><Link to={"/"} onClick={handleClick}>HOME</Link></li>
            <li className="tab"><a href="https://drive.google.com/file/d/1KbknSlJOExJ7Rut502s05W1c5cYqIniZ/view" target="_blank" rel="noopener noreferrer">MENU</a></li>
            <li className="tab"><Link to={"/about"} onClick={handleClick}>ABOUT</Link></li>
            <li className="tab"><Link to={"/event"} onClick={handleClick}>EVENT</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
