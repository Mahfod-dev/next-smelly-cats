import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	data: {
		_id: '',
		firstName: '',
		lastName: '',
		password: '',
		role: 'user',
	},
	auth: false,
};

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		// increment: (state) => {
		//     state.value += 1;
		// },
		// decrement: (state) => {
		//     state.value -= 1;
		// },
	},
});

export default userSlice.reducer;
