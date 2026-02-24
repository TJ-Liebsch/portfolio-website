import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from 'react-router-dom'
// import { Unity, useUnityContext } from "react-unity-webgl";
import pacman from '../../../../assets/images/projects/game/pacman.png'
import pacmanVideo from '../../../../assets/images/projects/game/Pacman Video.gif'
import Loader from 'react-loaders'
import AnimatedLetters from '../../../AnimatedLetters'
import './index.scss'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const media = [
  { type: "image", src: pacman, alt: "Pacman" },
  { type: "image", src: pacmanVideo, alt: "Pacman Video"}
];

const Pacman = () => {
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
      <div className="container quizify">
        <div className="quizify-text">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...'Pacman']}
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
              <h2>About Pacman</h2>
              <p>
                This Pacman clone was my first ever game I developed from scratch. In 2021, 
                I decided I wanted to develop video games and this was just my begining. 
                I looked up a youtube series by <a href="https://youtu.be/tjxKxZsofdk?si=yF5ZhzdRG9zzoAjN">the weekly coder</a> {""}
                that taught me not only how to make the pacman clone but also taught me nice tricks to use in the industry like 
                when to use nodes vs arrays and 2D movement. I learned a lot from this small project and it gave me the confidence to try my first ever game jam. 
                This is when I created <a href="CubeyCombination">Cubey Combination</a>
              </p>

              {/* <a
                className="play-button"
                href="https://www.loom.com/share/23eba195ca614e16b112813d92fed34e"
                target="_blank"
                rel="noreferrer"
              >
                ▶ Play Now
              </a> */}
            </div>
          </div>
        </div>

        <div className="quizify-skills">
          <h2>Technologies & Skills</h2>
          <ul className="skills-list">
            <li>Unity Game Engine</li>
            <li>C#</li>
            <li>Object-Oriented Programming</li>
            <li>2D Movement Systems</li>
            <li>Pathfinding Algorithms</li>
            <li>Input Handling</li>
            <li>Collision Detection</li>
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

export default Pacman
