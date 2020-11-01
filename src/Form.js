import React from 'react';


const form = (props) =>{
	return (
		<form id="contact-form">
			<div className="form-container">
				<label htmlFor="fullName">Full name:</label>
				<input 
				type='text' 
				value={props.fullName}
				name='fullName' 
				placeholder="Your full name..."  
				onChange={props.changed}
				required={true}
				/>
				<label htmlFor="email" required>E-mail address:</label>
				<input 
				type='email' 
				value={props.email}
				name='email' 
				placeholder="Your e-mail address..."  
				onChange={props.changed}
				required={true}
				/>
				<label htmlFor="companyName" required>Company Name:</label>
				<input 
				type='text' 
				value={props.companyName}
				name='companyName' 
				placeholder="Your company name..."
				onChange={props.changed}
				/>
				<label htmlFor="comment">Your message:</label>
				<textarea 
				name="comment" 
				value={props.comment}
				form="contact-form" 
				placeholder="Leave your message in here..."
				onChange={props.changed}
				required={true}
				/>		
			</div>
		</form>
	)
}

export default form;