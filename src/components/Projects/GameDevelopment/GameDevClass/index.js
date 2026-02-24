import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from 'react-router-dom'
// import { Unity, useUnityContext } from "react-unity-webgl";
import menu from '../../../../assets/images/projects/game/Class game Menu.png'
import movingBlocks from '../../../../assets/images/projects/game/Class game moving blocks.png'
import planets from '../../../../assets/images/projects/game/Class game planets.png'
import bowling from '../../../../assets/images/projects/game/Class game bowling.png'
import Loader from 'react-loaders'
import AnimatedLetters from '../../../AnimatedLetters'
import './index.scss'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const media = [
  { type: "image", src: menu, alt: "Menu for the three games I made in my game development class" },
  { type: "image", src: movingBlocks, alt: "A game about moving blocks"},
  { type: "image", src: planets, alt: "A game about revolving planets"},
  { type: "image", src: bowling, alt: "A game about bowling"},
];

const GameDevClass = () => {
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
      <div className="container gameDevClass">
        <div className="gameDevClass-text">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...'Game Development Games']}
              idx={14}
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
              <h2>About Game Development Games</h2>
              <p>
                While in college, I took a game development class. 
                We were taught all sorts of things in this class: object movement, texture layering, light sources, and so much more. 
                It was a great class and taught me a lot of things about how to develop games, and actually had me develop 3 of my own.
              </p>
              <p>
                Over the course of the class, we developed a moving blocks game, a planetary orbit game, and a bowling game.
                The first game taught us about an objects transform and how to move objects using code.
                The second game taught us about texture layering, revolving objects, multiple camera setup, light sources, and UI elements.
                The third game taught us about entity optimization, when to use force vs transform, event systems, and collision.
                At the end of the project, to turn it in, we had to make a menu to direct between all of them and make each game it's own scene.
                They taught me all of the fundamentals and how to make a game in a cave with a box of scraps.
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

        <div className="gameDevClass-skills">
          <h2>Technologies & Skills</h2>
          <ul className="skills-list">
            <li>Unity Game Engine</li>
            <li>C#</li>
            <li>Object-Oriented Programming</li>
            <li>Object Texturing</li>
            <li>Revolving Objects</li>
            <li>Multiple Cameras</li>
            <li>Light Sources</li>
            <li>UI Elements</li>
            <li>Entity Optimization</li>
            <li>Force vs Transform</li>
            <li>Event Systems</li>
            <li>Scene Mangement</li>
            <li>Menu Systems</li>
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

export default GameDevClass
