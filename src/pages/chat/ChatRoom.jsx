import React from 'react';
import { Grid, IconButton, InputBase, Box, Button, Avatar, Typography } from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useSelector } from 'react-redux';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
const ChatRoom = () => {
	//Message Receiver
	const MR = useSelector((state) => state.firestore.ordered.users);
	const { username } = MR[0];
	return (
		<Grid
			container
			sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			{/*Header */}
			<Grid
				item
				sx={{
					height: '60px',
					width: '100%',
					display: { md: 'flex', sm: 'flex', xs: 'none' },
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					borderBottom: 1,
					borderColor: '#e3e3e3'
				}}>
				{/*Message receiver info box */}
				<Box sx={{ display: 'flex', alignItems: 'center', pl: '1rem', height: 40, alignSelf: 'center' }}>
					<Avatar
						src='/images/avatars/default.png'
						alt='avatar'
						sx={{ width: 24, height: 24, mr: '10px', cursor: 'pointer' }}
					/>
					<Typography variant='subtitle1' sx={{ cursor: 'pointer' }}>
						{username}
					</Typography>
				</Box>
				<IconButton sx={{ height: '48px' }}>
					<MoreHorizIcon />
				</IconButton>
			</Grid>
			<Grid item sx={{ width: '100%', flexGrow: 0, height: `calc(100% - 126px)` }}>
				{/*message area */}
				<SimpleBar forceVisible='y' autoHide={false} style={{ height: '100%', maxHeight: '588px' }}></SimpleBar>
			</Grid>
			<Grid
				item
				sx={{
					height: '50px',
					width: '90%',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					mb: '1rem',
					mx: '0.5rem',

					border: 1,
					borderColor: '#e3e3e3',
					borderRadius: '30px'
				}}>
				{/*input area */}
				<IconButton>
					<InsertEmoticonIcon />
				</IconButton>
				<InputBase multiline maxRows={3} sx={{ pl: '6px', flexGrow: 1 }} placeholder='Message...'></InputBase>
				<Box sx={{ display: 'flex' }}>
					<Button sx={{ mr: '5px', color: 'info.main', textTransform: 'capitalize' }}>Send</Button>
				</Box>
			</Grid>
		</Grid>
	);
};

export default ChatRoom;
