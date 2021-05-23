import React, { useEffect } from 'react';
import InstagramAppBar from '../../components/appBar/SearchAppBar';
import { useTheme } from '@material-ui/core/styles';
import { Container, Grid, Box, Typography, IconButton, Button, Tooltip, Paper, MobileStepper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Skeleton from '@material-ui/core/Skeleton';
import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
const Chat = () => {
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};
	useEffect(() => {
		document.title = `Inbox • Chats`;
	}, []);
	return (
		<React.Fragment>
			<InstagramAppBar />
			<Container
				fluid='true'
				sx={{ height: { md: '80vh', sm: '80vh', xs: '75vh' }, mt: '2rem' }}
				maxWidth='md'
				component='main'>
				<Grid
					container
					sx={{
						border: 1,
						borderColor: '#e3e3e3',
						borderRadius: '4px',
						height: '100%',
						flexWrap: 'nowrap',
						flexDirection: {
							md: 'row',
							sm: 'row',
							xs: 'column',
							alignItems: { md: 'center', sm: 'center', xs: 'flex-start' }
						}
					}}
					component='section'>
					{/* Sidebar go here */}

					<Grid
						component={Paper}
						item
						md={4}
						sm={4}
						xs={4}
						sx={{
							maxWidth: { xs: '100%' },
							display: 'flex',
							flexDirection: { md: 'column', sm: 'column', xs: 'row' },
							alignItems: { md: 'center', sm: 'center', xs: 'center' },
							borderRight: { md: 1, sm: 1, xs: 0 },
							borderColor: { md: '#e3e3e3', sm: '#e3e3e3', xs: null },
							flexBasis: { xs: 'auto', sm: '33.33%', md: '33.33%' }
						}}>
						{/*header */}
						<Box
							sx={{
								width: '100%',
								position: 'relative'
							}}>
							{activeStep === 0 ? (
								<Typography
									variant='h6'
									sx={{
										position: 'absolute',
										top: '50%',
										left: '50%',
										transform: 'translate(-50%,-50%)',
										fontSize: { md: '0.8rem', sm: '0.8rem' }
									}}>
									chats
								</Typography>
							) : (
								<Typography
									variant='h6'
									sx={{
										position: 'absolute',
										top: '50%',
										left: '50%',
										transform: 'translate(-50%,-50%)',
										fontSize: { md: '0.8rem', sm: '0.8rem' }
									}}>
									New Messages
								</Typography>
							)}

							<MobileStepper
								variant='dots'
								steps={3}
								position='static'
								activeStep={activeStep}
								sx={{
									width: '100%',
									maxHeight: '44px',
									borderBottom: 1,
									borderColor: '#e3e3e3',
									flexGrow: 1,
									'& .MuiMobileStepper-dots': { '& > *': { display: 'none' } }
								}}
								nextButton={
									activeStep === 0 ? (
										<Tooltip title='start a new chat' placement='right-end' onClick={handleNext}>
											<IconButton>
												<AddIcon />
											</IconButton>
										</Tooltip>
									) : (
										<Button
											size='small'
											onClick={handleNext}
											disabled={activeStep === 1}
											sx={{
												textTransform: 'capitalize',
												'&.Mui-disabled': { color: 'info.main', opacity: 0.5 }
											}}>
											Next
										</Button>
									)
								}
								backButton={
									<IconButton size='small' onClick={handleBack} disabled={activeStep === 0}>
										{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
									</IconButton>
								}
							/>
						</Box>

						{/*Messenger container */}

						<Box
							sx={{
								display: { md: 'flex', sm: 'flex', xs: 'none' },
								flexDirection: 'column',
								justifyContent: 'flex-start',
								alignItems: 'center',
								flexGrow: 1,
								width: '100%'
							}}>
							{/*Messenger 1 */}
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
							{/*messenage 2 */}
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
							{/*Messenger 3 */}
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
						</Box>
					</Grid>

					{/* Content go here */}

					<Grid
						component={Paper}
						item
						sm={8}
						md={8}
						xs={8}
						sx={{
							maxWidth: { xs: '100%' },
							flexGrow: 1,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center'
						}}>
						{activeStep === 0 ? (
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
						) : (
							<p>to be continue</p>
						)}
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default Chat;
