import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from 'react-router-dom'
import smcWeb from '../../assets/images/projects/full/smcWeb.png'
// import smcApi from '../../assets/images/projects/smcApi.png'
// import smcData from '../../assets/images/projects/smcData.png'
import portfolio from '../../assets/images/projects/full/portfolio.png'

import quizify from '../../assets/images/projects/ai/quizify.png'
import dynamo from '../../assets/images/projects/ai/dynamo.png'
// import worksheet_gen from '../../assets/images/projects/ai/worksheet.png'
import syllabus_gen from '../../assets/images/projects/ai/syllabus.png'
import audiobook_gen from '../../assets/images/projects/ai/justSpectograph.png'


import pacman from '../../assets/images/projects/game/pacman.png'
import undergrad from '../../assets/images/projects/game/undergrad.jpg'
import aiGame from '../../assets/images/projects/game/aiGameOpening.png'
import cubey from '../../assets/images/projects/game/Cubey2.png'
import gameDevClass from '../../assets/images/projects/game/Class game bowling.png'
import dnd from '../../assets/images/projects/game/D&D world map.jpg'


import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';


const aiImages = [
    {
    src: quizify,
    alt: 'Quizify',
    title: 'Quizify',
    text: 'Full-stack quiz platform with user auth and analytics.',
    skills: 'React, Node.js, MongoDB',
    link: 'AI/Quizify'
  },
  {
    src: dynamo,
    alt: 'Dynamo',
    title: 'Dynamo',
    text: 'Workflow automation dashboard.',
    skills: 'React, Express, PostgreSQL',
    link: 'AI/Dynamo'
  },
  // {
  //   src: worksheet_gen,
  //   alt: 'Worksheet Generator',
  //   title: 'Worksheet Generator',
  //   text: 'AI-powered worksheet generation tool.',
  //   skills: 'Python, NLP, OpenAI',
  //   link: '/projects/worksheet-generator'
  // },
  {
    src: syllabus_gen,
    alt: 'Syllabus Generator',
    title: 'Syllabus Generator',
    text: 'Automated syllabus creation using AI.',
    skills: 'Python, LLMs',
    link: 'AI/SyllabusGenerator'
  },
  {
    src: audiobook_gen,
    alt: 'Audiobook Generator',
    title: 'Audiobook Generator',
    text: 'Audiobook Generator using Open Source AI.',
    skills: 'Python, LLMs, Open Source Technologies',
    link: 'AI/Audiobook'
  },
  {
    src: aiGame,
    alt: 'AI Game Development Project',
    title: 'AI Game Development Project',
    text: "A truly limitless game thanks to AI's flexibility",
    skills: 'Unity, C#, AI Development',
    link: 'GameDevelopment/AIGame'
  },
]

const gameImages = [
  {
    src: pacman,
    alt: 'Pacman Project',
    title: 'Pacman',
    text: 'A pacman clone that I made at the end of highschool',
    skills: 'Unity, C#, Game Design',
    link: 'GameDevelopment/Pacman'
  },
  {
    src: undergrad,
    alt: 'Applied Undergraduate Research Project',
    title: 'Applied Undergraduate Research Project',
    text: 'A game that teachs the beginner concepts of C++',
    skills: 'Unity, C#, 3D Design',
    link: 'GameDevelopment/Undergraduate'
  },
  {
    src: aiGame,
    alt: 'AI Game Development Project',
    title: 'AI Game Development Project',
    text: "A truly limitless game thanks to AI's flexibility",
    skills: 'Unity, C#, AI Development',
    link: 'GameDevelopment/AIGame'
  },
  {
    src: dnd,
    alt: 'Dungeons and Dragons',
    title: 'Dungeons and Dragons',
    text: "Built detailed worlds through creative storytelling",
    skills: 'Story Telling, Problem Solving',
    link: 'GameDevelopment/D&D'
  },
  {
    src: gameDevClass,
    alt: 'All Game Dev Class Games',
    title: 'All Game Dev Class Games',
    text: "The culmination of my projects in my game development class",
    skills: 'Unity, C#, Menu Systems',
    link: 'GameDevelopment/GameDevClass'
  },
  {
    src: cubey,
    alt: 'Cubey Combination',
    title: 'Cubey Combination',
    text: "The result of my first ever Game Jam",
    skills: 'Unity, C#, 2D Movement',
    link: 'GameDevelopment/Cubey'
  },
]

