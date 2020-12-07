import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider'
import SkillCard from './SkillCard.js';




export default function SectionSkills(props) {

	const state = useContext(ThemeContext)
	
	const section4 = {
		backgroundColor: state.theme.primary,	
		color: state.theme.text
	}

	const slant = {
		borderRightColor: state.theme.slantPrimary
	}
	const skills = props.skills;



	return(
		<div className="section-4" id="skills" style={section4}><span>SKILLS:</span>
			<div className="section-slant" style={slant}></div>
			<h1>In my programming journey, I have developed a set of skills:</h1>
			<div className="skills-gridbox">
			{skills.map(skill => {
				return(
					<SkillCard 
					skill={skill} 
					key={skill.key}/>
				)
			})}
			</div>
		</div>
	)
}
















