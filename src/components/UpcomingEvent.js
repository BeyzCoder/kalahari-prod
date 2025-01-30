import React from 'react'

import event1 from "../images/event1.png";
import event2 from "../images/event2.png";
// import event3 from "../images/event3.png";
import event4 from "../images/event4.png";

import "../styles/UpcomingEvent.css";

export default function UpcomingEvent() {

  const eventList = [
		{ backImg: event1, day: "THUR", date: "1/30", titleEvent: "SALSA NIGHT", desc: "Free admission, so bring your partner."},
		{ backImg: event2, day: "SAT", date: "2/1", titleEvent: "AFROBEATS DANCEHALL SOCA R&B", desc: "Celebrating Black History Month."},
		{ backImg: event4, day: "SAT", date: "2/8", titleEvent: "TRAFFIC SIGNAL VALENTINE", desc: "Taken, Maybe, Single"},
	];

  return (
    <div className="event-list">
      <h2>UPCOMING EVENTS:</h2>
      {eventList.map((row, index) => (
        <div className="event" key={index}>
          <img src={row.backImg} alt="event-img" />
          <div className="event-detail">
            <div className="event-date">
              <span>{row.day}</span>
              <span>{row.date}</span>
            </div>
            <div className="event-desc">
              <h3>{row.titleEvent}</h3>
              <span>{row.desc}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
