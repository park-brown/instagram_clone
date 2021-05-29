import React from 'react';
import { Box, Avatar, Typography, Radio } from '@material-ui/core';

const ChatSearchHistory = ({ chatlist, activeStep, handleTabChange }) => {
	const [selectedValue, setSelectedValue] = React.useState('');
	const index = chatlist.findIndex((item) => item.userId === selectedValue);
	const handleChange = (event) => {
		setSelectedValue(event.target.value);
	};

	return (
		<>
			{chatlist.map((item, index) => {
				return (
					<Box
						key={item.key}
						sx={{
							display: `${activeStep === 2 ? 'none' : 'flex'}`,
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
								justifyContent: 'center',
								alignItems: 'flex-start',
								flexGrow: 1,
								height: '100%',
								ml: '10px'
							}}>
							<Typography variant='body1'>{item.username}</Typography>
						</Box>
						<Radio
							checked={selectedValue === item.userId}
							onChange={(e) => {
								handleChange(e);
								handleTabChange(e, index);
							}}
							value={item.userId}
							name='radio-buttons'
							inputProps={{ 'aria-label': { index } }}
						/>
					</Box>
				);
			})}
		</>
	);
};

export default ChatSearchHistory;
