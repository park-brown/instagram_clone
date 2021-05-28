import React from 'react';
import { Box, Skeleton } from '@material-ui/core';
const ChatSearchDropDownSkeleton = () => {
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
			<Skeleton variant='circular' width={56} height={56} />
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					flexGrow: 1,
					height: '100%',
					ml: '10px'
				}}>
				<Skeleton variant='text' width={116} height={24} />
				<Skeleton variant='text' width={84} height={24} />
			</Box>
		</Box>
	);
};

export default ChatSearchDropDownSkeleton;
