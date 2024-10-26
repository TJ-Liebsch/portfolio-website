import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/TJL_Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faComputer } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src = {Logo} alt="logo" />
            {/* <img className="sub-logo" src = {LogoSubtitle} alt="slobodan" /> */}
        </Link>
        <div className='subtitle'>Liebsch</div>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faComputer} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.linkedin.com/in/tj-liebsch/'
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/TJ-Liebsch'
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar