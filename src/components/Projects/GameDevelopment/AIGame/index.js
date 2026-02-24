import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from 'react-router-dom'
// import { Unity, useUnityContext } from "react-unity-webgl";
import opening from '../../../../assets/images/projects/game/aiGameOpening.png'
import blacksmith from '../../../../assets/images/projects/game/aiGameBlacksmith.png'
import Loader from 'react-loaders'
import AnimatedLetters from '../../../AnimatedLetters'
import './index.scss'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const media = [
  { type: "image", src: opening, alt: "Opening Scene" },
  { type: "image", src: blacksmith, alt: "Blacksmith Scene"}
];

const AIGame = () => {
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
      <div className="container aiGame">
        <div className="aiGame-text">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...'AI Game Development Project']}
              idx={9}
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
              <h2>About AI Game Development Project</h2>
              <p>
                This AI Game Development Project was the most recent new game I have developed and it blends my AI experience with my game development experience.
                This goal of this game was to bring an immersive, real-time, and limitless D&D experience through AI and the Unity Game Engine.
                I worked as the AI developer and <a href='https://www.linkedin.com/in/josephine-green-a2420a295/'>Josie Green</a> {""} worked as the game developer. 
              </p>
              <p>  
                We had version control through Unity Cloud and we used Microsoft Azure for our backlog.
                To deviver the AI tools, I developed a way to call the AI models' APIs using unity scripts.
                While in this project, I had to use multiple different models: DALLE-3 for image generation and Botpress for chatbot.
                I chose Botpress because of their simple finetuning as I knew we would have to specialize the AI to our use case and make changes quick for our professor.
                Our game only took around 6 seconds without image generation and around 30 seconds with image generation. 
                However, in the future, we can switch to a CAG pipeline for image generation removing the 24 second downtime in most scenerios.
                The game only cost around a dollar per short playthough. 
                However, we can make that even cheaper, around 4 cents per short playthough, but we have not developed the game further.
              </p>
              <p>
                Live Demos are available upon request
                {/* but here is a link to a recorded demo of the game, <a href='https://www.linkedin.com/in/josephine-green-a2420a295/'>Josie Green</a> {""} and I recorded for our professor, in the ▶ Watch Now button. */}
              </p>

              {/* <a
                className="play-button"
                href="https://www.loom.com/share/23eba195ca614e16b112813d92fed34e"
                target="_blank"
                rel="noreferrer"
              >
                ▶ Watch Now
              </a> */}
            </div>
          </div>
        </div>

        <div className="aiGame-skills">
          <h2>Technologies & Skills</h2>
          <ul className="skills-list">
            <li>Unity Game Engine</li>
            <li>C#</li>
            <li>Object-Oriented Programming</li>
            <li>Story Telling Games</li>
            <li>Decision Trees</li>
            <li>Play-Style Metrics</li>
            <li>Bartle taxonomy of player types</li>
            <li>Pitch Deck creation</li>
            <li>Minimal Viable Product (MVP) creation</li>
            <li>Image Generation</li>
            <li>Large Language Models</li>
            <li>Fine-tuning </li>
            <li>Prompt Engineering</li>
            <li>Few-shot Prompting</li>
            <li>Overfitting vs Underfitting</li>
            <li>Unity Cloud</li>
            <li>Azure DevOps</li>
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

export default AIGame
