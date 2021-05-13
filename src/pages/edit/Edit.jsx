import React, { useEffect, useState } from 'react';
import InstagramAppBar from '../../components/appBar/SearchAppBar';
import { Container, Grid, Typography } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FacebookIcon from '@material-ui/icons/Facebook';
import EditProfile from './editProfile/EditProfile';
import ChangePassword from './changePassword/ChangePassword';
import AppsAndWebsites from './AppsAndWebsites/AppsAndWebsites';
const Edit = () => {
	const [value, setValue] = useState('1');
	const theme = useTheme();
	const below_960 = useMediaQuery(theme.breakpoints.down('md'));
	console.log(below_960);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	useEffect(() => {
		document.title = ` Edit Profile • Instagram`;
	}, []);
	return (
		<React.Fragment>
			<InstagramAppBar />
			<Container
				fluid='true'
				maxWidth='md'
				sx={{
					height: 'auto',
					px: { sm: '8px', xs: '0px' },
					my: '2rem',
					border: 1,
					borderColor: '#e3e3e3',
					borderRadius: '4px'
				}}>
				<Grid
					container
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-start',
						height: '100%',
						flexDirection: { md: 'row', sm: 'column', xs: 'column' }
					}}>
					<TabContext value={value}>
						<Grid
							item
							sx={{
								height: { md: '100%' },
								maxHeight: { sm: '48px', md: '100%' },
								display: 'flex',
								flexDirection: { md: 'column', sm: 'row' }
							}}
							md={3}
							sm={12}>
							<TabList
								onChange={handleChange}
								aria-label='lab API tabs '
								variant='scrollable'
								scrollButtons={true}
								allowScrollButtonsMobile
								orientation={below_960 ? 'horizontal' : 'vertical'}
								sx={{
									flexGrow: 1,
									width: { xs: '100vw', sm: '100%' },
									borderRight: { md: '1px solid #e3e3e3' },
									borderBottom: { sm: '1px solid #e3e3e3', xs: '1px solid #e3e3e3' },
									'& .MuiTabs-indicator': {
										bgcolor: '#000'
									},
									' & .MuiButtonBase-root': {
										textTransform: 'capitalize',
										minHeight: '52px',
										'&:last-child': {
											minHeight: { md: '62px', sm: '52px', xs: '52px' },
											' & .MuiTab-wrapper': { textAlign: 'left', color: 'info.main', fontWeight: 'bold' }
										},
										'& .MuiTab-wrapper': { alignItems: 'flex-start' },
										' &.Mui-selected': {
											color: '#000'
										}
									}
								}}>
								<Tab label='Edit Profile' value='1' />
								<Tab label='Change Password' value='2' />
								<Tab label='Apps and websites' value='3' />
								<Tab label='Email and SMS' value='4' />
								<Tab label='Push Notifications' value='5' />
								<Tab label='Manage Contacts' value='6' />
								<Tab label='Privacy and Security' value='7' />
								<Tab label='Login Activity' value='8' />
								<Tab label='Emails from Instagram' value='9' />
								<Tab label='Switch to professional accounts' value='10' />
							</TabList>
							<Grid
								item
								sx={{
									height: '97px',
									width: '100%',
									display: { md: 'flex', sm: 'none', xs: 'none' },
									borderRight: '1px solid #e3e3e3',
									alignItems: 'center',
									justifyContent: 'center'
								}}>
								<FacebookIcon sx={{ mr: '6px', color: 'info.main', cursor: 'pointer' }} />
								<Typography color='info.main' sx={{ cursor: 'pointer' }}>
									Accounts center
								</Typography>
							</Grid>
						</Grid>
						<Grid
							item
							sx={{
								flexGrow: 1,
								width: '100%',
								height: { md: '100%', sm: 'calc(100% - 48px)', xs: 'calc(100% - 53px)' }
							}}
							md={9}>
							<TabPanel value='1'>
								<EditProfile />
							</TabPanel>
							<TabPanel value='2'>
								<ChangePassword />
							</TabPanel>
							<TabPanel value='3' sx={{ p: '0px' }}>
								<AppsAndWebsites />
							</TabPanel>
						</Grid>
					</TabContext>
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default Edit;
