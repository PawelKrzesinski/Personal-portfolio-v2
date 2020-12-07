import React from 'react';

const projectCard = (props) => {
	
	return(
		<div key={props.project.key}>
			<div className="project-box" style={props.projectStyle}>
			<h4>{props.project.title}</h4>
			<a href={props.project.live} target='_blank' rel='noopener noreferrer'>
				<img src={props.project.image} alt="" className="project-image" />
			</a>
				<div className="project-image-hover">
					<p className="project-desc">{props.project.description}</p>
						<div className="project-button-box">
							<a href={props.project.live} className="project-live" style={props.projectLinks}>Project live</a>
							<a href={props.project.github} className="project-sourceCode" style={props.projectLinks}>Source Code</a>
					</div>	
				</div>
			</div>
		</div>
	)
}

export default projectCard;