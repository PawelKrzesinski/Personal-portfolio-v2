import React from 'react';


const footer = () =>{
	let copyrights = () => {
		return {__html: `&copy; Copyright ${new Date().getFullYear()}, Pawel Krzesinski`}
	}
	return(
		<div className="footer">
				<h5 className="email">krzesinskiwebsites@outlook.com</h5>
				<h6 className="mobile">MOBILE: 07402273196</h6>
				<h6 className="location">EXETER, UNITED KINGDOM</h6>
				<span className='copyrights' id='copyrights' dangerouslySetInnerHTML={copyrights()}></span>
		</div>
	)
}

export default footer;