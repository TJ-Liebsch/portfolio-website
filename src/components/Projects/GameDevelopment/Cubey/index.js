import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from 'react-router-dom'
// import { Unity, useUnityContext } from "react-unity-webgl";
import cubey0 from '../../../../assets/images/projects/game/Cubey0.jpeg'
import cubey1 from '../../../../assets/images/projects/game/Cubey1.png'
import cubey2 from '../../../../assets/images/projects/game/Cubey2.png'
import Loader from 'react-loaders'
import AnimatedLetters from '../../../AnimatedLetters'
import './index.scss'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const media = [
  { type: "image", src: cubey0, alt: "First Draft" },
  { type: "image", src: cubey1, alt: "Second Draft"},
  { type: "image", src: cubey2, alt: "Third Draft"}
];

const Cubey = () => {
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
      <div className="container cubey">
        <div className="cubey-text">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...'Cubey Combination']}
              idx={17}
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
              <h2>About Cubey Combination</h2>
              <p>
                Cubey Combination was the result of a week long Game Jam and it was my second ever game that I developed.
                When you participate in a Game Jam, you get given a prompt to build your game around. Mine was combination.
                I began brainstorming ideas and pretty quickly came up with a platformer that requires you to combine with pieces to your advance to take everyone to victory.
                After I developed the core mechanics, I began working on level design.
                I proceeded to then design 4 levels, with the final level being triple to length of the others.
                Each level would have it's own unique mechanic that would carry over each level: doors, lazers, dashes, and a chase scene.
                The first level was very easy and only took me one day. However, I proceeded to get stuck on implementing the lazer feature.
                This led the first version of my game to only have a menu, one level, and end credits.
              </p>
              <p>
                I took this as a learning experience, as that's all you can ever do. 
                Now I have learned how to overcome those roadblocks and it was thanks to my software engineering experience at SCSU.
                After graduating and wanting to pursue game development, I decided to revisit developing the game.
                I am currently still working on it; however, I took a break to develop this portfolio.
              </p>

              <a
                className="play-button"
                href="https://tj-liebsch.itch.io/cue-b-companion"
                target="_blank"
                rel="noreferrer"
              >
                ▶ Play Now
              </a>
            </div>
          </div>
        </div>

        <div className="cubey-skills">
          <h2>Technologies & Skills</h2>
          <ul className="skills-list">
            <li>Unity Game Engine</li>
            <li>C#</li>
            <li>Object-Oriented Programming</li>
            <li>2D Movement Systems</li>
            <li>Platformer Game Development</li>
            <li>Game State Machines</li>
            <li>Shader Pipelines</li>
            <li>Prototyping</li>
            <li>Level Design</li>
            <li>Input Handling</li>
            <li>Collision Detection</li>
            <li>2D Sprite Animation</li>
            <li>Tileset Designs</li>
            <li>Camera Control</li>
            <li>Persistence</li>
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

export default Cubey
