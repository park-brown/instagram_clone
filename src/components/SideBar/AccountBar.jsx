import React from 'react';
import { Grid, Avatar, Button, Typography } from '@material-ui/core';
const AccountBar = () => {
	return (
		<React.Fragment>
			<Grid container sx={{ width: 294, height: 56, alignItems: 'center', my: '1rem', pl: '12px' }}>
				{/*image Avatar */}
				<Grid item sx={{ mr: '1.2rem', width: 56, height: 56 }}>
					<Avatar
						sx={{ width: 56, height: 56, cursor: 'pointer' }}
						src='/images/avatars/default.png'
						alt='user-photo'></Avatar>
				</Grid>
				{/* user info */}
				<Grid item sx={{ flexGrow: 1 }}>
					<Typography variant='body2' sx={{ fontWeight: 500 }}>
						user name
					</Typography>
					<Typography variant='body2' color='GrayText'>
						full name
					</Typography>
				</Grid>
				{/*switch button */}
				<Grid item sx={{ ml: 'auto' }}>
					<Button
						sx={{
							fontSize: '12px',
							fontWeight: 600,
							lineHeight: '14px',
							textTransform: 'capitalize',
							color: 'info.main'
						}}>
						Switch
					</Button>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default AccountBar;
