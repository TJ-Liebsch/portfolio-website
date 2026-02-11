import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import smcWeb from '../../assets/images/projects/full/smcWeb.png'
// import smcApi from '../../assets/images/projects/smcApi.png'
// import smcData from '../../assets/images/projects/smcData.png'
import portfolio from '../../assets/images/projects/full/portfolio.png'

import quizify from '../../assets/images/projects/ai/quizify.png'
import dynamo from '../../assets/images/projects/ai/dynamo.png'
import worksheet_gen from '../../assets/images/projects/ai/worksheet.png'
import syllabus_gen from '../../assets/images/projects/ai/syllabus.png'

import pacman from '../../assets/images/projects/game/pacman.png'
import undergrad from '../../assets/images/projects/game/undergrad.jpg'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'


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
  {
    src: worksheet_gen,
    alt: 'Worksheet Generator',
    title: 'Worksheet Generator',
    text: 'AI-powered worksheet generation tool.',
    skills: 'Python, NLP, OpenAI',
    link: '/projects/worksheet-generator'
  },
  {
    src: syllabus_gen,
    alt: 'Syllabus Generator',
    title: 'Syllabus Generator',
    text: 'Automated syllabus creation using AI.',
    skills: 'Python, LLMs',
    link: '/projects/syllabus-generator'
  }
]

