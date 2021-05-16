import React, { useEffect } from 'react';
import { Grid, Box, Avatar, Typography, Button, InputBase } from '@material-ui/core';
const ChangePassword = () => {
	useEffect(() => {
		document.title = `Change Password • Instagram`;
	}, []);
	return (
		<Grid container sx={{ height: { md: '742px' }, display: 'flex', flexDirection: 'column' }}>
			<Grid item sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
				<Box sx={{ flexBasis: { md: 194, sm: 194 }, px: { md: '24px', sm: '24px', xs: '4px' }, mr: { xs: '10px' } }}>
					<Avatar sx={{ ml: 'auto' }} src='./images/avatars/default.png'></Avatar>
				</Box>
				<Box sx={{ pl: { md: '6px', sm: '6px' } }}>
					<Typography>createdAt2021</Typography>
				</Box>
			</Grid>
			<Grid container component='form' sx={{ mt: '30px' }}>
				<Grid
					item
					sx={{
						display: 'flex',
						flexDirection: { md: 'row', sm: 'row', xs: 'column' },
						alignItems: { md: 'center', xs: 'flex-start' },
						justifyContent: 'flex-start',
						mb: '20px'
					}}>
					<Typography
						variant='subtitle1'
						sx={{
							px: { md: '24px', sm: '24px', xs: '4px' },
							mr: { xs: '6px' },
							mb: { xs: '8px' },
							fontweight: 600,
							flexBasis: { md: 194, sm: 194 },
							textTransform: 'capitalize',
							textAlign: 'right'
						}}>
						old password
					</Typography>
					<InputBase
						placeholder='old password'
						sx={{ border: '1px solid #e3e3e3', borderRadius: '4px', width: '25ch', pl: '6px' }}></InputBase>
				</Grid>
				<Grid
					item
					sx={{
						display: 'flex',
						flexDirection: { md: 'row', sm: 'row', xs: 'column' },
						alignItems: { md: 'center', xs: 'flex-start' },
						justifyContent: 'flex-start',
						mb: '20px'
					}}>
					<Typography
						variant='subtitle1'
						sx={{
							px: { md: '24px', sm: '24px', xs: '4px' },
							mr: { xs: '6px' },
							mb: { xs: '8px' },
							fontweight: 600,
							flexBasis: { md: 194, sm: 194 },
							textTransform: 'capitalize',
							textAlign: 'right'
						}}>
						new password
					</Typography>
					<InputBase
						placeholder='new password'
						sx={{ border: '1px solid #e3e3e3', borderRadius: '4px', width: '25ch', pl: '6px' }}></InputBase>
				</Grid>
				<Grid
					item
					sx={{
						display: 'flex',
						flexDirection: { md: 'row', sm: 'row', xs: 'column' },
						alignItems: { md: 'center', xs: 'flex-start' },
						justifyContent: 'flex-start'
					}}>
					<Typography
						variant='subtitle1'
						sx={{
							px: { md: '24px', sm: '24px', xs: '4px' },
							mr: { xs: '6px' },
							mb: { xs: '8px' },
							fontweight: 600,
							flexBasis: { md: 194, sm: 194 },
							textTransform: 'capitalize',
							textAlign: 'right'
						}}>
						confirm password
					</Typography>
					<InputBase
						placeholder='confirm password'
						sx={{ border: '1px solid #e3e3e3', borderRadius: '4px', width: '25ch', pl: '6px' }}></InputBase>
				</Grid>
				<Grid
					item
					sx={{
						display: 'flex',
						flexDirection: { md: 'row', sm: 'row', xs: 'column' },
						alignItems: { md: 'center', xs: 'flex-start' },
						justifyContent: 'flex-start',
						mt: '40px'
					}}>
					<Typography
						variant='subtitle1'
						sx={{
							px: { md: '24px', sm: '24px', xs: '4px' },
							mr: { xs: '6px' },
							mb: { xs: '8px' },
							fontweight: 600,
							flexBasis: { md: 194, sm: 194 },
							textTransform: 'capitalize',
							textAlign: 'right'
						}}></Typography>
					<Button
						disabled
						sx={{
							bgcolor: 'info.main',
							color: 'white',
							textTransform: 'capitalize',
							'&:hover,&:active': { bgcolor: 'info.dark' },
							'&.Mui-disabled': {
								opacity: 0.6,
								color: 'white'
							}
						}}>
						change password
					</Button>
					<Button
						sx={{
							color: 'info.main',
							textTransform: 'capitalize',
							ml: { md: '20px', sm: '20px', xs: '0px' },
							mt: { xs: '10px', sm: '0px' }
						}}>
						forgot password ?
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ChangePassword;
