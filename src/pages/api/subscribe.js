const client = require("@sendgrid/client")
client.setApiKey(process.env.SENDGRID_API_KEY)

function addContact(email) {
	const data = {
		"contacts": [
			{
				email
			}
		]
	}  

	return client.request( {
		url: "/v3/marketing/contacts",
		method: "PUT",
		body: data
	})
}


export default async (req, res) => {
	const {email} = JSON.parse(req.body)
	try {
		await addContact(email)
		res.status(200).json({ message: "Your email has been added!" })
	} catch (error) {
		console.error(error)
		res.status(500).json({message: error })
	}
}