import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/users.reducer';
import notificationsReducer from './reducers/notifications.reducer';

export const useStore = configureStore({
	reducer: {
		user: usersReducer,
		notifications: notificationsReducer,
	},
});
