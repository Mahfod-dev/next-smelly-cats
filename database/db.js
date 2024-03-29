import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGODB_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});

		console.log(
			`MongoDb Connected: ${conn.connection.host.cyan.underline}`
		);
	} catch (error) {
		console.error(error.message.red.underline.bold);
		process.exit(1);
	}
};

export default connectDB;
