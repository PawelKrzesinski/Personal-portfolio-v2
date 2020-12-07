import React, { Component } from 'react';
import { ThemeContextProvider } from './Components/ThemeProvider'

import './App.css';
import './Css/Form.css';
import './Css/SkillCard.css';
import './Css/ProjectCard.css';
import './Css/Animations.css';
import './Css/ThemeSwitch.css'
import './Css/Navbar.css';

import Form from './Components/Form.js';
import SkillCard from './Components/SkillCard.js';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import SectionAbout from './Components/SectionAbout'
import SectionHome from './Components/SectionHome';
import SectionProjects from './Components/SectionProjects'
import ToggleTheme from './Components/ToggleTheme'
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
	handleChange = e => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleSubmit = e => {
		const loading = document.querySelector(".spinner");
		loading.style.display = "block";
		e.preventDefault()
		fetch('http://192.168.1.76:3001/send', {
			method: 'POST',
			body: JSON.stringify(this.state),
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
		}).then(response => {
			loading.style.display = "none";
			if(!response.ok){
				console.error(response)
				console.log("Message not sent")
				this.setState({wasMsgSent: "Something went wrong. Try again or contact me through email"})
			} else {
				this.resetForm();
				console.log("Message sent")
				this.setState({wasMsgSent: "Message has been sent!"})
			}
		})
	}

	resetForm = () => {
		this.setState({
			fullName: "",
			companyName: "",
			email: "",
			comment: "",
		})
		Array.from(document.querySelectorAll('.inputFields')).forEach( field => {
			field.value = '';
		})
	}
	
	render() {
		const {wasMsgSent} = this.state;
		const {projects} = this.state;
		const {skills} = this.state;
		return (
			<ThemeContextProvider>
			<div className="App" id="top">
				<Navbar />
				<SectionHome />
				<SectionAbout />
				<SectionProjects 
				projects={projects}/>
				
				<div className="section-4" id="skills"><span>SKILLS:</span>
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
				<div className="section-5" id="contact">
					<h3>CONTACT ME</h3>
					<Form 
					changed={this.handleChange.bind(this)}
					onSubmit={this.handleSubmit.bind(this)}
					method="POST"
					/>
					<img src={spinner} alt="Loading..." className="spinner"/>
					<button 
					type="submit" 
					id="submit" 
					form="contact-form"
					>Submit</button>
					<p>{wasMsgSent}</p>
				</div>
				<div className="icons-box">
					<a href="https://www.linkedin.com/in/pawel-krzesinski-7a4a581a1/" className="social-media-link" target="_blank" rel="noopener noreferrer" >
						<img src="https://img.icons8.com/nolan/64/linkedin.png" className="icons" alt="linkedin icon"/>
					</a>
					<a href="https://github.com/PawelKrzesinski" className="social-media-link" target="_blank" rel="noopener noreferrer" >
						<img src="https://img.icons8.com/nolan/64/github.png" className="icons" alt="github icon"/>
					</a>
					<div className="theme-switch-box">
						<ToggleTheme />
						<p>Dark/Light</p>
					</div>
				</div>
				<Footer />
		</div>
		</ThemeContextProvider>	
	  );				
}}

export default App;
