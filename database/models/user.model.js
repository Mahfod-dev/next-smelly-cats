import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, 'Please add a firstName'],
		trim: true,
		maxlength: [50, 'Name can not be more than 50 characters'],
	},
	lastName: {
		type: String,
		required: [true, 'Please add a lastName'],
		trim: true,
		maxlength: [50, 'Name can not be more than 50 characters'],
	},
	email: {
		type: String,
		required: [true, 'Please add an email'],
		unique: true,
		match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			'Please add a valid email',
		],
	},
	role: {
		type: String,
		enum: ['user', 'admin'],
		default: 'user',
	},
	password: {
		type: String,
		required: [true, 'Please add a password'],
		minlength: 6,
		select: false,
	},
});

const User = mongoose.model('User', UserSchema);

export default User;
