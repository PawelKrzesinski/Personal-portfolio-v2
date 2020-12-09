import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider'


export default function Navbar(){
	const state = useContext(ThemeContext)

	const navbar = {
		backgroundColor: state.theme.navbar,	
	}
	const a = {
		color: state.theme.text,
		borderColor: state.theme.border
	}
	
	return (
		<div className="navbar" style={navbar}>
			<a href="./public/index.html" className="logo" style={a}>K.</a>
			<a href="#root" style={a}>HOME</a>
			<a href="#myphoto" style={a}>ABOUT</a>
			<a href="#projects" style={a}>PROJECTS</a>
			<a href="#skills" style={a}>SKILLS</a>
			<a href="#contact" style={a}>CONTACT</a>
		</div>
	)
}


