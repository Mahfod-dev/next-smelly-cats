import { createAsyncThunk } from '@reduxjs/toolkit';
import { signIn } from 'next-auth/react';
import axios from 'axios';

const register = createAsyncThunk(
	'user/register',
	async ({ data, router }, thunkAPI) => {
		try {
			const response = await axios.post('/api/auth/register', data);
			console.log(response.data, 'response');
			signIn('credentials', {
				redirect: false,
				email: response.data.email,
				password: data.password,
			});

			router.push('/users/dashboard');

			return response.data;
		} catch (error) {
			console.log(error.response.data, 'error');
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);

const login = createAsyncThunk('user/login', async (data, thunkAPI) => {
	try {
		const response = await axios.post('/api/auth/login', data);
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data);
	}
});

const logout = createAsyncThunk('user/logout', async (data, thunkAPI) => {
	try {
		const response = await axios.get('/api/auth/logout');
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data);
	}
});

export { register, login, logout };
