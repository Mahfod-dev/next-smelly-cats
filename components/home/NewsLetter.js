import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { TextField, Button } from '@mui/material';

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

			// 	setIsSubmitting(true);
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
		<>
			<section className='newsletter_section'></section>
		</>
	);
};
