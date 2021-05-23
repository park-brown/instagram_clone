import React from 'react';
import { Grid, IconButton, InputBase, Box, Button } from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import ImageIcon from '@material-ui/icons/Image';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
const ChatRoom = () => {
	return (
		<Grid
			container
			sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<Grid item sx={{ width: '100%', flexGrow: 1 }}>
				{/*message area */}
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
