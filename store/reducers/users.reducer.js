import { createSlice } from '@reduxjs/toolkit';
import { register } from 'store/actions/user.action';

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
	reducers: {},
	extraReducers: {
		[register.pending]: (state) => {
			state.loading = true;
		},
		[register.fulfilled]: (state, action) => {
			console.log(action.payload, 'action.payload');
			state.loading = false;
			state.data = action.payload;
			state.auth = true;
		},
		[register.rejected]: (state, error) => {
			state.loading = false;
			state.error = error;
		},
	},
});

export default userSlice.reducer;
