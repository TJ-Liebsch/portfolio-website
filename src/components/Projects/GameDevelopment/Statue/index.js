import { useEffect, useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from 'react-router-dom'
// import { Unity, useUnityContext } from "react-unity-webgl";
import statueDemo from '../../../../assets/images/projects/game/Savior of the Statue Demo.mp4'
import statueProgress from '../../../../assets/images/projects/game/Savior of the Statue Daily Progress.mp4'
import statueMenu from '../../../../assets/images/projects/game/Statue Menu.png'
import statueMap from '../../../../assets/images/projects/game/Statue Map.png'
import statueTutorial from '../../../../assets/images/projects/game/Statue Tutorial.png'
import Loader from 'react-loaders'
import AnimatedLetters from '../../../AnimatedLetters'
import './index.scss'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const media = [
  { type: "video", src: statueDemo, alt: "Demo Video" },
  { type: "video", src: statueProgress, alt: "Progress Video" },
  { type: "image", src: statueMenu, alt: "Main Menu"},
  { type: "image", src: statueMap, alt: "Player Map"},
  { type: "image", src: statueTutorial, alt: "Player Tutorial"},
];

const Statue = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const swiperRef = useRef(null)

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
      <div className="container statue">
        <div className="statue-text">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...'Savior Of The Statue']}
              idx={16}
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
                onSwiper={(swiper) => {
                  swiperRef.current = swiper
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                loop
                autoplay={{
                  delay: 7000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                className="mySwiper"
              >
                {media.map((item, i) => (
                  <SwiperSlide key={i}>
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        controls
                        playsInline
                        className="media-video"
                        onPlay={() => {
                          swiperRef.current?.autoplay.stop()
                        }}
                        onPause={() => {
                          swiperRef.current?.autoplay.start()
                        }}
                        onEnded={() => {
                          swiperRef.current?.slideNext()
                        }}
                      />
                    ) : item.type === "link" ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="media-link"
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                        />
                        <div className="overlay">▶ Watch Video</div>
                      </a>
                    ) : (
                      <img
                        src={item.src}
                        alt={item.alt}
                      />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            

            <div className="project-description">
              <h2>About Savior Of The Statue</h2>
              <p>
                Savior of the Statue was the result of my second ever Game Jam and for this one I wanted to work with a team.
                A few days before the competition I went to the Game Jam's posted discord server and saw a 2D artist looking for a programmer.
                After a few messages, we decided to be teammates. 
                On the first day, we brainstormed ideas, and came up with a tower defense game where you protect a statue for multiple waves.
                At first, I made a NavMesh system for the player and enemy pathfinding. 
                However, after a bit of discussion about my teammate's vision for the game, we went with a more grid like pathfinding solution.
                We then worked on developing the core mechanics: click to move navigation, collecting resources, and damaging enemies. 
                At the start of the 4th day of this 7 day long Game Jam, I received a message from my teammate saying, "Due to work things, he has to unfortunately step away from the project." 
              </p>
              <p>
                I was on my own now, and I had only received temporary drawings from him before he left. 
                So I asked his permission to use those and he said he was ok with me still using his art. 
                I was not going to go down without a fight. I continued working on the project and with each day, it kept on improving. 
                I filled in for the art side of things with my limited pixel art experience.
                And at the end, the game had a story and everything I was hoping for. 
                I'm thankful I could work with my teammate for as long as I could, and I would love to work with a team again.
              </p>

              <a
                className="play-button"
                href="https://tj-liebsch.itch.io/savior-of-the-statue"
                target="_blank"
                rel="noreferrer"
              >
                ▶ Play Now
              </a>
            </div>
          </div>
        </div>

        <div className="statue-skills">
          <h2>Technologies & Skills</h2>
          <ul className="skills-list">
            <li>Unity 6 Game Engine</li>
            <li>C#</li>
            <li>Wave-Based Enemy Systems</li>
            <li>NavMesh Pathfinding</li>
            <li>A* Pathfinding</li>
            <li>Procedural Node Generation</li>
            <li>Game State Management</li>
            <li>Gameplay Balancing</li>
            <li>Collaborative Game Development</li>
            <li>Unity Version Control</li>
            <li>Communication</li>
            <li>Agile</li>
            <li>Perseverance</li>
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

export default Statue
