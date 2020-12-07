import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider'
import ProjectCard from './ProjectCard';




export default function SectionProjects(props) {

	const state = useContext(ThemeContext)
	
	const section3 = {
		backgroundColor: state.theme.secondary,	
	}

	const slant = {
		borderRightColor: state.theme.slantPrimary
	}
	const projects = props.projects;



	return(
	<div className="section-3-bg">
		<div className="section-3" id="projects" style={section3}>
			<div className="section-slant" style={slant}></div>
			<p className="section-3-subsection">PROFESSIONAL PROJECTS</p>
			<div className="projects-professional">	
				{projects.map(project => {
					if(project.professional){									
						return(
						<ProjectCard 
						project={project} 
						key={project.key}/>
					)} else 
					return null;
				})}
			</div>
			<p className="section-3-subsection">HOBBY PROJECTS</p>
			<div className="projects-hobby">
				{projects.map(project => {
					if(!project.professional){
						return (
						<ProjectCard 
						project={project} 
						key={project.key}/>
					)} else 
					return null;
				})}
			</div>
		</div>
	</div>
	)
	
}