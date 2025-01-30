import React from 'react'

import kalahariBg from '../images/kalahari-background.jpg';
import kalahariBg2 from '../images/kalahari-background2.jpg';
import kalahariBg3 from '../images/kalahari-background3.jpg';
import "../styles/About.css";

import NavigationBar from '../components/NavigationBar'
import FooterSection from '../components/FooterSection'

export default function About() {
  return (
    <div className="about-page">
			<NavigationBar />

      <div className="about-container">
        <div className="row-contain">
          <div className="row-desc">
            <div>
              <h1>In The Klerb</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quam, ut temporibus sit voluptatem odit ex exercitationem perspiciatis 
                labore aut quidem, id blanditiis enim, 
                dolorum laboriosam excepturi explicabo? Ut, magni.
                </p>
            </div>
          </div>
          <div className="row-img">
            <img src={kalahariBg} alt="background" />
          </div>
        </div>

        <div className="row-contain">
          <div className="row-img">
            <img src={kalahariBg2} alt="about-bg" />
          </div>
          <div className="row-desc">
            <div>
              <h1>Our Klerb Service</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quam, ut temporibus sit voluptatem odit ex exercitationem perspiciatis 
                labore aut quidem, id blanditiis enim, 
                dolorum laboriosam excepturi explicabo? Ut, magni.</p>
            </div>
          </div>
        </div>

        <div className="row-contain">
          <div className="row-desc">
            <div>
              <h1>Klerb Social</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quam, ut temporibus sit voluptatem odit ex exercitationem perspiciatis 
                labore aut quidem, id blanditiis enim, 
                dolorum laboriosam excepturi explicabo? Ut, magni.</p>
            </div>
          </div>
          <div className="row-img">
            <img src={kalahariBg3} alt="about-bg" />
          </div>
        </div>
      </div>

      <div className="review-container">
        <div className="elfsight-app-68563e3e-9fc3-47f3-a41f-6ad15a756ddb" data-elfsight-app-lazy></div>
        <div className="reserve-link">
          <a href="https://www.google.com/search?hl=en-CA&gl=ca&q=Kalahari+Lounge+and+Club,+120+2nd+Ave+N,+Saskatoon,+SK+S7K+2B2&ludocid=3817931374688213419&lsig=AB86z5XgwPB6NbFYkVt61L3GY7QT#" target="_blank" rel="noopener noreferrer">LEAVE A REVIEW</a>
          <a href="https://app.squareup.com/appointments/book/b8loa8c2f8f5hm/L0XPFTM4NDKR6/start" target="_blank" rel="noopener noreferrer">BOOK RESERVATION</a>
        </div>
      </div>

      <FooterSection />
		</div>
  )
}
