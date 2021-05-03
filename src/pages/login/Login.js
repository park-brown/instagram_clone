import {
	Container,
	FormControl,
	Grid,
	Box,
	Typography,
	TextField,
	Button,
	Divider,
	Link,
	IconButton,
	InputAdornment
} from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FacebookIcon from '@material-ui/icons/Facebook';
import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

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

const Login = () => {
	const [showPassword, set__showPassword] = useState(false);
	const handleClickShowPassword = () => {
		set__showPassword((showPassword) => !showPassword);
	};
	const theme = useTheme();
	const classes = useStyles(theme);

	useEffect(() => {
		document.title = 'instagram--login';
	}, []);

	const validationSchema = yup.object({
		email: yup.string().email('Enter a valid email').required('Email is required'),
		password: yup.string().min(8, 'Password should be at least 8 characters').required('Password is required')
	});
	{
		/* Textfield must pass onBlur event to update touched value */
	}
	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		}
	});

	return (
		<Container fluid='true' component='main'>
			<Grid container justifyContent component='section' mt={4} mx='auto' className={classes.section}>
				<Grid item className={classes.image_container}>
					<img className={classes.image} src='/images/iphone-with-profile.jpg' alt='iphone-with-profile' />
				</Grid>
				{/* Form Container */}
				<Grid item md={6} xs={12} container flexDirection='column'>
					<Grid item container flexDirection='column' alignItems='center' className={classes.formContainer}>
						<Grid item sx={{ textAlign: 'center', my: '2.25rem' }}>
							<img src='/images/logo.png' alt='logo' />
						</Grid>
						<FormControl component='form' onSubmit={formik.handleSubmit}>
							<TextField
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
								sx={{ width: 300, height: 64, mx: 'auto', mb: '1.5rem' }}
							/>
							<TextField
								autoComplete='true'
								label='password'
								id='password'
								name='password'
								value={formik.values.password}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.touched.password && Boolean(formik.errors.password)}
								helperText={formik.touched.password && formik.errors.password}
								type={showPassword ? 'text' : 'password'}
								required
								sx={{ width: 300, height: 64, mx: 'auto', mb: '2rem' }}
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<IconButton aria-label='toggle password visibility' onClick={handleClickShowPassword} edge='end'>
												{showPassword ? <Visibility /> : <VisibilityOff />}
											</IconButton>
										</InputAdornment>
									)
								}}
							/>
						</FormControl>
						<Button
							type='submit'
							sx={{
								color: 'white',
								bgcolor: 'info.main',
								width: 300,
								mb: '10px',
								'&:hover': { bgcolor: 'info.dark' }
							}}>
							login
						</Button>

						<Divider sx={{ color: 'black', width: 300, height: 20 }} />

						<Button startIcon={<FacebookIcon />} sx={{ color: 'primary.main', my: '12px', textTransform: 'lowercase' }}>
							<Typography variant='subtitle1' color='primary'>
								login with facebook
							</Typography>
						</Button>
						<Link to='#' sx={{ mb: '2rem' }}>
							<Typography variant='subtitle2'>forget your password?</Typography>
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
							no account?
						</Typography>
						<Link to='#'>
							<Typography color='primary'>sign up</Typography>
						</Link>
					</Grid>
					<Grid
						item
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							mt: '1rem'
						}}>
						<Typography variant='body1' sx={{ mb: '1rem' }}>
							Download App
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

export default Login;
