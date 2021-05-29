import React from 'react';
import { Grid, Box, Typography, InputBase, Avatar, Checkbox } from '@material-ui/core';
import { useFirestoreConnect, isEmpty } from 'react-redux-firebase';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import ChatSearchDropDownSkeleton from './ChatSearchDropDownSkeleton';
import ChatSearchHistory from './ChatSearchHistory';

const ChatSearchUser = ({ checked, handleChange, activeStep, chatlist, handleTabChange }) => {
	const formik = useFormik({
		initialValues: {
			userInput: ''
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		}
	});
	useFirestoreConnect([
		{
			collection: 'users',
			where: ['username', '==', `${formik.values.userInput}`],
			limit: 1
		}
	]);

	const selected = useSelector((state) => state.firestore.ordered.users);

	return (
		<Grid
			container
			sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<Grid
				onSubmit={formik.handleSubmit}
				item
				component='form'
				sx={{
					height: '60px',
					width: '100%',
					display: `${activeStep === 2 ? 'none' : 'flex'}`,
					flexDirection: 'row',
					alignItems: 'center',
					borderBottom: 1,
					borderColor: '#e3e3e3'
				}}>
				{activeStep === 2 ? null : (
					<React.Fragment>
						<Typography variant='h6' sx={{ pl: '8px' }}>
							To :
						</Typography>
						<InputBase
							id='userInput'
							name='userInput'
							type='text'
							onChange={formik.handleChange}
							value={formik.values.userInput}
							placeholder='Search...'
							sx={{ flexGrow: 1, pl: '8px' }}
						/>
					</React.Fragment>
				)}
				{/*Search box go here */}
			</Grid>
			<Grid
				item
				sx={{
					flexGrow: 1,
					flexBasis: 'auto',
					width: '100%',
					display: `${activeStep === 2 ? 'none' : 'flex'}`,
					flexDirection: 'column',
					alignItems: 'flex-start'
				}}>
				{/*Suggestion drop down go here */}
				{!chatlist ? (
					<Box sx={{ width: '50%', height: '50%', ml: '1rem' }}>
						<Typography variant='h6' sx={{ my: '2rem' }}>
							suggestion
						</Typography>
						<Typography variant='body1'>please search for a user</Typography>
					</Box>
				) : isEmpty(selected) ? (
					<React.Fragment>
						<ChatSearchDropDownSkeleton />
						<ChatSearchHistory handleTabChange={handleTabChange} chatlist={chatlist} activeStep={activeStep} />
					</React.Fragment>
				) : (
					<Box
						sx={{
							display: `${activeStep === 2 ? 'none' : 'flex'}`,
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'flex-start',
							width: '100%',
							py: '8px',
							px: '16px'
						}}>
						<Avatar variant='circular' sx={{ width: '48px', height: '48px' }} />
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'flex-start',
								flexGrow: 1,
								height: '100%',
								ml: '10px'
							}}>
							<Typography variant='body1' width={116} height={24}>
								{selected[0].fullName}
							</Typography>
							<Typography variant='body2' width={84} height={24}>
								{selected[0].username}
							</Typography>
						</Box>
						<Checkbox color='primary' checked={checked} onChange={handleChange}></Checkbox>
					</Box>
				)}
			</Grid>
		</Grid>
	);
};

export default ChatSearchUser;
