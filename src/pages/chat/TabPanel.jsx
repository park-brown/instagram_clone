import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
const ChatRoomTabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<Grid
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
			sx={{ width: '100%', height: '100%' }}>
			{value === index && <>{children}</>}
		</Grid>
	);
};

ChatRoomTabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired
};

export default ChatRoomTabPanel;