const gameImages = [
  {
    src: pacman,
    alt: 'Pacman Project',
    title: 'Pacman',
    text: 'A pacman clone that I made at the end of highschool',
    skills: 'Unity, C#, Game Design',
    link: '/projects/pacman'
  },
  {
    src: undergrad,
    alt: 'Applied Undergraduate Research Project',
    title: 'Applied Undergraduate Research Project',
    text: 'A game that teachs the beginner concepts of C++',
    skills: 'Unity, C#, 3D Design',
    link: '/projects/undergrad'
  }
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

  const renderCards = (images, category) => (
    <div className="project-cards">
      {images.map((image, index) => (
        <div
          key={index}
          className={`project-card ${
            selectedImage.category === category &&
            selectedImage.index === index
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
      ))}
    </div>
  )
  
  // const aiImages = [
  //   { src: quizify, alt: 'Quizify', title: 'Mission Quizify', 
  //     text: (
  //       <span>
  //         Description: Part of my training for RadicalX, I generated a multiple choice quiz from a file using AI. 
  //         Here is a Loom video of me presenting how it works&nbsp;
  //         <a href="https://www.loom.com/share/23eba195ca614e16b112813d92fed34e?sid=c3180fa9-dc21-47d2-ba43-6afd79155218" target="_blank" rel="noopener noreferrer">Quizify Presentation</a>
  //       </span>
  //     ), 
  //     skills: 'Skills: Python, Vertex AI, GCP, Git, Public Speaking' },
  //   { src: dynamo, alt: 'Dynamo', title: 'Mission Dynamo', 
  //     text: (
  //       <span>
  //         Description: Part of my training for RadicalX, I created a flashcard generator that takes the trascript of a youtube video 
  //         and summarizes it into convenient flashcards from a file using AI. Here is a Loom video of me presenting how it works&nbsp;
  //         <a href="https://www.loom.com/share/274ff7a7f9ec4aa0bbe10529f8c7f84b?sid=d9870a02-bdfe-43a2-9004-bdfcf9e50670" target="_blank" rel="noopener noreferrer">Dynamo Presentation</a>
  //       </span>
  //     ), 
  //     skills: 'Skills: Python, React, Vertex AI, GCP, Git, Public Speaking' },
  //   { src: worksheet_gen, alt: 'Worksheet Generator', title: 'Worksheet Generator', 
  //     text: (
  //       <span>
  //         Description: In this project, myself and 3 others were tasked with making a worksheet generator for teachers. 
  //         My team and I worked with our higher ups to keep communication on the project clear. Within 2 weeks of starting this project, 
  //         I was promoted to team lead. Which led to me communicating to the higher-ups, and even creating our final pull request
  //       </span>
  //     ), 
  //     skills: 'Skills: Python, Vertex AI, GCP, Git, Docker, Agile Methodology, Leadership' },
  //   { src: syllabus_gen, alt: 'Syllabus Generator', title: 'Syllabus Generator', 
  //     text: (
  //       <span>
  //         Description: In this project, I was chosen as Project Manager and led 4 individuals to make a syllabus generator for teachers. 
  //         I was in very close communication with our higher ups to make sure we would stay on track. 
  //         Alongside officating every meeting, I also helped my team fix bugs, developed the prompt for our AI, and a few other small things. 
  //         At the end of the project, I set up a meeting for me and my team to present our product to the higher-ups.
  //       </span>
  //     ), 
  //     skills: 'Skills: Python, Vertex AI, GCP, Prompt Engineering, Git, Docker, SCRUM, Public Speaking, Leadership' },
  // ];
  
  // const fullStackImages = [
  //   { src: smcWeb, alt: 'SMC Project', title: 'Event Booking Website', 
  //     text: (
  //       <span>
  //         Description: Myself and 3 others were working for Saint Michael Cinema to create a Event Planner Website. 
  //         Equipped with an Admin View and options for all three of their different types of events. 
  //         I mainly was the backend developer for this project, and only developed 2 pages in the final website. 
  //         I connected the database to the website by making my own API requests and posts with C#. 
  //         At the end of this project we presented this our client and lead software engineer to check our requirements.
  //       </span>
  //     ), 
  //     skills: 'Skills: SQL, Azure, API, React, C#, Git, Agile Methodology, Public Speaking' },
  //   { src: portfolio, alt: 'Portfolio Home Page', title: 'This Portfolio', 
  //     text: (
  //       <span>
  //         Description: For this portforlio, I got the idea from a friend and fellow software engineer,&nbsp;
  //         <a href="https://www.linkedin.com/in/rylan-loukusa-036750225/" target="_blank" rel="noopener noreferrer">Rylan Loukusa</a> 
  //         . This was started from a react project tutorial for building portfolio website. It was created by a youtuber named&nbsp;
  //         <a href="https://www.youtube.com/@freecodecamp" target="_blank" rel="noopener noreferrer">freeCodeCamp.org</a>
  //         . This tutorial taught me a lot about the languages I mention below.
  //       </span>
  //     ), 
  //     skills: 'Skills: React, CSS, Git' },
  // ];
  
  // const gameImages = [
  //   { src: pacman, alt: 'Pacman Project', title: 'Pacman', 
  //     text: (
  //       <span>
  //         Description: This was the first project I ever did and I followed a tutorial created by &nbsp;
  //         <a href="https://www.youtube.com/@WeeklycoderDotcom" target="_blank" rel="noopener noreferrer">The Weekly Coder</a>
  //         . Taught me a lot about C# and Unity. It was a perfect first project.
  //       </span>
  //     ),  
  //     skills: 'Skills: C#, Unity' },
  //   { src: undergrad, alt: 'Applied Undergraduate Research Project', title: 'Applied Undergraduate Research Project', 
  //     text: (
  //       <span>
  //         Description: In this project, I worked with 3 other individuals and we created a video game to teach people 
  //         the beginner concepts of C++ because of how many students fail computer science 1. 
  //         We ended up creating level for 3 different C++ concepts. We had to present our progress weekly to our professor. 
  //         At the end of this project, we had to write a research paper in a IEEE format and present our final project.
  //       </span>
  //     ), 
  //     skills: 'Skills: C#, Git, Unity, Agile Methodology, Public Speaking, Leadership' },
  // ];

//   const handleImageClick = (category, index) => {
//     let title = '';
//     let text = '';
//     let skills = '';
//     if (category === 'fullStack') {
//       title = fullStackImages[index].title;
//       text = fullStackImages[index].text;
//       skills = fullStackImages[index].skills;
//     } else if (category === 'ai') {
//       title = aiImages[index].title;
//       text = aiImages[index].text;
//       skills = aiImages[index].skills;
//     } else if (category === 'game') {
//       title = gameImages[index].title;
//       text = gameImages[index].text;
//       skills = gameImages[index].skills;
//     }
//     setSelectedImage({ category, index, title, text, skills });
//   };

// const handleCategoryClick = (category) => {
//   setSelectedImage({ category, index: 0 }); // select first image
// };

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