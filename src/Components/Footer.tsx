import React from 'react'
import '../CSS/Footer.css'
import github from '../Images/github-icon.png'
import linkedin from '../Images/linkedin-icon.png'

const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <p className='created-by'>Created by:</p>
            <div className='info-section'>
                <h2 className='name'>Jordan Williamson</h2>
                    <img className='github' src={github} alt='GitHub-logo'/>
                    <a href='https://github.com/JWill06' className='github-link'>@GitHub</a>
                    <img className='linkedin' src={linkedin} alt='LinkedIn-Logo'/>
                    <a href='https://www.linkedin.com/in/jordan-williamson-a079b3271' className='linkedin-link'> @LinkedIn</a>
                <h2 className='name'>Kim Ewing</h2>
                    <img className='github' src={github} alt='GitHub-logo'/>
                    <a href= 'https://github.com/kiewi16' className='github-link'>@GitHub</a>
                    <img className='linkedin' src={linkedin} alt='LinkedIn-Logo'/>
                    <a href='https://www.linkedin.com/kimberlypekar' className='linkedin-link'> @LinkedIn</a>
                <h2 className='name'>Kyle Boomer</h2>
                    <img className='github' src={github} alt='GitHub-logo'/>
                    <a href='https://github.com/kylemboomer' className='github-link'>@GitHub</a>
                    <img className='linkedin' src={linkedin} alt='LinkedIn-Logo'/>
                    <a href='https://www.linkedin.com/in/kylemboomer/' className='linkedin-link'> @LinkedIn</a>
                <div className='seong-kang'>
                    <h2 className='name'>Seong Kang</h2>
                        <img className='github' src={github} alt='GitHub-logo'/>
                        <a href='https://github.com/Sanghoro' className='github-link'>@GitHub</a>
                        <img className='linkedin' src={linkedin} alt='LinkedIn-Logo'/>
                        <a href='https://www.linkedin.com/in/seong-kang/' className='linkedin-link'> @LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer