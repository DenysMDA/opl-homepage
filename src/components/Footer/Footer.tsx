import './footer.scss'
import { FaLinkedin, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';


const Footer = () => {

    return (
        <div className='footer'>
            <div className='footer-socialmedia'>
                <p>Follow Us</p>
                {/* <FaLinkedin className='foote-icon' />
                <FaFacebook className='foote-icon' />
                <FaYoutube className='foote-icon' />
                <FaTwitter className='foote-icon' /> */}

                <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='footer-icon' />
                </a>
                <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className='footer-icon' />
                </a>
                <a href="https://www.youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className='footer-icon' />
                </a>
                <a href="https://www.twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className='footer-icon' />
                </a>
            </div>

            <div className='footer-info'>
                <nav className='footer-column'>
                    <p>Grow With Us</p>
                    <ul>
                        <li><a href="#" aria-label="Microsoft Action Pack">Microsoft Action Pack</a></li>
                        <li><a href="#" aria-label="ISV growth">ISV growth</a></li>
                        <li><a href="#" aria-label="Cloud Solution Provider program">Cloud Solution Provider program</a></li>
                        <li><a href="#" aria-label="Commercial marketplace">Commercial marketplace</a></li>
                        <li><a href="#" aria-label="Solutions Partner designations">Solutions Partner designations</a></li>
                    </ul>
                </nav>

                <nav className='footer-column'>
                    <p>Resources</p>
                    <ul>
                        <li><a href="#" aria-label="Training">Training</a></li>
                        <li><a href="#" aria-label="MCAPS Start for Partners">MCAPS Start for Partners</a></li>
                        <li><a href="#" aria-label="Microsoft Learn">Microsoft Learn</a></li>
                        <li><a href="#" aria-label="Events">Events</a></li>
                        <li><a href="#" aria-label="Microsoft Partner Community">Microsoft Partner Community</a></li>
                        <li><a href="#" aria-label="Microsoft Partner blog">Microsoft Partner blog</a></li>
                    </ul>
                </nav>

                <nav className='footer-column'>
                    <p>Support</p>
                    <ul>
                        <li><a href="#" aria-label="Get support">Get support</a></li>
                        <li><a href="#" aria-label="Cloud Solution Provider program support">Cloud Solution Provider program</a></li>
                        <li><a href="#" aria-label="Commercial marketplace support">Commercial marketplace</a></li>
                        <li><a href="#" aria-label="Contact us">Contact us</a></li>
                        <li><a href="#" aria-label="Privacy and cookies">Privacy and cookies</a></li>
                        <li><a href="#" aria-label="Terms of use">Terms of use</a></li>
                    </ul>
                </nav>
            </div>

            <div className='footer-botton-wrapper'>
                <div className='footer-botton'>
                    <p>&copy; 2024 Microsoft. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer