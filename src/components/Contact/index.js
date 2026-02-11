import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import LinkedInPage from '../../assets/images/LinkedIn Page.png'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [showImg, setShowImg] = useState(false);
  const form = useRef()

  useEffect(() => {
      const idTimeOut = setTimeout(() => {
          setLetterClass('text-animate-hover')
          setShowImg(true);
      }, 3000)

      return ()=> clearTimeout(idTimeOut);
  },[])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <div className='contact'>
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              I am interested in a junior developer position in AI, Full Stack development, or Game development. 
              However, I might be open to other opportunities 
              so don't be afraid to reach out. 
            </p>
            <div className='contact-links'>
              <p>  
                You can reach out to me via:
              </p>
                <ul>
                  <li>My phone number: 605-270-3534</li>
                  <li>My email: TJLiebsch@outlook.com</li>
                  <li>Or my LinkedIn page in the bottom left</li>
                </ul>
              <p> 
                I am available 10-6 thoughout the week, and 
                I will get back to you sometime the same week.
              </p>
            </div>
          </div>
        </div>
        
        <div className="linkedin-page">
          {showImg && (
            <img 
              src={LinkedInPage} 
              className="fade-in-img"
              alt="LinkedIn Page"
              style={{ opacity: 0, transition: 'opacity 1s' }} // Set initial opacity
              onLoad={(e) => { e.target.style.opacity = 1; }} // Fade in effect on load
            ></img>
          )}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Contact