import React, {useContext} from 'react';
import {ThemeContext} from './ThemeProvider'
import ToggleTheme from './ToggleTheme'






function NavbarBottom(){
	
	const state = useContext(ThemeContext)
	
	const navbarBottom = {
		backgroundColor: state.theme.primary,	
	}
	return (
			<div className="icons-box" style={navbarBottom}>
				<a href="https://www.linkedin.com/in/pawel-krzesinski-7a4a581a1/" className="social-media-link" target="_blank" rel="noopener noreferrer" >
					<img src="https://img.icons8.com/nolan/64/linkedin.png" className="icons" alt="linkedin icon"/>
				</a>
				<a href="https://github.com/PawelKrzesinski" className="social-media-link" target="_blank" rel="noopener noreferrer" >
					<img src="https://img.icons8.com/nolan/64/github.png" className="icons" alt="github icon"/>
				</a>
				<div className="theme-switch-box">
					<ToggleTheme 
					// setTheme={props.setTheme}
					/>
				<p>Dark/Light</p>
			</div>
		
	</div>
	)
}


export default NavbarBottom;