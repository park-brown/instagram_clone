import React from 'react';
import { Grid, Avatar, Typography, IconButton, Button, Box } from '@material-ui/core';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
const ProfileHeader__desktop = () => {
	return (
		<React.Fragment>
			{/*Header image */}
			<Grid
				item
				xs={4}
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center'
				}}>
				<Avatar sx={{ width: 150, height: 150, cursor: 'pointer' }} src='./images/avatars/default.png'></Avatar>
			</Grid>
			{/*Header Info Box */}
			<Grid
				item
				sx={{
					flexGrow: 1,
					height: 150,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-around'
				}}
				component='section'>
				<Grid item sx={{ height: 40, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
					<Typography variant='body1'>createdAt2021</Typography>
					<Button
						sx={{
							color: 'common.black',
							border: '1px solid #e2e2e2',

							fontWeight: 550,
							textTransform: 'capitalize',
							ml: '20px'
						}}>
						Edit Profile
					</Button>
					<IconButton sx={{ color: 'common.black' }}>
						<SettingsOutlinedIcon />
					</IconButton>
				</Grid>
				<Grid
					component='ul'
					item
					sx={{ height: 20, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', p: 0 }}>
					<Box sx={{ mr: '40px' }}>
						<Typography sx={{ display: 'inline', fontWeight: 'bold' }}>0</Typography> posts
					</Box>
					<Box sx={{ mr: '40px' }}>
						<Typography sx={{ display: 'inline', fontWeight: 'bold', cursor: 'pointer' }}>0</Typography> followers
					</Box>
					<Box>
						<Typography sx={{ display: 'inline', fontWeight: 'bold', cursor: 'pointer' }}>0</Typography> following
					</Box>
				</Grid>
				<Grid item sx={{ height: 24 }}>
					<Typography variant='body1 ' sx={{ fontWeight: 'bold' }}>
						fullname
					</Typography>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default ProfileHeader__desktop;
