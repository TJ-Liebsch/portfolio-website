import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../../../AnimatedLetters'
import './index.scss'

const Dynamo = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <div className="container project-page">
        <div className="project-hero">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...'Dungeon Puzzle Poker']}
              idx={15}
            />
          </h1>

          <div className="project-content">
            <div className="project-image">
              {/* <img
                src={require('../../assets/dungeon-puzzle-poker.png')}
                alt="Dungeon Puzzle Poker Gameplay"
              /> */}
            </div>

            <div className="project-description">
              <h2>About Dungeon Puzzle Poker</h2>
              <p>
                Dungeon Puzzle Poker is a unique blend of strategy, roguelike progression,
                and card-based combat, where every enemy is a poker hand and every battle
                is a puzzle. Each dungeon floor is procedurally generated, ensuring every
                run feels fresh and unpredictable.
              </p>
              <p>
                Your goal is to clear the grid by crafting your own poker hands to outmatch
                enemy hands. Choose from a variety of attack shapes, rotate them to hit
                your targets, and strategically place your cards to maximize multipliers.
              </p>
              <p>
                As you progress, spend your gold wisely to unlock new shapes and cast
                powerful spells that alter suits, discard cards, or otherwise change the
                tide of battle. Every three dungeon levels, you'll recover before diving
                deeper into increasingly difficult challenges.
              </p>

              <a
                className="play-button"
                href="https://your-game-link-here.com"
                target="_blank"
                rel="noreferrer"
              >
                ▶ Play Now
              </a>
            </div>
          </div>
        </div>

        <div className="tech-section">
          <h2>Technologies & Skills</h2>
          <ul className="tech-list">
            <li>Unreal Engine 5</li>
            <li>Blueprint Visual Scripting</li>
            <li>Procedural Level Generation</li>
            <li>Card Hand Evaluation Logic</li>
            <li>Turn-Based Combat Systems</li>
            <li>Grid-Based Gameplay Systems</li>
            <li>Custom Attack Pattern Rotation & Placement</li>
            <li>Spell & Ability Systems</li>
            <li>Resource Management Systems</li>
            <li>Custom Widgets (UI)</li>
            <li>HUD Design</li>
            <li>Difficulty Scaling & Replayability</li>
          </ul>
        </div>

        <Link to="/projects" className="back-link">
          ← Back to Projects
        </Link>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Dynamo
