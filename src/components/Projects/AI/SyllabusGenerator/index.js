import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from 'react-router-dom'
import syllabusFinalProduct from '../../../../assets/images/projects/ai/Syllabus Generator Front End.png'
import syllabusPresentation from '../../../../assets/images/projects/ai/syllabus.png'
import Loader from 'react-loaders'
import AnimatedLetters from '../../../AnimatedLetters'
import './index.scss'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const media = [
  { type: "image", src: syllabusFinalProduct, alt: "Syllabus Generator Final Product" },
  { type: "image", src: syllabusPresentation, alt: "Syllabus Generator Presentation Image" }
];

const SyllabusGenerator = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <div className="container syllabus">
        <div className="syllabus-text">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...'Syllabus Generator']}
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
              <h2>About Syllabus Generator</h2>
              <p>
                Syllabus Generator is an AI Development project tasked assisting teachers by 
                generating a syllabus based off their subject, grade, course material, and others. 
                I took on this project as a request from my supervisor and was promoted to project manager for the role.
                In this project, I was the project manager and lead a team of 4 developers and I hosted weekly meetings with them to confirm progress and explain next steps.
                I also participated in weekly meetings with my supervisor to explain our progress and any difficulties we had.
                Our syllabus generator was equipped with API connections and a CI/CD pipeline developed by <a href="https://www.linkedin.com/in/kriti-ajwani-a462b218a/">Kriti Ajwani</a>. At the end of this project, I opted in to present our work to the whole company.
                The presentation was a success and the syllabus generator final build was pushed to the main repository.
              </p>
              <p>
                I completed this project while at Radical X. 
                There I learned everything I could from those around me.
                While there, we communicated by Slack and I hosted weekly meetings 
                to confirm we all knew what we were doing that week.
                We also used Github for our version control and Notion for a project roadmap.
              </p>
            </div>
          </div>
        </div>

        <div className="syllabus-skills">
          <h2>Technologies & Skills</h2>
          <ul className="skills-list">
            <li>Project Management</li>
            <li>Public Speaking</li>
            <li>Agile Methodologies</li>
            <li>Bug Fixing</li>
            <li>Active Listening</li>
            <li>Python</li>
            <li>Machine Learning</li>
            <li>Retrieval Augmented Generation (RAG)</li>
            <li>Google Cloud Platform (GCP)</li>
            <li>Vertex AI</li>
            <li>Generative AI Development</li>
            <li>Few-shot Prompt Engineering</li>
            <li>API Development</li>
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

export default SyllabusGenerator
