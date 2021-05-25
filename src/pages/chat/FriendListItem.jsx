import React from 'react';

import { Box, Avatar, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
const FriendListItem = () => {
	const targetedUser = useSelector((state) => state.firestore.ordered.users);
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'flex-start',
				width: '100%',
				py: '8px',
				px: '16px',
				borderBottom: 1,
				borderColor: '#e3e3e3',
				bgcolor: '#eeeeee'
			}}>
			<Avatar variant='circular' sx={{ width: '48px', height: '48px' }} />
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					flexGrow: 1,
					height: '100%',
					ml: '10px'
				}}>
				<Typography variant='body1' width={116} height={24}>
					{targetedUser[0].fullName}
				</Typography>
				<Typography variant='body2' width={84} height={24}>
					{targetedUser[0].username}
				</Typography>
			</Box>
		</Box>
	);
};

export default FriendListItem;
