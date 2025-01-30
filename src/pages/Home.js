import React, { useRef, useEffect } from 'react';
import "../styles/Home.css";

import videoBg from "../assets/kalahari-video.mp4";
import serving from "../images/serving.jpg";
import table from "../images/table.jpg";

import NavigationBar from '../components/NavigationBar';
import UpcomingEvent from '../components/UpcomingEvent';
import MenuShowcase from '../components/MenuShowcase';
import FooterSection from '../components/FooterSection';

export default function Home() {
	const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Current scroll position
      const video = videoRef.current;

      if (video) {
        // Adjust the video position based on the scroll
        video.style.top = `0`; 
        video.style.left = `0`; 
        video.style.transform = `translateY(${scrollTop * 0.5}px)`; // Adjust the factor for parallax speed
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home-page">
			<NavigationBar />

			<div className="landing-section">
				<video ref={videoRef} src={videoBg} autoPlay loop muted disablePictureInPicture></video>
			</div>

			<div className="about-section">
				<img src={table} alt="left-img" />
				<div className="slogan">
					<div className="container">
						<h1>Kalahari Lounge | Club</h1>
						<h3>Make Some Memorable Night</h3>
						<h2>WHERE ART, MUSIC AND ADVENTURE COLLIDES</h2>
						<p>
							Secure a spot in our VIP lounge for your friends to chill, drink and chat! You can also
							buy bottle from us and we will bring the liquor to you with a twist surprise. What are you
							waiting for book now.
						</p>
						<a href="https://app.squareup.com/appointments/book/b8loa8c2f8f5hm/L0XPFTM4NDKR6/start" target="_blank" rel="noopener noreferrer">BOOK RESERVATION</a>
					</div>
				</div>
				<img src={serving} alt="right-img" />
			</div>
      
			<UpcomingEvent />

			<MenuShowcase />

			<FooterSection />
		</div>
  )
}
