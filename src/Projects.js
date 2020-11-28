import React from 'react';


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
}