import { useEffect, useState } from 'react'
import {
  faGitAlt,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import cppLogo from '../../assets/images/c++Logo.png'
import csharpLogo from '../../assets/images/csharpLogo.png'
import gcpLogo from '../../assets/images/gcpLogo.png'
import pythonLogo from '../../assets/images/pythonLogo.png'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
      const idTimeOut = setTimeout(() => {
          setLetterClass('text-animate-hover')
      }, 3000)

      return ()=> clearTimeout(idTimeOut);
  },[])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a new Software Engineering graduate from St. Cloud State University, 
            and I am looking for a job that can fit my skills in 
            AI, Full Stack Development, or Game Development.
          </p>
          <p align="LEFT">
            I have always been interested in all of those fields as I used each of those in my first ever personal project, pacman.
            That project and a few other reasons are the reason why I want to work in the Software Engineering field.
            Which is why I'd like to work for you.
          </p>
          <p>
            While at St. Cloud State University, 
            I have done a series of Professional and Personal Projects 
            that have led me to being proficent with quite a few skills. 
            A few of which you can see on that cube to the right.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
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
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default About