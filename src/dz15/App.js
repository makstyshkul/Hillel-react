import React from 'react';
import {Formik, Form, Field, ErrorMessage, useFormik} from 'formik'
import * as yup from 'yup';
import style from './style.css';


function App() {

	const schema = yup.object().shape({
		firstName: yup.string().required(),
		email: yup.string().email().required(),
		phone: yup.number().required().test(
			{
				name: 'Is a correct number',
				test: (value) => {
					return value.toString().length === 12
				},
				message: 'Is a uncorrect number'
			}
		)
	})


	return (
		<>
		<Formik 
		initialValues={{ firstName: '', email: '', phone: 380000000000 }}
		onSubmit={e => console.log(e)}
		validateOnBlur
		validationSchema={schema}>
			<Form className='form'>
				<label className='form-field'>
					firstName
					<div className='field-block'>
						<Field  className='field'  name='firstName' />
					<ErrorMessage className='error' name='firstName' />
					</div>
				</label>
				<label className='form-field'>
					email
					<div className='field-block'>
					<Field className='field' type='email' name='email' />
					<ErrorMessage className='error' name='email' />
					</div>
				</label>
				<label className='form-field'>
					phone
					<div className='field-block'>
					<Field className='field' name='phone' />
					<ErrorMessage className='error' name='phone' />
					</div>
				</label>
				<button className='button' type='submit' >Submit</button>
			</Form>
		</Formik>
		</>
	);
}

	export default App;

