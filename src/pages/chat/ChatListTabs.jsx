import React from 'react';
import ChatListItem from './ChatListItem';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
const ChatListTabs = ({ tabIndex, handleTabChange }) => {
	return (
		<React.Fragment>
			<Tabs
				value={tabIndex}
				onChange={handleTabChange}
				orientation='vertical'
				variant='scrollable'
				scrollButtons='auto'
				aria-label='basic tabs example'
				sx={{
					width: '100%',
					'& .MuiTabs-scrollButtons': { display: 'none' },
					'& .MuiTab-root.Mui-selected': { color: '#000' },
					'& .MuiTabs-indicator': { bgcolor: '#000' }
				}}>
				<Tab label={<ChatListItem sx={{ maxWidth: '100%' }} />} />
				<Tab label={<ChatListItem sx={{ maxWidth: '100%' }} />} />
			</Tabs>
		</React.Fragment>
	);
};

export default ChatListTabs;
