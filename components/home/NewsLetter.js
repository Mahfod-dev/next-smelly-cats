import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { TextField, Button } from '@mui/material';
import { errorHelper, Loader } from 'helpers';

export const NewsLetter = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const formik = useFormik({
		initialValues: {
			email: '',
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email('Invalid email address')
				.required('Sorry, we need your email address'),
		}),
		onSubmit: async (values, { resetForm }) => {
			console.log(values);

			setIsSubmitting(false);
			resetForm();
			// 	try {
			// 		const res = await fetch('/api/newsletter', {
			// 			method: 'POST',
			// 			headers: {
			// 				'Content-Type': 'application/json',
			// 			},
			// 			body: JSON.stringify(values),
			// 		});
			// 		const data = await res.json();
			// 		if (data.error) {
			// 			throw new Error(data.message || 'Something went wrong!');
			// 		}
			// 		resetForm();
			// 	} catch (error) {
			// 		console.log(error);
			// 	}
			// 	setIsSubmitting(false);
			// },
		},
	});

	return (
		<section className='newsletter_section'>
			<div className='container px-4 px-lg-5 text-center'>
				<h1 className='mb-4'>Join to our newsletter</h1>

				{!isSubmitting ? (
					<form className='mt-3' onSubmit={formik.handleSubmit}>
						<div className='form-group'>
							<TextField
								style={{ width: '100%' }}
								name='email'
								label='Enter you email'
								variant='outlined'
								{...formik.getFieldProps('email')}
								{...errorHelper(formik, 'email')}
							/>

							<Button
								variant='contained'
								color='primary'
								type='submit'
								size='small'
								className='mt-2'
							>
								Subscribe
							</Button>
						</div>
					</form>
				) : (
					<Loader />
				)}
			</div>
		</section>
	);
};
