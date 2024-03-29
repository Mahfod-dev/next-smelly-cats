import { useRouter } from 'next/router';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch,useSelector } from 'react-redux';
import { register, login } from 'store/actions/user.action';
import { Loader } from 'helpers';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { errorHelper } from 'helpers';

const SignIn = () => {
	const [formType, setFormType] = useState(false);

	const { loading } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const router = useRouter();

	const formik = useFormik({
		initialValues: {
			email: 'mahfod.dev@gmail.com',
			password: 'testing123',
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.required('Sorry the email is required')
				.email('This is an invalid email'),
			password: Yup.string().required('Sorry the password is required'),
		}),
		onSubmit: (values) => {
			submitForm(values);
		},
	});

	const submitForm = (values) => {
		if (formType) {
			// register
			console.log(values);

			dispatch(register({ data: values, router }));
		} else {
			// sign in
			console.log(values, 'sign in');
		}
	};

	const handleFormType = () => {
		setFormType(!formType);
	};

	return (
		<div className='container full_vh small top-space'>
			<>
				<h1>{formType ? 'Register' : 'Sign in'}</h1>
				<Box
					component='form'
					sx={{
						'& .MuiTextField-root': { m: 1, width: '100%' },
					}}
					noValidate
					autoComplete='off'
					onSubmit={formik.handleSubmit}
				>
					<TextField
						name='email'
						label='Enter your email'
						variant='outlined'
						{...formik.getFieldProps('email')}
						{...errorHelper(formik, 'email')}
					/>

					<TextField
						name='password'
						label='Enter your password'
						variant='outlined'
						type='password'
						{...formik.getFieldProps('password')}
						{...errorHelper(formik, 'password')}
					/>
					{loading ? (
						<Loader />
					) : (
						<div className='mb-3 si-btns'>
							<Button
								variant='contained'
								color='primary'
								type='submit'
								size='small'
								className='me-2'
								disabled={loading}
							>
								{formType ? 'Register' : 'Sign in'}
							</Button>
							<Button
								variant='outlined'
								size='small'
								onClick={handleFormType}
							>
								{formType
									? 'Already registered ? click here'
									: 'Already signed in ? click here'}
							</Button>
						</div>
					)}
				</Box>
			</>
		</div>
	);
};

export default SignIn;
