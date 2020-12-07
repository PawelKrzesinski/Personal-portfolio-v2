
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider'

export default function SectionAbout(){
	const state = useContext(ThemeContext)

	const section2 = {
		backgroundColor: state.theme.primary
	}
	const slant = {
		borderRightColor: state.theme.slantPrimary
	}
	const text = {
		color: state.theme.text,
		textShadow: state.theme.textShadow
	}
	return (
		<div className="section-2" id="about" style={section2}>
			<div className="section-slant" style={slant}></div>
			<img src="./images/myPhoto2.jpg" alt="" className="myPhoto"/>
			<h2 className="section-2-text-1" style={text}>Hi ! I am Pawel, a proactive and responsible Self-Taught Web Developer.</h2>
			<h2 className="section-2-text-2" style={text}>I am passionate about coding and always up for a challenge.</h2>
			<h2 className="section-2-text-3" style={text}>I love problem-solving and have great attention to detail.</h2>
			<h2 className="section-2-text-4" style={text}>I deliver beautiful, fully responsive websites for You and Your business!</h2>
			<h2 className="section-2-text-5" style={text}>If you are interested in working on a project together or need a website, <a href="#contact">GET IN TOUCH</a></h2>
		</div>
	)
}