import React, { Component } from 'react';
import './App.css';
import Form from './Form.js'
import spinner from './images/Spinner-react-biggest.gif';

class App extends Component {
	state = {
				fullName: "",
				companyName: "",
				email: "",
				comment: "",
				projects: [],
				skills:[]

	}
	
		
	copyrights = () => {
		return {__html: `&copy; Copyright ${new Date().getFullYear()}, Pawel Krzesinski`}
	}
	
	componentDidMount () {
		fetch('projects.json', {
			headers: {
				"Content-Type" : "application/json",
				"Accept" : "application/json"
			}
		}).then(res => {
			return res.json();
		}).then(data => {
			this.setState({projects: data.projects})
		})
		fetch('skills.json', {
			headers: {
				"Content-Type" : "application/json",
				"Accept" : "application/json"
			}
		}).then(res => {
			return res.json();
		}).then(data => {
			this.setState({skills: data.skills})
		})
	}


	handleSubmit = e => {
		e.preventDefault()
		const spinner = document.querySelector(".spinner");
		const messageBox = document.querySelector('.message-result-container');
		messageBox.style.animation = "fadeIn 0.5s linear";
		setTimeout(() => {	
			messageBox.style.display = "flex";
		}, 0)
		spinner.style.display = "block";
		fetch('http://192.168.1.76:3001/send', {
			method: 'POST',
			body: JSON.stringify(this.state),
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
		}).then(response => {
			spinner.style.display = "none";
			if(!response.ok){
				console.error(response)
				this.renderMessageSentWindow("Message not sent, sorry ! Try Again");
			} else {
				this.resetForm();
				this.renderMessageSentWindow("Message has been sent !");
				console.log("Message Sent")
			}
		})
	}
	handleChange = e => {
		this.setState({[e.target.name]: e.target.value})
	}


	resetForm = () => {
		this.setState({
			fullName: "",
			companyName: "",
			email: "",
			comment: ""
		})
		Array.from(document.querySelectorAll('.inputFields')).forEach( field => {
			field.value = '';
		})
	}
	
	renderMessageSentWindow = (message) => {
		const messageResult = document.querySelector('.message-result');
		const continueClick = document.getElementById('clickToContinue')
		messageResult.innerHTML = message;
		messageResult.style.display = "block";
		continueClick.style.display = "block";
	}

	messageBoxFadeOut = () => {
		const messageBox = document.querySelector('.message-result-container');
		const messageResult = document.querySelector('.message-result');
		const continueClick = document.getElementById('clickToContinue')
		messageBox.style.animation = "fadeOut 0.5s linear";
		setTimeout(() => {
			messageBox.style.display = "none";
			messageResult.innerHTML = "";
			messageResult.style.display = "none"
			continueClick.style.display = "none";
		}, 450)
		
	}


	handleProjects = () => {
		this.state.projects.forEach(project => {
			console.log(project)
		})
	}


	render() {
		const {projects} = this.state;
		const {skills} = this.state;
		console.log(skills)
		return (
			<div className="App" id="top">
				<div className="navbar">
					<a href="./public/index.html" className="logo">K.</a>
					<button className="navbar-home"><a href="#root">HOME</a></button>
					<button className="navbar-about"><a href="#about">ABOUT</a></button>
					<button className="navbar-projects"><a href="#projects">PROJECTS</a></button>
					<button className="navbar-projects"><a href="#skills">SKILLS</a></button>
					<button className="navbar-contact"><a href="#contact">CONTACT</a></button>
				</div>
				<div className="section-1" id="home">
					<div className="filter">
						<h2 className="h2-1"><span>Pawel Krzesinski</span> <br></br>Self-Taught Developer</h2>
						<h2 className="h2-2">Designer</h2>
						<h2 className="h2-3">Programmer</h2>
						<button className="button-aboutMe"><a href="#about">More about me!</a></button>
					</div>
				</div>
				<div className="section-2" id="about">
					<img src="./images/myPhoto2.jpg" alt="" className="myPhoto"/>
					<h2 className="section-2-text-1">Hi ! I am Pawel, I am a proactive and responsible Self-Taught Web Developer.</h2>
					<h2 className="section-2-text-2">I am passionate about coding and always up for a challenge.</h2>
					<h2 className="section-2-text-3">I love problem solving and have great attention to details !</h2>
					<h2 className="section-2-text-4">I deliver beautiful, fully responsive websites for You and Your business!</h2>
					<h2 className="section-2-text-5">If you are interested in working on a project together or need a website, <a href="#contact">GET IN TOUCH</a></h2>
				</div>
				<div className="section-3-bg">
					<div className="section-3" id="projects">
						<p className="section-3-subsection">PROFESSIONAL PROJECTS</p>
						<div className="projects-professional">	
							{projects.map(project => {
								if(project.professional){
									return (
										<div key={project.key}>
											<div className="project-box">
												<h4>{project.title}</h4>
												<a href={project.live} target='_blank' rel='noopener noreferrer'>
													<img src={project.image} alt="" className="project-image" />
												</a>
												<div className="project-image-hover">
													<p className="project-desc">{project.description}</p>
													<div className="project-button-box">
														<a href={project.live} className="project-live">Project live</a>
														<a href={project.github} className="project-sourceCode">Source Code</a>
													</div>	
												</div>
											</div>
										</div>
									)
								}
							})}
						</div>
						<p className="section-3-subsection">HOBBY PROJECTS</p>
						<div className="projects-hobby">
							{projects.map(project => {
							if(!project.professional){
								return (
									<div key={project.key}>
										<div className="project-box">
											<h4>{project.title}</h4>
											<a href={project.live} target='_blank' rel='noopener noreferrer'>
												<img src={project.image} alt="" className="project-image" />
											</a>
											<div className="project-image-hover">
												<p className="project-desc">{project.description}</p>
												<div className="project-button-box">
													<a href={project.live} className="project-live">Project live</a>
													<a href={project.github} className="project-sourceCode">Source Code</a>
												</div>	
											</div>
										</div>
									</div>
								)
							}
						})}
						</div>			
					</div>
				</div>
				<div className="section-4" id="skills"><span>SKILLS:</span>
					<h1>In my programming journey I have developed a set of skills:</h1>
					<div className="skills-gridbox">
						{skills.map(skill => {
							return (
								<div className="skill-box" key={skill.key}>
									<h3 className="skill-title">{skill.skill}</h3>
									<img src={skill.icon} alt="" className="skill-icon"/>
									<p className="skill-desc">{skill.desc}</p>
								</div>
							)
						})}
					</div>
				</div>
				<div className="section-5" id="contact">
					<h3>CONTACT ME</h3>
					<div className="message-result-container" onClick={this.messageBoxFadeOut}>
						<h2 className="message-result"> </h2>
						<img src={spinner} alt="loading..." className='spinner'/>
						<h5 id='clickToContinue'>Click to continue</h5>	
					</div>
					<Form 
					changed={this.handleChange.bind(this)}
					onSubmit={this.handleSubmit.bind(this)}
					method="POST"
					/>
					<button 
					type="submit" 
					id="submit" 
					form="contact-form"
					>Submit</button>
					
				</div>
			<div className="footer">
				<h5 className="email">krzesinskiwebsites@outlook.com</h5>
				<h6 className="mobile">MOBILE: 07402273196</h6>
				<h6 className="location">EXETER, UNITED KINGDOM</h6>
				<span className='copyrights' id='copyrights' dangerouslySetInnerHTML={this.copyrights()}></span>
			</div>
		</div>	
	  );				
}}

export default App;
