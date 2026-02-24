import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from 'react-router-dom'
import dynamo from '../../../../assets/images/projects/ai/dynamo.png'
import dynamoVideo from '../../../../assets/images/projects/ai/Dynamo Video.gif'
import Loader from 'react-loaders'
import AnimatedLetters from '../../../AnimatedLetters'
import './index.scss'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const media = [
  { type: "image", src: dynamo, alt: "Dynamo" },
  { type: "video", src: dynamoVideo, alt: "Dynamo video link", href: "https://www.loom.com/share/274ff7a7f9ec4aa0bbe10529f8c7f84b?sid=8560275c-ebd4-4c04-90f1-e44bece9ccd0", label: "Watch Demo"}
];

const Dynamo = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <div className="container dynamo">
        <div className="dynamo-text">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...'Mission Dynamo']}
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
              <h2>About Mission Dynamo</h2>
              <p>
                Mission Dynamo is an AI Development project tasked assisting students by 
                creating easy to study flashcards from sorce material. To acomplish this, I used a RAG pipeline 
                that would summarize the the users youtube video into easy to understand flashcards from the important information.
                This gave students the oprotunity to study the youtube video's key concepts so the students wouldn't miss the important information.
              </p>
              <p>
                I completed this project while at Radical X. 
                There I learned everything I could from those around me.
                While there, we communicated by Slack and held weekly meetings 
                to confirm we all knew what we were doing that week.
                We also used Github for our version control and Notion for a project roadmap.
              </p>

              <a
                className="play-button"
                href="https://www.loom.com/share/274ff7a7f9ec4aa0bbe10529f8c7f84b?sid=8560275c-ebd4-4c04-90f1-e44bece9ccd0"
                target="_blank"
                rel="noreferrer"
              >
                ▶ Watch demonstration video
                {/* ▶ Play Now */}
              </a>
            </div>
          </div>
        </div>

        <div className="dynamo-skills">
          <h2>Technologies & Skills</h2>
          <ul className="skills-list">
            <li>Python</li>
            <li>Machine Learning</li>
            <li>Retrieval Augmented Generation (RAG)</li>
            <li>Google Cloud Platform (GCP)</li>
            <li>Vertex AI</li>
            <li>AI Summarization</li>
            <li>Generative AI Development</li>
            <li>Few-shot Prompt Engineering</li>
            <li>API Development</li>
            <li>Cloud Based Storage</li>
            <li>Streamlit</li>
            <li>Git</li>
            <li>Public Speaking</li>
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

export default Dynamo
