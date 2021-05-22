import React from 'react';
import InstagramAppBar from '../../components/appBar/SearchAppBar';
import { Container, Grid, Box, Typography, IconButton, Button, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Skeleton from '@material-ui/core/Skeleton';
import SendIcon from '@material-ui/icons/Send';
const Chat = () => {
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
								borderBottom: 1,
								borderColor: '#e3e3e3',
								display: 'flex',
								pl: '16px',
								pr: '5px',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
								width: '100%'
							}}>
							<Typography variant='h6'>Chat</Typography>
							<Tooltip title='start a new chat' placement='right-end'>
								<IconButton>
									<AddIcon />
								</IconButton>
							</Tooltip>
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
						<SendIcon sx={{ width: 96, height: 96 }} />
						<Typography variant='h3'>Your Messages</Typography>
						<Typography variant='h6' sx={{ px: '10px' }}>
							Send private photos and messages to a friend or group.
						</Typography>
						<Button variant='contained' sx={{ mt: '30px' }}>
							Send Messages
						</Button>
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default Chat;
