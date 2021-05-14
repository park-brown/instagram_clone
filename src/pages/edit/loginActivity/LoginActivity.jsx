import React from 'react';
import { Grid, Typography, Box, Avatar, Button } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const LoginActivity = () => {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	return (
		<Grid container sx={{ height: '742px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
			<Grid
				item
				sx={{
					ml: { md: '68px', sm: '68px', xs: '32px' },
					mt: '68px',
					width: { md: 'calc(100% - 68px)', sm: 'calc(100% - 68px)', xs: 'calc(100% - 32px)' }
				}}>
				<Typography variant='h5' sx={{ mb: '30px' }}>
					Login Activity
				</Typography>
				<Typography variant='h6'>Where You're Logged in</Typography>
			</Grid>
			<Grid
				item
				sx={{
					flexGrow: 1,
					width: '100%',
					pt: { md: '32px', sm: '32px', xs: '32px' },
					pl: { md: '65px', sm: '65px', xs: '20px' },
					pb: { md: '35px', sm: '35px', xs: '32px' },
					pr: { md: '44px', sm: '32px', xs: '32px' }
				}}>
				<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1bh-content' id='panel1bh-header'>
						<Box
							sx={{ width: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
							<RoomOutlinedIcon sx={{ mr: '12px', '& .MuiSvgIcon-root': { width: '24px', height: '24px' } }} />
							<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
								{/*Address Geo point */}
								<Typography>Hong Kong</Typography>
								{/*active status and date*/}
								<Typography component='span' color='GrayText'>
									{' '}
									<Typography component='span' color='success.main'>
										Active now ·
									</Typography>
									This Windows
								</Typography>
							</Box>
						</Box>
					</AccordionSummary>
					<AccordionDetails>
						<Box sx={{ height: '240px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<Box sx={{ height: '200px' }}>
								<Avatar
									sx={{ height: '100%', width: '100%' }}
									src='/images/hongkong.png'
									alt='geo-point'
									variant='square'
								/>
							</Box>
							<Button sx={{ color: '#000', textTransform: 'capitalize' }}>Log out</Button>
						</Box>
					</AccordionDetails>
				</Accordion>
			</Grid>
		</Grid>
	);
};

export default LoginActivity;
