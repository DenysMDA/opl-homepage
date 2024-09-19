import './footer.scss'
import { FaLinkedin, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';


const Footer = () => {

  return (
    <div className='footer'>
        <div className='footer-socialmedia'>
            <p>Follow Us</p>
            <FaLinkedin  className='foote-icon'/>
            <FaFacebook  className='foote-icon'/>
            <FaYoutube  className='foote-icon'/>
            <FaTwitter  className='foote-icon'/>
        </div>

        <div className='footer-info'>
            <div className='footer-collumn'>
                <p>Grow With Us</p>
                <ul>
                    <li><a href="#">Microsoft Action Pack</a></li>    
                    <li><a href="#">ISV growth</a></li>    
                    <li><a href="#">Cloud Solution Provider program</a></li>    
                    <li><a href="#">Commercial marketplace</a></li>    
                    <li><a href="#">Solutions Partner designations</a></li>    

                </ul> 
            </div>
            <div className='footer-collumn'>
                <p>Resources</p>
                <ul>
                    <li><a href="#">Training</a></li>    
                    <li><a href="#">MCAPS Start for Partners</a></li>    
                    <li><a href="#">Microsoft Learn</a></li>    
                    <li><a href="#">Events</a></li>    
                    <li><a href="#">Microsoft Partner Community</a></li>    
                    <li><a href="#">Microsoft Partner blog</a></li>  

                </ul> 
            </div>
            <div className='footer-collumn'>
                <p>Support</p>
                <ul>
                    <li><a href="#">Get support</a></li>    
                    <li><a href="#">Cloud Solution Provider program</a></li>    
                    <li><a href="#">Commercial marketplace</a></li>    
                    <li><a href="#">Contact us</a></li>    
                    <li><a href="#">Privacy and cookies</a></li>
                    <li><a href="#">Terms of use</a></li>
                </ul> 
            </div>

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