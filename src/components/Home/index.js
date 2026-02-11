import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  faGitAlt,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import cppLogo from '../../assets/images/c++Logo.png'
import csharpLogo from '../../assets/images/csharpLogo.png'
import gcpLogo from '../../assets/images/gcpLogo.png'
import pythonLogo from '../../assets/images/pythonLogo.png'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [showCube, setShowCube] = useState(false)
  const [spinCube, setSpinCube] = useState(false)
  const fName = ['T', 'J']
  const lName = ['L', 'i', 'e', 'b', 's', 'c', 'h']
  const software = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e']
  const engineering = ['E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']


  useEffect(() => {
      const textTimeOut = setTimeout(() => {
          setLetterClass('text-animate-hover');
      }, 4000)

      const cubeTimeOut = setTimeout(() => {
          setShowCube(true)
      }, 3000)

      const cubeSpinTimeout = setTimeout(() => {
          setSpinCube(true)
      }, 4000)

      return ()=> {
        clearTimeout(textTimeOut);
        clearTimeout(cubeTimeOut);
        clearTimeout(cubeSpinTimeout);
      }
  },[])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m&nbsp;</span>
            <AnimatedLetters letterClass={letterClass} strArray={fName} idx={15}/>&nbsp;
            <AnimatedLetters letterClass={letterClass} strArray={lName} idx={16}/>
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={software} idx={17}/>&nbsp;
            <AnimatedLetters letterClass={letterClass} strArray={engineering} idx={18}/>
          </h1>
          <h2>AI Developer / Backend Developer <br /> 
              Full Stack Developer / Game Developer</h2>
          <Link to="/projects" className="flat-button">
            PROJECTS
          </Link>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>

      <div className={`stage-cube-cont ${showCube ? 'cube-visible' : ''}`}>
        <div className={`cubespinner ${spinCube ? 'spin' : 'paused'}`}>
          <div className="face1">
            <img src={csharpLogo} alt='csharpLogo' />
          </div>
          <div className="face2">
            <img src={pythonLogo} alt='pythonLogo' />
          </div>
          <div className="face3">
            <img src={gcpLogo} alt='gcpLogo' />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <img src={cppLogo} alt='cppLogo' />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
}

export default Home