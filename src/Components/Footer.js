import React from 'react';
import ToggleTheme from './ToggleTheme'

const footer = () =>{
	let copyrights = () => {
		return {__html: `&copy; Copyright ${new Date().getFullYear()}, Pawel Krzesinski`}
	}
	return(
		<div className="footer">
				<div className="icons-box">
					<a href="https://www.linkedin.com/in/pawel-krzesinski-7a4a581a1/" className="social-media-link" target="_blank" rel="noopener noreferrer" >
						<img src="https://img.icons8.com/nolan/64/linkedin.png" className="icons" alt="linkedin icon"/>
					</a>
					<a href="https://github.com/PawelKrzesinski" className="social-media-link" target="_blank" rel="noopener noreferrer" >
						<img src="https://img.icons8.com/nolan/64/github.png" className="icons" alt="github icon"/>
					</a>
					<div className="theme-switch-box">
						<ToggleTheme />
						<p>Dark/Light</p>
					</div>
				</div>
				<h5 className="email">krzesinskiwebsites@outlook.com</h5>
				<h6 className="mobile">MOBILE: 07402273196</h6>
				<h6 className="location">EXETER, UNITED KINGDOM</h6>
				<span className='copyrights' id='copyrights' dangerouslySetInnerHTML={copyrights()}></span>
		</div>
	)
}

export default footer;