import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from 'react-router-dom'
// import { Unity, useUnityContext } from "react-unity-webgl";
import worldMap from '../../../../assets/images/projects/game/D&D world map.jpg'
import combatMap from '../../../../assets/images/projects/game/Combat Map.png'
import Loader from 'react-loaders'
import AnimatedLetters from '../../../AnimatedLetters'
import './index.scss'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const media = [
  { type: "image", src: worldMap, alt: "World Map" },
  { type: "image", src: combatMap, alt: "Combat Map"}
];

const DungeonsAndDragons = () => {
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
      <div className="container dungeons">
        <div className="dungeons-text">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...'Dungeons And Dragons']}
              idx={16}
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
              <h2>About Dungeons And Dragons</h2>
              <p>
                Playing Dungeons And Dragons has been a hobby of mine since 2021. It is a passion of mine to build the worlds that I imagine, especially with my friends. 
                However, there's a lot more to it than just playing a game. 
                There is the descriptive naration, out of the box thinking, team collaberation, and character creation.
                However, if you are running the show, you are responible for indirectly leading players, design engaging gameplay elements, keep detailed records of each interaction, thinking on your feet, and scheduling the a time to meet, despite everyone's conflicting schedules.
              </p>
              <p>
                It may not be my most formal experience, but it has taught me how to build engaging worlds for a wide range of players and keep the game engaging every week with something new.
                I have made around 5 unique worlds and played in 3.
                With being the leader of the game, you also have to tie the NPCs you build into their existing characters. 
                Meaning I have had to creativly combine 2 seperate stories around 12 different times.
                The images you see are the world map I made with the free version of Inkarnate and a battle map I took from pintrest (The credits are in the bottom right of the image. Please go check out their stuff.)
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

        <div className="dungeons-skills">
          <h2>Technologies & Skills</h2>
          <ul className="skills-list">
            <li>Descriptive and Engaging Storytelling</li>
            <li>Character Creation</li>
            <li>Creative Thinking</li>
            <li>Team Collaberation</li>
            <li>Indirectly Helping Players</li>
            <li>Designing Engaging Gameplay Mechanics</li>
            <li>Accurate Long Term Record Keeping</li>
            <li>Story Intergration</li>
            <li>Story Flexablity</li>
            <li>Time Management</li>
            <li>People Management</li>
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

export default DungeonsAndDragons
