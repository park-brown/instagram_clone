import React from 'react';
import ChatListItem from './ChatListItem';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const ChatListTabs = ({ tabIndex, handleTabChange, chatlist }) => {
	const { users } = useSelector((state) => state.firestore.data);
	const { chatRoom } = useSelector((state) => state.firestore.data);
	//effect for users change
	useEffect(() => {
		let isMounted = true;
		if (users) {
			const key = Object.keys(users)[0];
			const index = chatlist.findIndex((item) => item.key === key);
			if (isMounted) {
				handleTabChange(null, index);
			}
		}
		return () => {
			isMounted = false;
		};
	}, [chatlist, users, handleTabChange]);

	return (
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
				'& .MuiTab-root': { maxWidth: '100%', '&.Mui-selected': { color: '#000' } },
				'& .MuiTabs-indicator': { bgcolor: '#000' }
			}}>
			{/* <Tab label={<ChatListItem sx={{ maxWidth: '100%' }} />} />
				<Tab label={<ChatListItem sx={{ maxWidth: '100%' }} />} /> */}
			{chatlist.map((item) => (
				<Tab key={item.key} label={<ChatListItem key={item.key} item={item} sx={{ maxWidth: '100%' }} />} />
			))}
		</Tabs>
	);
};

export default ChatListTabs;
