import React from 'react';
import { Grid, Typography, Box, Button } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
const EmailsFromInstagram = () => {
	const [value, setValue] = React.useState('1');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Grid container sx={{ height: '742px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
			<Grid
				item
				sx={{
					ml: { md: '68px', sm: '68px', xs: '32px' },
					mt: '68px',
					width: { md: 'calc(100% - 68px)', sm: 'calc(100% - 68px)', xs: 'calc(100% - 32px)' }
				}}>
				<Typography>Emails From Instagram</Typography>
			</Grid>
			<Grid
				item
				sx={{
					flexGrow: 1,
					width: '100%',
					pt: { md: '32px', sm: '32px', xs: '32px' },
					pl: { md: '65px', sm: '65px', xs: '20px' },
					pb: { md: '35px', sm: '35px', xs: '32px' },
					pr: { md: '44px', sm: '32px', xs: '32px' }
				}}>
				<TabContext value={value}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<TabList
							onChange={handleChange}
							aria-label='lab API tabs example'
							sx={{
								'& .MuiTabs-indicator': {
									bgcolor: '#000'
								},
								'& .MuiTab-root': {
									'&.Mui-selected': {
										color: '#000'
									}
								},
								'& .MuiTabs-flexContainer': {
									justifyContent: 'space-around'
								}
							}}>
							<Tab label='security' value='1' />
							<Tab label='Other' value='2' />
						</TabList>
					</Box>
					<TabPanel value='1'>
						<Box>
							<Typography variant='body1' sx={{ mt: '30px', mb: '20px' }}>
								Security and login emails from Instagram in the last 14 days will appear here. You can use it to verify
								which emails are real and which are fake.
							</Typography>
							<Button sx={{ color: 'info.main', p: '0px', textTransform: 'capitalize', fontSize: '1rem' }}>
								Learn more.
							</Button>
						</Box>
					</TabPanel>
					<TabPanel value='2'>
						<Box>
							<Typography variant='body1' sx={{ mt: '30px', pb: '20px', borderBottom: 1, borderColor: '#e3e3e3' }}>
								Other emails from Instagram in the last 14 days that aren't about security or login will appear here.
								You can use it to verify which emails are real and which are fake.{' '}
								<Button
									sx={{ color: 'info.main', p: '0px', textTransform: 'capitalize', fontSize: '1rem' }}
									component='span'>
									Learn more.
								</Button>
							</Typography>
							<Box sx={{ mt: '8px' }}>
								<Typography variant='body1' fontWeight='bold'>
									An important update about your Instagram account settings
								</Typography>
								<Typography variant='body1'>May 14, 2021 10:42 AM</Typography>
								<Typography variant='subtitle1' color='GrayText'>
									Sent to: yunfengpu9@gmail.com
								</Typography>
								<Typography variant='subtitle1' color='GrayText'>
									Sent from: no-reply@mail.instagram.com
								</Typography>
							</Box>
						</Box>
					</TabPanel>
				</TabContext>
			</Grid>
		</Grid>
	);
};

export default EmailsFromInstagram;
