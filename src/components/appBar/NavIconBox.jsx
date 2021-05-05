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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import CachedOutlinedIcon from '@material-ui/icons/CachedOutlined';
import { useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { alpha } from '@material-ui/core/styles';
const NavIconBox = () => {
	const [index, setIndex] = useState(0);
	const toggleActiveIndex = (event, newIndex) => {
		setIndex(newIndex);
	};
	const theme = useTheme();
	//open menu state and function
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<ToggleButtonGroup
			sx={{ width: { xs: 200, sm: 220 } }}
			value={index}
			exclusive
			onChange={toggleActiveIndex}
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
				id='basic-button'
				aria-controls='basic-menu'
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				value={4}
				aria-label='acount'>
				{index === 4 ? <AccountCircleIcon /> : <AccountCircleOutlinedIcon />}
			</ToggleButton>
			{/*Account dropdown menu */}
			<Menu
				sx={{
					'& .MuiPaper-root': {
						minWidth: 230,
						minHeight: 194,
						borderRadius: 2,
						'& .MuiListItem-root': {
							...theme.typography.body1,
							'& .MuiListItemIcon-root': {
								minWidth: 22,
								marginRight: theme.spacing(1)
							},
							'& .MuiSvgIcon-root': {
								fontSize: 22
							}
						}
					}
				}}
				anchorReference='anchorPosition'
				anchorPosition={{ top: 64, left: 1300 }}
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button'
				}}>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<AccountCircleOutlinedIcon />
					</ListItemIcon>
					<ListItemText>Profile</ListItemText>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<BookmarkBorderIcon />
					</ListItemIcon>
					<ListItemText>Saved</ListItemText>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<SettingsOutlinedIcon />
					</ListItemIcon>
					<ListItemText>Settings</ListItemText>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<CachedOutlinedIcon />
					</ListItemIcon>
					<ListItemText>Switch Accounts</ListItemText>
				</MenuItem>
				<Divider sx={{ borderColor: alpha(theme.palette.common.black, 0.5) }} />
				<MenuItem onClick={handleClose}>
					<ListItemText>Log Out</ListItemText>
				</MenuItem>
			</Menu>
		</ToggleButtonGroup>
	);
};

export default NavIconBox;
