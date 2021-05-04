import { Container, FormControl, Grid, Box, Typography, TextField, Button, Divider, Link } from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';
import FacebookIcon from '@material-ui/icons/Facebook';
import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useFirebase } from 'react-redux-firebase';
import { nanoid } from '@reduxjs/toolkit';
import * as ROUTES from '../../constants/routes';
import {Link as RouteLink} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
	section: {
		maxWidth: 945,
		width: '100%',
		display: 'flex',
		justifyContent: 'center'
	},
	image_container: {
		width: 454,
		height: 618,
		[theme.breakpoints.down('md')]: {
			display: 'none'
		}
	},
	image: {
		display: 'block',
		width: '100%',
		height: '100%',
		objectFit: 'cover'
	},
	formContainer: {
		border: '1px solid #e0e0e0',
		boxShadow: theme.shadows[1]
	}
}));

const EmailSignup = () => {
	const theme = useTheme();
	const classes = useStyles(theme);
	const firebase = useFirebase();
	const userSignUp = async ({ email, fullname, username, password }) => {
		await firebase.createUser(
			{ email, password },
			{
				fullName: fullname,
				username: username,
				emailAddress: email,
				userId: nanoid(),
				dateCreated: Date.now()
			}
		);
	};
	useEffect(() => {
		document.title = 'instagram--signup';
	}, []);

	const validationSchema = yup.object({
		email: yup.string().email('Enter a valid email').required('Email is required'),
		fullname: yup.string().min(3, 'fullname should at least containe 3 character').required('fullname is required'),
		username: yup
			.string()
			.min(4, 'usename should be at least 4 character')
			.max(15, 'username should be less than 15 character')
			.required('username is required'),
		password: yup.string().min(8, 'Password should be at least 8 characters').required('Password is required')
	});

	/* Textfield must pass onBlur event to update touched value */

	const formik = useFormik({
		initialValues: {
			email: '',
			fullname: '',
			username: '',
			password: ''
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			userSignUp({
				email: values.email,
				fullname: values.fullname,
				username: values.username,
				password: values.password
			});
		}
	});

	return (
		<Container fluid='true' component='main'>
			<Grid container justifyContent component='section' mt={4} mx='auto' className={classes.section}>
				{/* Form Container */}
				<Grid item md={6} xs={12} container flexDirection='column'>
					<Grid item container flexDirection='column' alignItems='center' className={classes.formContainer}>
						<Grid item sx={{ textAlign: 'center', mt: '1.5rem' }}>
							<img src='/images/logo.png' alt='logo' />
						</Grid>
						<Grid item sx={{ mt: '1rem' }}>
							<Typography variant='body1' sx={{ color: 'GrayText', px: '0.5rem', width: 300 }}>
								Sign up to see photos and videos from your friends.
							</Typography>
						</Grid>
						<Grid item>
							<Button
								sx={{
									color: 'white',
									bgcolor: 'info.main',
									textTransform: 'lowercase',
									width: 300,
									height: 33,
									mt: '1rem',
									'&:hover': {
										bgcolor: 'info.dark'
									}
								}}
								startIcon={<FacebookIcon />}>
								Log in with Facebook
							</Button>
						</Grid>

						<Grid item sx={{ my: '1rem', width: 300 }}>
							<Divider sx={{ fontSize: '0.7rem', fontWeight: 'bold' }}>OR</Divider>
						</Grid>

						<FormControl component='form' onSubmit={formik.handleSubmit}>
							{/*email field */}
							<TextField
								size='small'
								autoComplete='true'
								label='email'
								id='email'
								name='email'
								value={formik.values.email}
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								error={formik.touched.email && Boolean(formik.errors.email)}
								helperText={formik.touched.email && formik.errors.email}
								type='email'
								required
								sx={{ width: 300, height: 64, mx: 'auto', mb: '0.5rem' }}
							/>
							{/*fullname field */}
							<TextField
								size='small'
								autoComplete='true'
								label='fullname'
								id='fullname'
								name='fullname'
								value={formik.values.fullname}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.touched.fullname && Boolean(formik.errors.fullname)}
								helperText={formik.touched.fullname && formik.errors.fullname}
								type='text'
								required
								sx={{ width: 300, height: 64, mx: 'auto', mb: '0.5rem' }}
							/>
							{/*username field */}
							<TextField
								size='small'
								autoComplete='true'
								label='username'
								id='username'
								name='username'
								value={formik.values.username}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.touched.username && Boolean(formik.errors.username)}
								helperText={formik.touched.username && formik.errors.username}
								type='text'
								required
								sx={{ width: 300, height: 64, mx: 'auto', mb: '0.5rem' }}
							/>

							<TextField
								size='small'
								autoComplete='true'
								label='password'
								id='password'
								name='password'
								value={formik.values.password}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.touched.password && Boolean(formik.errors.password)}
								helperText={formik.touched.password && formik.errors.password}
								type='password'
								required
								sx={{ width: 300, height: 64, mx: 'auto', mb: '0.5rem' }}
							/>
						</FormControl>
						{/*sign up button */}
						<Button
							type='submit'
							onClick={formik.handleSubmit}
							disabled={!formik.isValid}
							sx={{
								textTransform: 'lowercase',
								color: 'white',
								fontWeight: 'bold',
								bgcolor: 'info.main',
								width: 300,
								mb: '10px',
								'&:hover': { bgcolor: 'info.dark' },
								'&:disabled': {
									color: 'white',
									bgcolor: '#c2eafc'
								}
							}}>
							sign up
						</Button>
						<Link to='#' sx={{ mb: '2rem', width: 300 }}>
							<Typography variant='caption' color='gray' sx={{ cursor: 'pointer' }}>
								By signing up, you agree to our Terms , Data Policy and Cookies Policy .
							</Typography>
						</Link>
					</Grid>
					<Grid
						item
						sx={{
							width: '100%',
							height: 63,
							mt: '8px',
							textAlign: 'center',
							boxShadow: 1,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center'
						}}>
						<Typography variant='body1' sx={{ marginRight: '8px' }}>
							Have an account ?
						</Typography>
						<Link component={RouteLink} to={ROUTES.LOGIN} sx={{ cursor: 'pointer' }}>
							<Typography color='primary'>log in</Typography>
						</Link>
					</Grid>
					<Grid
						item
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							my: '1rem'
						}}>
						<Typography variant='body1' sx={{ mb: '1rem' }}>
							Get the app
						</Typography>
						<Box sx={{ display: 'flex', flexDirection: 'row' }}>
							<Box sx={{ width: 136, height: 40, mr: '0.5rem', cursor: 'pointer' }}>
								<img className={classes.image} src='/images/appstore.png' alt='apple-store' />
							</Box>
							<Box sx={{ width: 136, height: 40, cursor: 'pointer' }}>
								<img className={classes.image} src='/images/googleplay.png' alt='google-play' />
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default EmailSignup;
