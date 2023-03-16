import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
};

const notificationsSlice = createSlice({
	name: 'notifications',
	initialState,
	reducers: {
		// increment: (state) => {
		//     state.value += 1;
		// },
	},
});

export default notificationsSlice.reducer;
