import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectDB from 'database/db';
import { findUserByEmail } from 'database/services/user.service';

export default NextAuth({
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			async authorize(credentials) {
				await connectDB();

				const user = await findUserByEmail(
					credentials.email,
					'+password'
				);

				if (!user) {
					throw new Error('No user found');
				}
				console.log(credentials);
				const isMatch = await user.matchPassword(credentials.password);

				if (!isMatch) {
					throw new Error('Incorrect password');
				}

				if (user) {
					return user;
				}

				return null;
			},
		}),
	],
	session: {
		jwt: true,
	},
	jwt: {
		secret: process.env.NEXTAUTH_SECRET,
	},
	pages: {
		signIn: '/users/sign_in',
	},




	// callbacks: {
	// 	async jwt(token, user, account, profile, isNewUser) {
	// 		if (user) {
	// 			token.id = user._id;
	// 		}
	// 		return token;
	// 	},
	// },
});
