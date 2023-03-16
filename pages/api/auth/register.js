import connectDB from 'database/db';
import { userExists } from 'database/services/user.service';
import { StatusCodes } from 'http-status-codes';
import { createUser } from 'database/services/user.service';

// Path: pages/api/auth/register.js

const handler = async (req, res) => {
	// Connect to database
	await connectDB();

	if (req.method !== 'POST') {
		return res
			.status(StatusCodes.NON_AUTHORITATIVE_INFORMATION)
			.json({ message: 'Method not allowed' });
	}

	const { firstName, lastName, email, password } = req.body;

	if (await userExists(email)) {
		return res
			.status(StatusCodes.NOT_FOUND)
			.json({ message: 'User already exists' });
	}

	try {
		const user = await createUser(firstName, lastName, email, password);
		console.log(user);
		res.status(StatusCodes.CREATED).json({
			message: 'User created',
			_id: user._id,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			role: user.role,
		});
	} catch (error) {
		console.error(error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: 'Server error',
			error: error.errors,
		});
	}
};

export default handler;
