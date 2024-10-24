import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import Logo from './Logo'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const fName = ['T', 'J']
  const lName = ['L', 'i', 'e', 'b', 's', 'c', 'h']
  const se = [
    'S', 'o', 'f', 't', 'w', 'a', 'r', 'e', 
    ' ', 
    'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', 'i', 'n', 'g'
  ];


  useEffect(() => {
      const idTimeOut = setTimeout(() => {
          setLetterClass('text-animate-hover')
      }, 4000)

      return ()=> clearTimeout(idTimeOut);
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
            <AnimatedLetters letterClass={letterClass} strArray={se} idx={17}/>
          </h1>
          <h2>AI Developer / Backend Developer <br /> 
              Database Expert / Game Developer</h2>
          <Link to="/projects" className="flat-button">
            PROJECTS
          </Link>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  );
}

export default Home