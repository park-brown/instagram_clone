import React from 'react';
import { Typography, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ChatSearchUser from './ChatSearchUser';
import ChatRoom from './ChatRoom';
const Content = ({ activeStep, handleNext, checked, handleChange }) => {
	const render = () => {
		switch (activeStep) {
			case 0:
				return (
					<React.Fragment>
						<SendIcon sx={{ width: 96, height: 96 }} />
						<Typography variant='h3'>Your Messages</Typography>
						<Typography variant='h6' sx={{ px: '10px' }}>
							Send private photos and messages to a friend or group.
						</Typography>
						<Button
							onClick={handleNext}
							variant='contained'
							sx={{
								mt: '30px',
								bgcolor: 'info.main',
								'& .MuiButton-label': { textTransform: 'capitalize' },
								'&:hover,&:active': { bgcolor: 'info.dark' }
							}}>
							Send Messages
						</Button>
					</React.Fragment>
				);
			case 1:
				return <ChatSearchUser activeStep={activeStep} checked={checked} handleChange={handleChange} />;
			case 2:
				return <ChatRoom />;
			default:
				return null;
		}
	};
	return render();
};

export default Content;
