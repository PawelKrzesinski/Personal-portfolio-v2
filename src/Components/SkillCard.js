import React from 'react';

const skillCard = (props) => {
	return(
		<div className="flip-card" key={props.skill.key}>
			<div className="flip-card-inner">
				<div className="skill-box"  style={props.skillCardStyles}>
					<h3 className="skill-title">{props.skill.skill}</h3>
					<img src={props.skill.icon} alt="" className="skill-icon"/>
				</div>
				<div className="flip-card-back" style={props.skillCardStyles}><p className="skill-desc">{props.skill.desc}</p></div>
			</div>
		</div>
	)
}

export default skillCard;