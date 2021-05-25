import { Typography } from '@material-ui/core';
export const renderHeader = (activeStep) => {
	switch (activeStep) {
		case 0:
			return (
				<Typography
					variant='h6'
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%,-50%)',
						fontSize: { md: '1.2rem', sm: '1.2rem' }
					}}>
					chats
				</Typography>
			);

		case 1:
			return (
				<Typography
					variant='h6'
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%,-50%)',
						fontSize: { md: '1.2rem', sm: '1.2rem' }
					}}>
					New Messages
				</Typography>
			);
		default:
			return;
	}
};
