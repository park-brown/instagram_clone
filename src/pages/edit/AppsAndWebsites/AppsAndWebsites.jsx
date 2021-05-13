import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
const AppsAndWebsites = () => {
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
				<Typography>Apps and Websites</Typography>
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
									justifyContent: 'space-between'
								}
							}}>
							<Tab label='active' value='1' />
							<Tab label='expired' value='2' />
							<Tab label='removed' value='3' />
						</TabList>
					</Box>
					<TabPanel value='1'>
						<Box>
							<Typography variant='body1' sx={{ mt: '30px', mb: '20px' }}>
								These are apps and websites you've used Instagram to log into and have recently used. They can request
								info you chose to share with them.
							</Typography>
							<Typography variant='subtitle1' color='GrayText'>
								You have not authorized any applications to access your Instagram account.
							</Typography>
						</Box>
					</TabPanel>
					<TabPanel value='2'>
						<Box>
							<Typography variant='body1' sx={{ mt: '30px', mb: '20px' }}>
								These are apps and websites you've used Instagram to log into and may not have used in a while. They may
								still have access to info you previously shared, but their ability to make additional requests for
								private info has expired.
							</Typography>
							<Typography variant='subtitle1' color='GrayText'>
								You have no expired applications that had access to your Instagram account.
							</Typography>
						</Box>
					</TabPanel>
					<TabPanel value='3'>
						<Box>
							<Typography variant='body1' sx={{ mt: '30px', mb: '20px' }}>
								These are apps and websites you removed from your account. This means they may still have access to info
								you previously shared, but can't make additional requests for private info.
							</Typography>
							<Typography variant='subtitle1' color='GrayText'>
								You have no removed applications that had access to your Instagram account..
							</Typography>
						</Box>
					</TabPanel>
				</TabContext>
			</Grid>
		</Grid>
	);
};

export default AppsAndWebsites;
