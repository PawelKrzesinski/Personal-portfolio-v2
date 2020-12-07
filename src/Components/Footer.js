import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';


export default function Footer(){
	const state = useContext(ThemeContext)

	let copyrights = () => {
		return {__html: `&copy; Copyright ${new Date().getFullYear()}, Pawel Krzesinski`}
	}
	const footer = { 
		backgroundColor: state.theme.primary
	}

	return(
		<div className="footer" style={	footer }>
			<h5 className="email">krzesinskiwebsites@outlook.com</h5>
			<h6 className="mobile">MOBILE: 07402273196</h6>
			<h6 className="location">EXETER, UNITED KINGDOM</h6>
			<span className='copyrights' id='copyrights' dangerouslySetInnerHTML={copyrights()}></span>
		</div>
	)
}
