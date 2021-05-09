import React from 'react';
import { Grid, Avatar, Typography, IconButton, Button } from '@material-ui/core';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
const ProfileHeader_mobile = () => {
	return (
		<React.Fragment>
			{/*Header image */}
			<Grid
				item
				xs={4}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'flex-start'
				}}>
				<Avatar sx={{ width: 78, height: 78, cursor: 'pointer' }} src='./images/avatars/default.png'></Avatar>
				<Grid item sx={{ height: 24 }}>
					<Typography variant='body1 ' sx={{ fontWeight: 'bold' }}>
						fullname
					</Typography>
				</Grid>
			</Grid>
			{/*Header Info Box */}
			<Grid
				item
				sx={{
					flexGrow: 1,
					height: 'auto',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-start'
				}}
				component='section'>
				<Grid item sx={{ height: 40, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
					<Typography variant='body1'>createdAt2021</Typography>

					<IconButton sx={{ color: 'common.black', ml: '0px' }}>
						<SettingsOutlinedIcon />
					</IconButton>
				</Grid>
				<Grid item sx={{ mt: '25px' }}>
					<Button
						sx={{
							color: 'common.black',
							border: '1px solid #e2e2e2',

							fontWeight: 550,
							textTransform: 'capitalize'
						}}>
						Edit Profile
					</Button>
				</Grid>
			</Grid>
			<Grid
				item
				container
				xs={12}
				sx={{
					height: 60,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-start',
					mt: '20px',
					borderTop: 1,
					borderBottom: 1,
					borderColor: '#e0e0e0'
				}}>
				<Grid
					item
					xs
					sx={{
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						cursor: 'pointer'
					}}>
					<Typography>0</Typography>
					<Typography color='GrayText'>post</Typography>
				</Grid>
				<Grid
					item
					xs
					sx={{
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						cursor: 'pointer'
					}}>
					<Typography>0</Typography>
					<Typography color='GrayText'>followers</Typography>
				</Grid>
				<Grid
					item
					xs
					sx={{
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						cursor: 'pointer'
					}}>
					<Typography>0</Typography>
					<Typography color='GrayText'>following</Typography>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default ProfileHeader_mobile;
