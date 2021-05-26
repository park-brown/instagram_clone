import React from 'react';
import { Box, Avatar, Typography } from '@material-ui/core';

const ChatListItem = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'flex-start',
				width: '100%',
				py: '8px',
				px: '16px'
			}}>
			<Avatar variant='circular' sx={{ width: '48px', height: '48px' }} />
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					textAlign: 'left',
					textTransform: 'capitalize',
					flexGrow: 1,
					height: '100%',
					ml: '10px'
				}}>
				<Typography variant='subtitle1' width={116} height={24}>
					fullname
				</Typography>
				<Typography variant='subtitle2' width={84} height={24}>
					username
				</Typography>
			</Box>
		</Box>
	);
};

export default ChatListItem;
