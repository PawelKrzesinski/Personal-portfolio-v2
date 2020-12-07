
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";



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
	const boxShadow = {
		boxShadow: state.theme.BoxShadow
	}
	return (
		<div className="section-2" id="about" style={section2}>
			<div className="section-slant" style={slant}></div>
			<img src="./images/myPhoto2.jpg" alt="" className="myPhoto" style={boxShadow}/>
			<ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' duration='2' delay='2'>
			<h2 className="section-2-text-1" style={text}>
				Hi ! I am Pawel, a proactive and responsible Self-Taught Web Developer.
				I am passionate about coding and always up for a challenge.
			</h2>
			</ScrollAnimation>
			<ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' duration='2' delay='2'>
			<h2 className="section-2-text-2" style={text}>
				I love problem-solving, and I am excited every time I start a new project.
			</h2>
			</ScrollAnimation>
			<ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' duration='2' delay='2'>			
			<h2 className="section-2-text-3" style={text}>
				I deliver beautiful, fully responsive websites for You and Your business!
			If you are interested in working on a project together or need a website, <a href="#contact">GET IN TOUCH</a>
			</h2>
			</ScrollAnimation>
		</div>
	)
}