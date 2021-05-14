import React from 'react';
import { Grid, Typography, Divider, Button, Box } from '@material-ui/core';

const ManageContact = () => {
	return (
		<Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
			<Typography variant='h5' sx={{ my: '32px' }}>
				Manage Contacts
			</Typography>
			<Typography variant='body1' sx={{ mb: '24px' }}>
				The people listed here are contacts you've uploaded to Instagram. To remove your synced contacts, tap Delete
				All. Your contacts will be re-uploaded the next time Instagram syncs your contacts unless you go to your device
				settings and turn off access to contacts.
			</Typography>
			<Typography variant='body1' sx={{ mb: '24px' }}>
				Only you can see your contacts, but Instagram uses the info you've uploaded about your contacts to make friend
				suggestions for you and others and to provide a better experience for everyone.
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '100%',
					mt: '32px',
					pb: '12px',
					mb: '16px',
					borderBottom: 1,
					borderColor: '#e3e3e3'
				}}>
				<Typography variant='h6'>0 Synced Contacts</Typography>
				<Button
					disabled
					sx={{
						color: 'info.main',
						textTransform: 'capitalize',
						'&.Mui-disabled': { color: 'info.main', opacity: '0.5' }
					}}>
					Delete All
				</Button>
			</Box>
			<Typography variant='body1' sx={{ mt: '16px', mb: '32px' }}>
				When you upload your contacts to Instagram, you'll see them here.
			</Typography>
			<Divider sx={{ width: '100%' }} />
			<Box sx={{ mt: '24px' }}>
				<Button
					disabled
					sx={{
						color: 'info.main',
						textTransform: 'capitalize',
						'&.Mui-disabled': { color: 'info.main', opacity: '0.5' }
					}}>
					Delete All
				</Button>
			</Box>
		</Grid>
	);
};

export default ManageContact;