const fullStackImages = [
  {
    src: smcWeb,
    alt: 'SMC Project',
    title: 'Event Booking Website',
    text: 'Developed API calls and database alongside 3 frontend developers',
    skills: 'React, Node.js, MongoDB',
    link: '/projects/smc'
  },
  {
    src: portfolio,
    alt: 'Portfolio Home Page',
    title: 'This Portfolio',
    text: 'A React.js webpage that was published with github pages',
    skills: 'React, Express, PostgreSQL',
    link: '/projects/portfolio'
  }
]

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("ai"); // null = show all
  const [letterClass, setLetterClass] = useState('text-animate');
  const [selectedImage, setSelectedImage] = useState({ 
    category: null, 
    index: null, 
    title: '', 
    text: '', 
    skills: '' 
  });

  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(idTimeOut);
  }, []);

    const handleImageClick = (category, index) => {
    let project

    if (category === 'ai') project = aiImages[index]
    if (category === 'game') project = gameImages[index]
    if (category === 'fullStack') project = fullStackImages[index]

    setSelectedImage({
      category,
      index,
      title: project.title,
      text: project.text,
      skills: project.skills
    })
  }

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    handleImageClick(category, 0); // still select first project
  };

  const renderCards = (images, category) => {
    const paddedImages = [...images];

    // Add placeholders until we have 3 cause otherwise it doesn't fill the page
    while (paddedImages.length < 3) {
      paddedImages.push(null);
    }

    const hasMultipleSlides = images.length >= 3;
    
    return(
      <div className='project-cards'>
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation={hasMultipleSlides}
          loop={hasMultipleSlides} 
          spaceBetween={30}
          autoplay={
            hasMultipleSlides
              ? { 
                delay: 7000, 
                disableOnInteraction: false, 
                pauseOnMouseEnter: true
              } : false
          }
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {paddedImages.map((image, index) => (
            <SwiperSlide key={`${category}-${index}`}>
              {image ? (
                <div
                  className={`project-card ${
                    selectedImage?.category === category &&
                    selectedImage?.index === index
                      ? 'selected'
                      : ''
                  }`}
                  onClick={() => handleImageClick(category, index)}
                >
                  <div className="project-card-image">
                    <img src={image.src} alt={image.alt} />
                  </div>

                  <div className="project-card-content">
                    <h3>{image.title}</h3>
                    <p>{image.text}</p>

                    <Link to={image.link} className="project-card-link">
                      Learn More →
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="project-card placeholder" />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <div className="projects-page">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                idx={15}
              />
            </h1>
            <div className='projects'>

              <div className="category-buttons">
                <div className="individual-buttons">
                  <button
                    className={`project-category-header ${
                      activeCategory === 'ai' ? 'active' : ''
                    }`}
                    onClick={() => handleCategoryClick('ai')}
                  >
                    <h2>AI Engineering</h2>
                  </button>
                </div>
                
                <div className="individual-buttons">
                  <button
                    className={`project-category-header ${
                      activeCategory === 'game' ? 'active' : ''
                    }`}
                    onClick={() => handleCategoryClick('game')}
                  >
                    <h2>Game Development</h2>
                  </button>
                </div>

                <div className="individual-buttons">
                  <button
                    className={`project-category-header ${
                      activeCategory === 'fullStack' ? 'active' : ''
                    }`}
                    onClick={() => handleCategoryClick('fullStack')}
                  >
                    <h2>Full Stack Development</h2>
                  </button>
                </div>
              </div>

              {/* AI Engineering */}
              {(activeCategory === null || activeCategory === 'ai') &&
                renderCards(aiImages, 'ai')}

              {/* Game Development */}
              {(activeCategory === null || activeCategory === 'game') &&
                renderCards(gameImages, 'game')}

              {/* Full Stack Development */}
              {(activeCategory === null || activeCategory === 'fullStack') &&
                renderCards(fullStackImages, 'fullStack')}
              
            </div>
            {/* 
            Before, that would render the image title, text, and skills below all the images. Not that way anymore

            <h3 className='title'>{selectedImage.title || 'Click on an image to get a description of it'}</h3>
            <h3 className='text'>{selectedImage.text || ''}</h3>
            <h3 className='skills'>{selectedImage.skills || ''}</h3> */}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Projects;