import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	global: {},
};

const notificationsSlice = createSlice({
	name: 'notifications',
	initialState,
	reducers: {
		errorGlobal(state, action) {
			state.global = {
				type: 'error',
				message: action.payload,
			};
		},
		successGlobal(state, action) {
			state.global = {
				type: 'success',
				message: action.payload,
			};
		},
		clearNotification(state) {
			state.global = {};
		},
	},
});

export const { errorGlobal, successGlobal, clearNotification } =
	notificationsSlice.actions;

export default notificationsSlice.reducer;
