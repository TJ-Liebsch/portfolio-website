import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from 'react-router-dom'
import audiobookSpectograph from '../../../../assets/images/projects/ai/Audiobook Spectograph.png'
import justSpectograph from '../../../../assets/images/projects/ai/justSpectograph.png'
import Loader from 'react-loaders'
import AnimatedLetters from '../../../AnimatedLetters'
import './index.scss'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const media = [
  { type: "image", src: audiobookSpectograph, alt: "Audiobook Spectograph and Code result" },
  { type: "image", src: justSpectograph, alt: "Just the Audiobook Spectograph" }
];

const AudiobookGenerator = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <div className="container audiobook">
        <div className="audiobook-text">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...'Audiobook Generator']}
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
              <h2>About Audiobook Generator</h2>
              <p>
                Audiobook Generator is an AI Development product tasked with generating an audiobooks for authors. 
                It is equipped with voice cloning, chapter segmentation, and the capablity to record different voices for seperate characters. 
                I took on this project after I graduated as the president of PS Publishing knew of my Radical X experience and wanted to develop audiobooks.
                In this project, I worked as a solo developer and used open source AI models to develop this product as cost effectivly as I could.
                I gathered her requirements for the product and have been working with her to create an AI personalized to her company.
                In other words, the AI use cases had to range from children's books to horror. 
              </p>
              <p>
                I completed this project while PS Publishing. 
                There I created a Jira backlog and an kept the president updated on my progress with the project.
                I am still adding little features here and there like an automated word checker 
                so the author can confirm that hard to pronounce words were pronounced corectly without having to search the whole recording.
                I'll update my LinkedIn when those changes are added so stay tooned.
              </p>
            </div>
          </div>
        </div>

        <div className="syllabus-skills">
          <h2>Technologies & Skills</h2>
          <ul className="skills-list">
            <li>Open Source Technologies</li>
            <li>Python</li>
            <li>Machine Learning</li>
            <li>Generative AI Development</li>
            <li>Agile Methodologies</li>
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

export default AudiobookGenerator
