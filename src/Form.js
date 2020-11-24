import React from 'react';


const form = (props) =>{
	return (
		<form id="contact-form" onSubmit={props.onSubmit}>
			<div className="form-box">
				<input
				className="inputFields"
				placeholder="Your fullname" 
				type='text' 
				value={props.fullName}
				name='fullName' 
				onChange={props.changed}
				required={true}
				/>
				<label htmlFor="fullName">Full name:</label>
				<span className="animateInputBorder"></span>
			</div>
			<div className="form-box">
				<input
				className="inputFields"
				placeholder="Your Email Address" 
				type='email' 
				value={props.email}
				name='email' 
				onChange={props.changed}
				required={true}
				/>
				<label htmlFor="email" required>E-mail address:</label>
				<span className="animateInputBorder"></span>
			</div>
			<div className="form-box">
				<input
				className="inputFields"
				placeholder="Your Company Name" 
				type='text' 
				value={props.companyName}
				name='companyName' 
				onChange={props.changed}
				/>
				<label htmlFor="companyName" required>Company Name:</label>
				<span className="animateInputBorder"></span>
			</div>
			<div className="form-box">
				<textarea
				className="inputFields"
				placeholder="Your message" 
				name="comment" 
				value={props.comment}
				form="contact-form" 
				onChange={props.changed}
				required={true}
				/>
				<label htmlFor="comment">Your message:</label>
				<span className="animateInputBorder"></span>
			</div>		
		</form>
	)
}

export default form;