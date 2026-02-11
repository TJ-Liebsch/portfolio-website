import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import TJL_Resume from '../../assets/TJ L Resume.pdf'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
      const idTimeOut = setTimeout(() => {
          setLetterClass('text-animate-hover')
          setShowIframe(true);
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
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default About