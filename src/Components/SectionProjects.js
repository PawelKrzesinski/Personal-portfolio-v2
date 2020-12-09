import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider'
import ProjectCard from './ProjectCard';




export default function SectionProjects(props) {
	const projects = props.projects;
	const state = useContext(ThemeContext)
	
	const section3 = {
		backgroundColor: state.theme.secondary,
		color: state.theme.text
	}

	const slant = {
		borderRightColor: state.theme.slantSecondary,
		borderTopColor: state.theme.slantPrimary
	}
	
	const projectStyle = {
		backgroundColor: state.theme.primary,
		color: state.theme.text,
		boxShadow: state.theme.BoxShadow
	}
	const projectLinks = {
		backgroundColor: state.theme.LinksColorBg,
		color: state.theme.LinksText,
		borderColor: state.theme.LinksColorBorder
	}

	return(
		<div className="section-3" id="projects" style={section3}>
			<div className="section-slant" style={slant}></div>
			<p className="section-3-subsection">PROFESSIONAL PROJECTS</p>
			<div className="projects-professional">	
				{projects.map(project => {
					if(project.professional){									
						return(
						<ProjectCard 
						project={project} 
						key={project.key}
						projectStyle={projectStyle}
						projectLinks={projectLinks}/>
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
						key={project.key}
						projectStyle={projectStyle}
						projectLinks={projectLinks}/>
					)} else 
					return null;
				})}
			</div>
		</div>
	)
}