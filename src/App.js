import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Layout from './components/Layout'

import Dynamo from './components/Projects/AI/Dynamo'
import Quizify from './components/Projects/AI/Quizify'

// import SyllabusGenerator from './components/Projects/AI/SyllabusGenerator'
// import WorksheetGenerator from './components/Projects/AI/WorksheetGenerator'

// import Portfolio from './components/Projects/FullStack/Portfolio'
// import SMC from './components/Projects/FullStack/SMC'

// import Pacman from './components/Projects/GameDevelopment/Pacman'
// import Undergraduate from './components/Projects/GameDevelopment/Undergraduate'


import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/projects/ai/dynamo" element={<Dynamo />} />
          <Route path="/projects/ai/quizify" element={<Quizify />} />
          {/* <Route path="/projects/ai/syllabusGenerator" element={<SyllabusGenerator />} />
          <Route path="/projects/ai/worksheetGenerator" element={<WorksheetGenerator />} />

          <Route path="/projects/fullStack/portfolio" element={<Portfolio />} />
          <Route path="/projects/fullStack/smc" element={<SMC />} />

          <Route path="/projects/gameDevelopment/pacman" element={<Pacman />} />
          <Route path="/projects/gameDevelopment/undergraduate" element={<Undergraduate />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App