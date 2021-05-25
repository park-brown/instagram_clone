import React, { useEffect } from 'react';
import InstagramAppBar from '../../components/appBar/SearchAppBar';
import { useTheme } from '@material-ui/core/styles';
import { Container, Grid, Box, IconButton, Button, Tooltip, Paper, MobileStepper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { renderHeader } from './SidebarHeader';
import { renderFriendList } from './SideBarMessenger';
import Content from './Content';
const Chat = () => {
	const theme = useTheme();
	const [checked, setChecked] = React.useState(true);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};
	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setChecked(!checked);
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
				sx={{
					height: { md: '80vh', sm: '80vh', xs: '90vh' },
					mt: { md: '2rem', sm: '2rem', xs: '1rem' },
					px: { xs: 0, sm: '1rem', md: '1rem' }
				}}
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
							{renderHeader(activeStep)}

							<MobileStepper
								variant='dots'
								steps={2}
								position='static'
								activeStep={activeStep}
								sx={{
									width: '100%',
									height: '60px',
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
											disabled={!checked}
											sx={{
												textTransform: 'capitalize',
												color: 'info.main',
												display: `${activeStep === 2 ? 'none' : 'flex'}`,
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

							{renderFriendList(activeStep)}
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
						<Content handleNext={handleNext} activeStep={activeStep} checked={checked} handleChange={handleChange} />
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default Chat;
