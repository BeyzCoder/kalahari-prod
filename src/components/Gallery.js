import React from 'react'
import "../styles/Gallery.css";

import kalahari1 from "../images/kalahari1.jpg";
import kalahari2 from "../images/kalahari2.jpg";
import kalahari3 from "../images/kalahari3.jpg";
import kalahari4 from "../images/kalahari4.jpg";
import kalahari5 from "../images/kalahari5.jpg";
import kalahari6 from "../images/kalahari6.jpg";

export default function Gallery() {
	const images = [
		kalahari1,
		kalahari2,
		kalahari3,
		kalahari4,
		kalahari5,
		kalahari6,
	]
	
  return (
    <div className="gallery-component">
			{images.map((pic, index) => (
				<img src={pic} alt="event-pic" key={index} />
			))}
		</div>
  )
}
