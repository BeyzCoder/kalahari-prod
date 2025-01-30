import React, { useRef, useEffect } from 'react'
import "../styles/Event.css";

import videoBg from "../assets/kalahari-video-2.mp4";
import event1 from "../images/event1.png";
import event2 from "../images/event2.png";
import event3 from "../images/event3.png";
import event4 from "../images/event4.png";

import NavigationBar from '../components/NavigationBar'
import FooterSection from '../components/FooterSection'

export default function Event() {
	const videoRef = useRef(null);

  const eventList = [
		{ backImg: event1, day: "THUR", date: "1/30", titleEvent: "SALSA NIGHT", desc: "Free admission, so bring your partner."},
		{ backImg: event2, day: "SAT", date: "2/1", titleEvent: "AFROBEATS DANCEHALL SOCA R&B", desc: "Celebrating Black History Month."},
		{ backImg: event4, day: "SAT", date: "2/8", titleEvent: "TRAFFIC SIGNAL VALENTINE", desc: "Taken, Maybe, Single"},
		{ backImg: event3, day: "SAT", date: "2/22", titleEvent: "THE RAVE PARTY 2.0", desc: "Sinful Soiree Masked Night"},
	];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Current scroll position
      const video = videoRef.current;

      if (video) {
        // Adjust the video position based on the scroll
        video.style.top = `0`; 
        video.style.left = `0`; 
        video.style.transform = `translateY(${scrollTop * 0.8}px)`; // Adjust the factor for parallax speed
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="event-section">
        <NavigationBar />

        <div class="event-landing">
					<video ref={videoRef} src={videoBg} autoPlay loop muted disablePictureInPicture></video>
					<h1>BE PART ON OUR NEXT EVENT</h1>
        </div>
        
        <div class="event-listing">
          <div class="event-grid">
            {eventList.map((event, index) => (
              <div className="event-container" key={index}>
                <img src={event.backImg} alt="event-img" />
              </div>
            ))}
          </div>

          <a href="https://app.squareup.com/appointments/book/b8loa8c2f8f5hm/L0XPFTM4NDKR6/start" target="_blank" rel="noopener noreferrer">BOOK RESERVATION</a>
        </div>

        <FooterSection />
    </div>
  )
}
