import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from 'react-router-dom'
import homePage from '../../../../assets/images/projects/full/portfolio.png'
import Loader from 'react-loaders'
import AnimatedLetters from '../../../AnimatedLetters'
import './index.scss'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const media = [
  { type: "image", src: homePage, alt: "Portfolio Website Homepage" },
];

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <div className="container portfolioPage">
        <div className="portfolioPage-text">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...'Portfolio Website']}
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
              <h2>About my Online Portfolio</h2>
              <p>
                After working as a backend developer for Saint Michael Cinema, I wanted to practice my Frontend Skills.
                Therefore, I challenged myself to create an online portfolio to showcase my skills.
                One of the skills I learned was how to host this website with GitHub pages.
                What you are seeing is the newest build; however, I have been continuously updating it since fall 2024.
              </p>
              <p>
                This is a portfolio that I plan to update throughout my career as well so if you have any suggestions on the look of it.
                Please, feel free to let me know. My LinkedIn and GitHub are on the bottom left of the webpage.
                However, the <Link to="/contact">contact me page</Link> has all the ways to reach out.
              </p>
            </div>
          </div>
        </div>

        <div className="portfolioPage-skills">
          <h2>Technologies & Skills</h2>
          <ul className="skills-list">
            <li>React</li>
            <li>Scss</li>
            <li>Basic Website Design</li>
            <li>Understanding UX Principles</li>
            <li>Continuous Development</li>
            <li>Webhooks</li>
            <li>GitHub pages</li>
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

export default Portfolio
