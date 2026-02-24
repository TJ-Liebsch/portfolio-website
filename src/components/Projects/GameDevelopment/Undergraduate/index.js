import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from 'react-router-dom'
// import { Unity, useUnityContext } from "react-unity-webgl";
import undergraduateGamePhoto from '../../../../assets/images/projects/game/undergrad.jpg'
import preTestResults from '../../../../assets/images/projects/game/pre-test results.png'
import postTestResults from '../../../../assets/images/projects/game/post-test results.png'
import codingExperience from '../../../../assets/images/projects/game/coding experience.png'
import satisfactory from '../../../../assets/images/projects/game/satisfactory.png'
import preference from '../../../../assets/images/projects/game/preference.png'


import Loader from 'react-loaders'
import AnimatedLetters from '../../../AnimatedLetters'
import './index.scss'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const media = [
  { type: "image", src: undergraduateGamePhoto, alt: "Applied Undergraduate Homepage" },
  { type: "image", src: preTestResults, alt: "Pre-test results" },
  { type: "image", src: postTestResults, alt: "Post-test results" },
  { type: "image", src: codingExperience, alt: "Prior coding experience" },
  { type: "image", src: satisfactory, alt: "Satisfactory report" },
  { type: "image", src: preference, alt: "User preferences" }
];

const Undergraduate = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  // const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
  //   loaderUrl: process.env.PUBLIC_URL + "/PacmanBuild/Pacman.loader.js",
  //   dataUrl: process.env.PUBLIC_URL + "/PacmanBuild/Pacman.data",
  //   frameworkUrl: process.env.PUBLIC_URL + "/PacmanBuild/Pacman.framework.js",
  //   codeUrl: process.env.PUBLIC_URL + "/PacmanBuild/Pacman.wasm",
  // });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <div className="container undergraduate">
        <div className="undergraduate-text">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...'Undergraduate Research Project']}
              idx={6}
            />
          </h1>

          <div className="project-content">
            {/* <div>
              {!isLoaded && <p>Loading: {Math.round(loadingProgression * 100)}%</p>}
              <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
            </div> */}

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
              <h2>About Undergraduate Research Project</h2>
              <p>
                In SE 342 at Saint Cloud State University. I took the class Applied Undergraduate Research. 
                In this class, myself and 3 other developers decide to research the imact of interactive game-based learning for computer science students.
                We wanted to see if gameifying the course material would make it easier to learn. 
                To research this, we developed before and after tests using google forms. 
                Afterwords we got participants with a diverse level of coding experience.
                The material they were tested on, before and after the game, was computer science 1 topics.
              </p>
              <p>
                The game was developed with Unity Game Engine and consisted of 3 different topics: variables, if statments, and loops.
                There was also a main menu page to navigate between them.f
                After we were done with this project, we had developed a research paper, test results, and a working educational game.
                For the research topic, can interactive game-based learning for computer science students help, we found that there was an improvement in the test scores after playing the game.
              </p>
              <p>
                If you want to read our research paper, you can click this link. <a href='https://docs.google.com/document/d/1X-VPf-R7sxvajPBhbAOmSU57dmSdLcL0/edit?usp=sharing&ouid=106295100128798980296&rtpof=true&sd=true'>Research Paper</a> {""}<br/>
                If you'd like to play the game, click the ▶ Play Now link below.
              </p>

              <a
                className="play-button"
                href="https://www.loom.com/share/23eba195ca614e16b112813d92fed34e"
                target="_blank"
                rel="noreferrer"
              >
                ▶ Play Now
              </a>
            </div>
          </div>
        </div>

        <div className="undergraduate-skills">
          <h2>Technologies & Skills</h2>
          <ul className="skills-list">
            <li>Unity Game Engine</li>
            <li>C#</li>
            <li>C++</li>
            <li>Object-Oriented Programming</li>
            <li>Menu Systems</li>
            <li>Input Handling</li>
            <li>Research Paper Development</li>
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

export default Undergraduate
