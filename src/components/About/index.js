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
            I'm a new Software Engineering graduate from St. Cloud State University. 
            I am looking for a job that can fit my skills in 
            AI, Full Stack Development, or Game Development.
          </p>
          <p>
            I have always been interested in those fields as I used them in my first ever personal project, a Pacman Clone.
            That project, and many others, have taught me software development skills over the past 6 years.
            However, I'd like to use my skills to help your company and if that interests you, feel free to reach out.
          </p>
          <p>
            After college, I went to work for PS Publishing as an AI Engineer.
            While there I developed an AI Audiobook Generator using an open-source AI model.
            As the project taught me a lot about AI development, I wanted to test my skills.
            I then sought out my AWS Certified AI Practitioner Certificate and achieved that goal on January 9th, 2026. 
          </p>
          <p>
            Now I am taking my degree, certificate, and experience to develop software to further advance the industry.
          </p>
        </div>

        <div className='resume'>
          {showIframe && (
            <iframe 
              title="resume"
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