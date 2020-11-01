import React, { Component } from 'react';
import './App.css';
import Form from './Form.js'


class App extends Component {

		state = {
				fullName: "",
				companyName: "",
				email: "",
				comment: ""
		}
	
		
	
	copyrights = () => {
		return {__html: `&copy; Copyright ${new Date().getFullYear()}, Pawel Krzesinski`}
	}
	
	handleSubmit = e => {
		e.preventDefault()
		
		fetch('http://localhost:3000/send', {
			method: 'POST',
			body: JSON.stringify(this.state),
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
		}).then(response => {
			if (response.status === 'success') {
				alert("Message Sent")
				this.resetForm();
			} else if (response.status === 'fail') {
				console.log("Message failed to send.");
			}
		})
	}

	resetForm = () => {
		this.setState({
			fullName: "",
			companyName: "",
			email: "",
			comment: ""
		})
	}

	handleChange = e => {
		this.setState(
			{
				[e.target.name]: e.target.value
			}
		
		)
	}
	render() {
	
		return (
			
			<div className="App">
				<div className="navbar">
					<a href="./public/index.html" className="logo">K.</a>
					<button className="navbar-home"><a href="#home">HOME</a></button>
					<button className="navbar-about"><a href="#about">ABOUT</a></button>
					{/* <button className="navbar-projects"><a href="#projects">PROJECTS</a></button> */}
					<button className="navbar-contact"><a href="#contact">CONTACT</a></button>
				</div>
				<div className="section-1" id="home">
					<div className="filter">
						<h2 className="h2-1">Pawel Krzesinski, self-taught Developer...</h2>
						<h2 className="h2-2">...Designer</h2>
						<h2 className="h2-3">...Problem solver</h2>
						<button className="button-aboutMe"><a href="#about">More about me!</a></button>
					</div>
				</div>
				<div className="section-2" id="about">
					<h2 className="section-2-text-1">Hi ! I am Pawel, i am a proactive and responsible self-taught programmer.</h2>
					<h2 className="section-2-text-2">I am passionate about coding and always up for a challenge. You need a web app - I get it done !</h2>
					<h2 className="section-2-text-3">I deliver beautiful, fully responsive websites for You and Your business!</h2>
				</div>
				<div className="section-3-bg">
					<div className="section-3" id="projects">
						<h2>PROJECTS SECTION COMING SOON</h2>
						{/* <h2>HERE'S SOME OF MY PROJECTS</h2>
						<div className="project-box">
							<img src="#" alt="" className="project-image"/>
							<img src="#" alt="" className="project-image"/>
							<img src="#" alt="" className="project-image"/>
							<img src="#" alt="" className="project-image"/>
							<img src="#" alt="" className="project-image"/>
							<img src="#" alt="" className="project-image"/>
							<img src="#" alt="" className="project-image"/>
							<img src="#" alt="" className="project-image"/>
						</div> */}
					</div>
				</div>
				<div className="section-4" id="contact">
					<h3>E-mail me:</h3>
					<h5>krzesinskiwebsites@outlook.com</h5>
					<h5>Or leave me a message here:</h5>
					<Form 
					changed={this.handleChange.bind(this)}
					onSubmit={this.handleSubmit.bind(this)}
					method="POST"
					/>
					<button type="submit" id="submit" form="contact-form">Submit</button>
				</div>
			<div className="footer">
				<span className='copyrights' id='copyrights' dangerouslySetInnerHTML={this.copyrights()}></span>
			</div>
		</div>	
	  );				
}}
export default App;
