import * as React from 'react';
import { experimentalStyled as styled, alpha } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderColor: theme.palette.common.black,
	borderRadius: theme.shape.borderRadius,
	color: theme.palette.common.black,
	backgroundColor: alpha(theme.palette.common.black, 0.1),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.black, 0.15)
	},
	marginLeft: 0,
	height: 35,
	display: 'flex',
	alignItems: 'center',
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto'
	},
	[theme.breakpoints.down('sm')]: {
		display: 'none'
	}
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '18ch'
			}
		}
	}
}));

export default function SearchField() {
	return (
		<Search>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} />
		</Search>
	);
}
