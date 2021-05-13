import React from 'react';
import { Grid, Typography, FormControlLabel, Checkbox, Box } from '@material-ui/core';

const EmailAndSMS = () => {
	return (
		<Grid
			container
			sx={{
				width: 'calc(100% - 96px)',
				height: '680px',
				mt: '24px',
				mr: '32px',
				mb: '32px',
				ml: '64px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				alignItems: 'flex-start'
			}}>
			<Typography variant='h6' sx={{ mb: '16px' }}>
				Subscribe to:
			</Typography>
			<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', my: '16px' }}>
				<FormControlLabel
					sx={{ '& .MuiFormControlLabel-label': { fontWeight: 500, color: '#262626' } }}
					control={<Checkbox defaultChecked size='small' color='default' />}
					label='Feedback emails'
				/>
				<Typography variant='subtitle1' color='GrayText'>
					Give feedback on Instagram.
				</Typography>
			</Box>
			<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', my: '16px' }}>
				<FormControlLabel
					sx={{ '& .MuiFormControlLabel-label': { fontWeight: 500, color: '#262626' } }}
					control={<Checkbox defaultChecked size='small' color='default' />}
					label='Reminder emails'
				/>
				<Typography variant='subtitle1' color='GrayText'>
					Get notifications you may have missed.
				</Typography>
			</Box>
			<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', my: '16px' }}>
				<FormControlLabel
					sx={{ '& .MuiFormControlLabel-label': { fontWeight: 500, color: '#262626' } }}
					control={<Checkbox defaultChecked size='small' color='default' />}
					label='Product emails'
				/>
				<Typography variant='subtitle1' color='GrayText'>
					Get tips about Instagram's tools.
				</Typography>
			</Box>
			<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', my: '16px' }}>
				<FormControlLabel
					sx={{ '& .MuiFormControlLabel-label': { fontWeight: 500, color: '#262626' } }}
					control={<Checkbox defaultChecked size='small' color='default' />}
					label='News emails'
				/>
				<Typography variant='subtitle1' color='GrayText'>
					Learn about new Instagram features.
				</Typography>
			</Box>
		</Grid>
	);
};

export default EmailAndSMS;
