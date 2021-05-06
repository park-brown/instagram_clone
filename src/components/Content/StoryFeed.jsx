import React from 'react';
import { Paper, Box, Avatar, Typography } from '@material-ui/core';
const StoryFeed = () => {
	return (
		<React.Fragment>
			<Box sx={{ py: '16px', mb: '24px', height: 118 }}>
				<Paper sx={{ border: '1px solid  #e0e0e0', height: 118 }}>
					<Box
						sx={{ ml: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', cursor: 'pointer' }}>
						<Avatar sx={{ width: 56, height: 56, mt: '12px' }} src='/images/avatars/default.png' />
						<Typography sx={{ fontSize: '12px', color: 'GrayText' }}>user name</Typography>
					</Box>
				</Paper>
			</Box>
		</React.Fragment>
	);
};

export default StoryFeed;
