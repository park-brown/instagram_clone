import React from 'react';
import TabPanel from './TabPanel';
import ChatRoom from './ChatRoom';

const ChatRoomTabPanel = ({ tabIndex, chatlist }) => {
	return (
		<React.Fragment>
			{chatlist.map((item, key) => (
				<TabPanel key={item.key} value={tabIndex} index={key}>
					<ChatRoom key={item.key} item={item} />
				</TabPanel>
			))}
		</React.Fragment>
	);
};

export default ChatRoomTabPanel;
