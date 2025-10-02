async function addSubscriber(email) {
	if (!email) {
		throw new Error("Email is required");
	}

	const baseUrl = `https://api.beehiiv.com/v2/publications/${process.env.BEEHIVE_PUBLICATION_ID}/subscriptions`;
	const headers = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${process.env.BEEHIVE_API_KEY}`,
	};

	// 1. Check if subscriber already exists
	const existingRes = await fetch(
		`${baseUrl}?email=${encodeURIComponent(email)}`,
		{ headers },
	);

	if (!existingRes.ok) {
		const errorBody = await existingRes.text();
		throw new Error(
			`Failed to check subscriber: ${existingRes.status} ${existingRes.statusText} - ${errorBody}`,
		);
	}

	const existingData = await existingRes.json();
	console.log({ existingData });
	const alreadySubscribed = existingData?.data?.length > 0;

	if (alreadySubscribed) {
		return {
			status: "success",
			message: "You are already subscribed!",
			data: existingData,
		};
	}

	// 2. Add new subscriber
	const addRes = await fetch(baseUrl, {
		method: "POST",
		headers,
		body: JSON.stringify({
			email,
			reactivate_existing: false,
			send_welcome_email: true,
		}),
	});

	const addData = await addRes.json();

	if (!addRes.ok) {
		throw new Error(
			`Beehiiv API error: ${addRes.status} ${
				addRes.statusText
			} - ${JSON.stringify(addData)}`,
		);
	}

	return {
		status: "success",
		message: "Your email has been added!",
		data: addData,
	};
}

export default async function handler(req, res) {
	try {
		const { email } = JSON.parse(req.body);

		const result = await addSubscriber(email);

		res.status(200).json({
			message: result.message,
			data: result.data,
		});
	} catch (error) {
		console.error("Subscription error:", error);

		res.status(500).json({
			message: "Failed to add subscriber",
			error: error.message,
		});
	}
}
