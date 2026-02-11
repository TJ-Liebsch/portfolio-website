import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from 'react-router-dom'
import quizify from '../../../../assets/images/projects/ai/quizify.png'
import quizifyVideo from '../../../../assets/images/projects/ai/Quizify Video.gif'
import aiRawResult from '../../../../assets/images/projects/ai/worksheet.png'
import Loader from 'react-loaders'
import AnimatedLetters from '../../../AnimatedLetters'
import './index.scss'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const media = [
  { type: "image", src: quizify, alt: "Quizify" },
  { type: "video", src: quizifyVideo, alt: "Quizify video link", href: "https://www.loom.com/share/23eba195ca614e16b112813d92fed34e", label: "Watch Demo"},
  { type: "image", src: aiRawResult, alt: "Raw result of the AI"}
];

const Quizify = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <div className="container quizify">
        <div className="quizify-text">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...'Mission Quizify']}
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
              <h2>About Mission Quizify</h2>
              <p>
                Mission Quizify is an AI Development project tasked assisting teachers by 
                creating quizes from sorce material. To acomplish this, I used a RAG pipeline 
                that would gather information for potentiontal quiz questions from the pdf you inputed.
                Then a Google Cloud Platform Vertex AI model would generate quiz questions from that pdf.
                Afterwards, I displayed the quiz questions to the UI using streamlit and an API.
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
                href="https://www.loom.com/share/23eba195ca614e16b112813d92fed34e"
                target="_blank"
                rel="noreferrer"
              >
                ▶ Watch demonstration video
                {/* ▶ Play Now */}
              </a>
            </div>
          </div>
        </div>

        <div className="quizify-skills">
          <h2>Technologies & Skills</h2>
          <ul className="skills-list">
            <li>Python</li>
            <li>Machine Learning</li>
            <li>Retrieval Augmented Generation (RAG)</li>
            <li>Google Cloud Platform (GCP)</li>
            <li>Vertex AI</li>
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

export default Quizify
