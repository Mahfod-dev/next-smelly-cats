import User from 'database/models/user.model';

export const userExists = async (email) => {
	const checkUser = await User.findOne({ email });

	if (checkUser) {
		return true;
	}

	return false;
};

export const createUser = async (firstName, lastName, email, password) => {
	const user = await User.create({
		firstName,
		lastName,
		email,
		password,
	});

	if (!user) {
		return res.status(400).json({ message: 'User not created' });
	}

	return user;
};
