import React, { useState } from 'react'
import "../styles/MenuShowcase.css";
import logo from "../assets/logo.png";
import arrow from "../assets/arrow-direct.svg";

import cocktail1 from "../images/cocktail1.jpg";
import cocktail2 from "../images/cocktail2.jpg";
import cocktail3 from "../images/cocktail3.jpg";

import entree1 from "../images/entree1.jpg";
import entree2 from "../images/entree2.jpg";
import entree3 from "../images/entree3.jpg";

import appetite1 from "../images/appetite1.jpg";
import appetite2 from "../images/appetite2.jpg";
import appetite3 from "../images/appetite3.jpg";

export default function MenuShowcase() {
	const [sampleFood, setSampleFood] = useState({
		serving1: cocktail1,
		serving2: cocktail2,
		serving3: cocktail3,
	})

  const changeImage = (type) => {
    if (type === "Cocktail") {
      setSampleFood({
        serving1: cocktail1,
        serving2: cocktail2,
        serving3: cocktail3,
      });
    } else if (type === "Appetizer") {
      setSampleFood({
        serving1: appetite1,
        serving2: appetite2,
        serving3: appetite3,
      });
    } else if (type === "Entree") {
      setSampleFood({
        serving1: entree1,
        serving2: entree2,
        serving3: entree3,
      });
    }
  }

  return (
    <div className="menu-list">
      <div className="empty-box"></div>
			<h2>DINE WITH US:</h2>
			<div className="menu-display">

				<img src={logo} alt="kalahari-logo" />
				
				<div className="sample-foods">
					<img src={sampleFood.serving1} alt="food" />
					<img src={sampleFood.serving2} alt="food" />
					<img src={sampleFood.serving3} alt="food" />
				</div>

				<div className="menu-nav">
					<div className="menu-options">
						<button onClick={() => changeImage("Cocktail")}>DRINKS</button>
						<button onClick={() => changeImage("Appetizer")}>APPETIZERS</button>
						<button onClick={() => changeImage("Entree")}>ENTREE</button>
					</div>

					<div className="menu-route">
						<img src={arrow} alt="arrow" />
						<a href="https://drive.google.com/file/d/1KbknSlJOExJ7Rut502s05W1c5cYqIniZ/view" target="_blank" rel="noopener noreferrer">Checkout more of our specialty!</a>
					</div>
				</div>

			</div>
      <div className="empty-box"></div>
		</div>
  )
}
