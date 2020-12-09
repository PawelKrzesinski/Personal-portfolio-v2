import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider'
import { MotionAnimate } from 'react-motion-animate'



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
		textShadow: state.theme.textShadow,
		boxShadow: state.theme.BoxShadow,
		backgroundColor: state.theme.secondary
	}
	const boxShadow = {
		boxShadow: state.theme.BoxShadow
	}
	const textColor = {
		color: state.theme.text
	}
	return (
		<div className="section-2" id="about" style={section2}>
			<div className="section-slant" style={slant}></div>
			<img src="./images/myPhoto2.jpg" alt="" className="myPhoto" id="myphoto" style={boxShadow}/>
			<div className="text-container" id="info">
				<MotionAnimate
				animation="fadeInUp"
				reset={true}
				speed={0.5}
				ease="circIn" >
				<h2 className="section-2-text-1" style={text}>
					Hi! I am Pawel, a proactive and responsible Self-Taught Web Developer.<br></br>
					I am passionate about coding and always up for a challenge.
				</h2>
				</MotionAnimate>
				<MotionAnimate
				animation="fadeInUp"
				reset={true}
				speed={0.5}
				delay={0.3}
				ease="circIn" >
				<h2 className="section-2-text-2" style={text}>
					I love problem-solving, and I am excited every time I start a new project.<br></br>
					I deliver beautiful, fully responsive websites for You and Your business!
				</h2>		
				</MotionAnimate>
				<MotionAnimate
				animation="fadeInUp"
				reset={true}
				speed={0.5}
				delay={0.6}
				ease="circIn" >
				<h2 className="section-2-text-3" style={text}>
					I am available for a full-time job or a freelance project.
					If you are interested in working together or need a website, <a href="#contact" style={textColor}>GET IN TOUCH</a>
				</h2>
				</MotionAnimate>
			</div>
		</div>
	)
}