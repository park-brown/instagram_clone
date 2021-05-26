import React from 'react';
import TabPanel from './TabPanel';
import ChatRoom from './ChatRoom';
const ChatRoomTabPanel = ({ tabIndex }) => {
	return (
		<React.Fragment>
			<TabPanel value={tabIndex} index={0}>
				<ChatRoom />
			</TabPanel>
			<TabPanel value={tabIndex} index={1}>
				<ChatRoom />
			</TabPanel>
		</React.Fragment>
	);
};

export default ChatRoomTabPanel;
