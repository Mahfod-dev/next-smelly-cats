import { connectDB } from 'database/db';

// Path: pages/api/auth/register.js

const handler = async (req, res) => {
	// Connect to database
	await connectDB();

	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Method not allowed' });
	}

	const { name, email, password } = req.body;

	try {
		const user = await User.create({
			firstName,
			lastName,
			email,
			password,
		});

		if (!user) {
			return res.status(400).json({ message: 'User not created' });
		}

		res.status(201).json({ message: 'User created' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
};

export default handler;
