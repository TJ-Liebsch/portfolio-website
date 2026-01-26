import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import TJL_Resume from '../../assets/TJ L Resume.pdf'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [showIframe, setShowIframe] = useState(false);
  const fName = ['T', 'J']
  const lName = ['L', 'i', 'e', 'b', 's', 'c', 'h']
  const software = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e']
  const engineering = ['E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']


  useEffect(() => {
      const idTimeOut = setTimeout(() => {
          setLetterClass('text-animate-hover');
          setShowIframe(true);
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
      <div className='resume'>
        {showIframe && (
          <iframe 
            src={TJL_Resume} 
            className="fade-in-iframe"
            style={{ opacity: 0, transition: 'opacity 1s' }} // Set initial opacity
            onLoad={(e) => { e.target.style.opacity = 1; }} // Fade in effect on load
          ></iframe>
        )}
      </div>

      <Loader type="pacman" />
    </>
  );
}

export default Home