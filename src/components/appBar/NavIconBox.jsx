import React, { useState } from 'react';
import ToggleButton from '@material-ui/core/ToggleButton';
import ToggleButtonGroup from '@material-ui/core/ToggleButtonGroup';
import HomeIcon from '@material-ui/icons/Home';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import ExploreIcon from '@material-ui/icons/Explore';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { FavoriteOutlined } from '@material-ui/icons';
import FavoriteIcon from '@material-ui/icons/Favorite';
const NavIconBox = () => {
	const [index, setIndex] = useState(0);
	const handleClick = (event, newIndex) => {
		setIndex(newIndex);
	};
	return (
		<ToggleButtonGroup
			sx={{ width: { xs: 200, sm: 220 } }}
			value={index}
			exclusive
			onChange={handleClick}
			aria-label='nav-icon'>
			<ToggleButton
				sx={{
					border: 'none',
					'&.Mui-selected': {
						bgcolor: 'white'
					}
				}}
				value={0}
				aria-label='home'>
				{index === 0 ? <HomeIcon /> : <HomeOutlinedIcon />}
			</ToggleButton>
			<ToggleButton
				sx={{
					border: 'none',
					'&.Mui-selected': {
						bgcolor: 'white'
					}
				}}
				value={1}
				aria-label='message'>
				{index === 1 ? <ChatBubbleIcon /> : <ChatBubbleOutlineIcon />}
			</ToggleButton>
			<ToggleButton
				sx={{
					border: 'none',
					'&.Mui-selected': {
						bgcolor: 'white'
					}
				}}
				value={2}
				aria-label='explore'>
				{index === 2 ? <ExploreIcon /> : <ExploreOutlinedIcon />}
			</ToggleButton>
			<ToggleButton
				sx={{
					border: 'none',
					'&.Mui-selected': {
						bgcolor: 'white'
					}
				}}
				value={3}
				aria-label='fav'>
				{index === 3 ? <FavoriteIcon /> : <FavoriteOutlined />}
			</ToggleButton>
			<ToggleButton
				sx={{
					border: 'none',
					'&.Mui-selected': {
						bgcolor: 'white'
					}
				}}
				value={4}
				aria-label='acount'>
				{index === 4 ? <AccountCircleIcon /> : <AccountCircleOutlinedIcon />}
			</ToggleButton>
		</ToggleButtonGroup>
	);
};

export default NavIconBox;
