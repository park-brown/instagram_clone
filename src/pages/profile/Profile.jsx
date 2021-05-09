import { Container, Grid, Tab, Avatar, Typography, Button } from '@material-ui/core';
import GridOnOutlinedIcon from '@material-ui/icons/GridOnOutlined';
import TvIcon from '@material-ui/icons/Tv';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import HeaderDesktop from './ProfileHeader__desktop';
import HeaderMobile from './ProfileHeader_mobile';
import { TabPanel } from '@material-ui/lab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import VideoLabelOutlinedIcon from '@material-ui/icons/VideoLabelOutlined';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import SearchAppBar from '../../components/appBar/SearchAppBar';

const Profile = () => {
	const theme = useTheme();
	const below_600 = useMediaQuery(theme.breakpoints.down('sm'));
	const [value, setValue] = useState('0');
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	useEffect(() => {
		document.title = `Lot Park (@createat2021) • Instagram photos and videos`;
	}, []);
	return (
		<React.Fragment>
			<SearchAppBar />
			<Container fluid='true' sx={{ height: 'auto', mt: '2rem' }} maxWidth='md' component='main'>
				{/* Column direction affect grid item width, find a work around 
        https://material-ui.com/components/grid/#direction-column-column-reverse */}
				<Grid container sx={{ height: 'auto' }}>
					{/*Header */}
					<Grid item container xs={12} sx={{ height: 'auto' }}>
						{below_600 ? <HeaderMobile /> : <HeaderDesktop />}
					</Grid>
					<TabContext value={value}>
						<Grid item container xs={12} sx={{ height: 56, mt: { sm: '3rem' } }}>
							{/*Tab header */}

							<TabList
								onChange={handleChange}
								aria-label='basic tabs example'
								sx={{
									width: '100%',
									'& .MuiTabs-scroller': { borderTop: 1, borderColor: '#e3e3e3' },
									'& .MuiTabs-flexContainer': { justifyContent: 'center' },
									'& .MuiTabs-indicator': { top: 0, bgcolor: 'black' }
								}}>
								<Tab
									label={below_600 ? '' : 'Posts'}
									value='0'
									icon={<GridOnOutlinedIcon />}
									sx={{
										'& .MuiTab-wrapper': { flexDirection: 'row' },
										'& .MuiTab-wrapper>*:first-child': { marginBottom: 0, mr: '6px' },
										'&.Mui-selected': {
											color: 'black'
										}
									}}
								/>
								<Tab
									sx={{
										'& .MuiTab-wrapper': { flexDirection: 'row' },
										'& .MuiTab-wrapper>*:first-child': { marginBottom: 0, mr: '6px' },
										'&.Mui-selected': {
											color: 'black'
										}
									}}
									label={below_600 ? '' : 'IGTV'}
									value='1'
									icon={<TvIcon />}
								/>
								<Tab
									sx={{
										'& .MuiTab-wrapper': { flexDirection: 'row' },
										'& .MuiTab-wrapper>*:first-child': { marginBottom: 0, mr: '6px' },
										'&.Mui-selected': {
											color: 'black'
										}
									}}
									label={below_600 ? '' : 'Saved'}
									value='2'
									icon={<BookmarkBorderIcon />}
								/>
								<Tab
									sx={{
										'& .MuiTab-wrapper': { flexDirection: 'row' },
										'& .MuiTab-wrapper>*:first-child': { marginBottom: 0, mr: '6px' },
										'&.Mui-selected': {
											color: 'black'
										}
									}}
									label={below_600 ? '' : 'Tagged'}
									value='3'
									icon={<AccountBoxOutlinedIcon />}
								/>
							</TabList>
						</Grid>
						{/*Tab content */}
						<Grid item container xs={12} sx={{ height: 390, ' & > *': { width: '100%', p: 0 } }}>
							<TabPanel value='0'>
								{/*Post panel */}
								<Grid
									sx={{
										height: '100%',
										display: 'flex',
										flexDirection: { xs: 'column-reverse', sm: 'row' },
										alignItems: 'center',
										justifyContent: 'flex-start'
									}}>
									<Avatar
										sx={{ width: { xs: '100%', sm: '50%' }, height: { xs: 'calc(100% - 200px)', sm: '100%' } }}
										src='./images/profile__post__left.jpg'
										variant='square'
									/>
									<Grid
										sx={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											justifyContent: 'center',
											textAlign: 'center',
											width: { xs: '100%', sm: '50%' },
											height: { xs: '200px', sm: '100%' }
										}}>
										<Typography variant='h6'>Start capturing and sharing your moments.</Typography>
										<Typography variant='body2'>Get the app to share your first photo or video.</Typography>
										<Grid
											item
											sx={{
												display: 'flex',
												flexDirection: 'row',
												alignItems: 'center',
												justifyContent: 'flex-start',
												mt: '20px'
											}}>
											<Avatar
												sx={{ width: 136, height: 44, mr: '8px' }}
												src='./images/appstore.png'
												alt='apple-store'
												variant='rounded'
											/>
											<Avatar
												sx={{ width: 136, height: 44 }}
												src='./images/googleplay.png'
												alt='google-play'
												variant='rounded'
											/>
										</Grid>
									</Grid>
								</Grid>
							</TabPanel>
							<TabPanel value='1'>
								{/*upload video panel */}
								<Grid
									container
									sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
									<Grid
										item
										sx={{
											width: '100%',
											maxWidth: '438px',
											height: '206px',
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center'
										}}>
										<VideoLabelOutlinedIcon sx={{ width: 62, height: 62 }} />
										<Typography sx={{ my: '24px' }} variant='body1'>
											Upload a Video
										</Typography>
										<Typography sx={{ mb: '28px' }} variant='body1'>
											Videos must be between 1 and 60 minutes long.
										</Typography>
										<Button
											sx={{
												bgcolor: 'info.main',
												color: 'white',
												py: '5px',
												px: '10px',
												'&:hover, &:active': { bgcolor: 'info.dark' }
											}}>
											Upload
										</Button>
									</Grid>
								</Grid>
							</TabPanel>
							<TabPanel value='2'>
								{/*Save panel */}
								<Grid container sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
									<Grid item sx={{ alignSelf: 'flex-start' }}>
										<Typography>Only you can see what you've saved</Typography>
									</Grid>
									<Grid
										item
										sx={{
											width: '100%',
											maxWidth: '350px',
											height: '184px',
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											mt: '60px'
										}}>
										<BookmarkBorderIcon sx={{ width: 62, height: 62, color: 'gray', my: '24px' }} />
										<Typography variant='h3' color='GrayText' sx={{ mb: '24px' }}>
											Save
										</Typography>
										<Typography variant='subtitle2'>
											Save photos and videos that you want to see again. No one is notified, and only you can see what
											you've saved.
										</Typography>
									</Grid>
								</Grid>
							</TabPanel>
							<TabPanel value='3'>
								{/*Photo of you panel */}
								<Grid container sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
									<Grid
										item
										sx={{
											width: '100%',
											maxWidth: '350px',
											height: '184px',
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											mt: '60px'
										}}>
										<PhotoCameraOutlinedIcon sx={{ width: 62, height: 62, color: 'gray', my: '24px' }} />
										<Typography variant='h3' color='GrayText' sx={{ mb: '24px' }}>
											Photos of you
										</Typography>
										<Typography variant='subtitle2'>When people tag you in photos, they'll appear here.</Typography>
									</Grid>
								</Grid>
							</TabPanel>
						</Grid>
					</TabContext>
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default Profile;
