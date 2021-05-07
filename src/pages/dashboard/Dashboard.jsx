import { Container, Grid } from '@material-ui/core';
import React from 'react';
import InstagramAppBar from '../../components/appBar/SearchAppBar';
import StoryFeed from '../../components/Content/StoryFeed';
import Suggestion from '../../components/Content/Suggestion';
import PostCard from '../../components/PostCard/PostCard';
import AccountBar from '../../components/SideBar/AccountBar';
import SideSuggestion from '../../components/SideBar/SideSuggestion';
const Dashboard = () => {
	return (
		<React.Fragment>
			<InstagramAppBar />
			<Container fluid='true' sx={{ height: '100vh', mt: '2rem' }} maxWidth='md' component='main'>
				<Grid container justifyContent='center' sx={{ height: '100%' }} component='section'>
					<Grid item sm={12} md={8} xs={12} sx={{ sm: { pr: '20px' } }}>
						{/* Content go here */}
						<StoryFeed />
						<Suggestion />
						{/*Post card go here */}
						<Grid container sx={{ height: '100vh', mt: '1.5rem', flexDirection: 'column' }}>
							<PostCard />
						</Grid>
					</Grid>
					{/* Sidebar only visible when screen sizes are greater than 960 */}
					<Grid item md={4} sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }}>
						{/* Sidebar go here */}
						<AccountBar />
						<SideSuggestion />
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default Dashboard;
