import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from 'react-router-dom'
import home from '../../../../assets/images/projects/full/smcWeb.png'
import api from '../../../../assets/images/projects/full/smcApi.png'
import data from '../../../../assets/images/projects/full/smcData.png'
import Loader from 'react-loaders'
import AnimatedLetters from '../../../AnimatedLetters'
import './index.scss'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const media = [
  { type: "image", src: home, alt: "Event Planner Homepage" },
  { type: "image", src: api, alt: "Event Planner API" },
  { type: "image", src: data, alt: "Event Planner Database" }
];

const SMC = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <div className="container smc">
        <div className="smc-text">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...'SMC Event Planner']}
              idx={15}
            />
          </h1>

          <div className="project-content">
            <div 
              className="project-image"
              // onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
            >
              <Swiper
                navigation={true}
                modules={[Autoplay, Navigation]}
                loop
                autoplay={{ delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true}}
                className="mySwiper"
              >
                {media.map((item, i) => (
                  <SwiperSlide key={i}>
                    {item.type === "link" ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="media-link"
                      >
                        <img src={item.src} alt="" />
                        <div className="overlay">▶ Watch Video</div>
                      </a>
                    ) : (
                      <img src={item.src} alt="" />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="project-description">
              <h2>About SMC Event Planner</h2>
              <p>
                In this project, myself and 3 other developers engineered a full-stack event reservation platform using React, SQL stored procedures, and PayPal API. 
                For this project, I primarily worked as the backend developer and was tasked with setting up the Microsoft Azure Cloud Storage Service and the API calls.
                The team and I worked closely with the client to deliver customer bookings and simplified event coordination for a local entertainment venue.
              </p>
              <p>
                We coordinated with team meetings at the end of every week to see each other's progress and problem solve any setbacks.
                This was a project that taught me a lot about what goes into developing a website.
                However, it also taught me about how to develop software for a client.
                That was the best skill I could have learned from this role because it'll be useful wherever I go.
              </p>
            </div>
          </div>
        </div>

        <div className="smc-skills">
          <h2>Technologies & Skills</h2>
          <ul className="skills-list">
            <li>C#</li>
            <li>ASP.Net</li>
            <li>React</li>
            <li>Scss</li>
            <li>SQL</li>
            <li>Basic Website Design</li>
            <li>API Design</li>
            <li>Database Design</li>
            <li>Azure Cloud Storage Services</li>
            <li>Gathering Client Requirements</li>
            <li>Git</li>
          </ul>
        </div>
        <div className="projects-link">
          <Link to="/projects" className="back-link">
            ← Back to Projects
          </Link>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default SMC
