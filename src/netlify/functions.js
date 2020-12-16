const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors')
const creds = require('../../config')
const serverless = require('serverless-http')

const transport =  {
	host: 'smtp.office365.com',
	port: 587,
	auth: {
		user: creds.USER,
		pass: creds.PASS
	}
}

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
	if(error){
		console.log(error);
	} else {
		console.log('Server is ready to take messages !');
	}
})

router.post('/send', (req, res, next) => {
	const name = req.body.fullName;
	var companyName = req.body.companyName;
	const email = req.body.email;
	const comment = req.body.comment;
	const content = `Full name: ${name} \nCompany Name: ${companyName} \nE-mail: ${email} \nComment: ${comment}`;
	console.log(content);
	const mail = {
		from: name,
		to: creds.USER,
		subject: 'New message from Contact Form',
		text: content
	}

	transporter.sendMail(mail, (err, data) => {
		if(err){
			res.json({
				status: "Failed!"
			})
		} else {
			res.json({
				status: "Success!"
			})
		}
	})
})

const PORT = process.env.PORT || 3001
const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)


startServer = () => {
	app.listen(PORT)
	console.log(`Server running on ${PORT}`);
}

startServer();
module.exports.handler = serverless(app);