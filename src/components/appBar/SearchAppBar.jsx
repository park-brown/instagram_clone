import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ScrollTop from './ScrollTop';
import { Avatar } from '@material-ui/core';
import SearchField from './Search';
import NavIconBox from './NavIconBox';
export default function InstagramAppBar(props) {
	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar sx={{ bgcolor: 'white', height: 60 }}>
				<Toolbar>
					<Container fluid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
						{/* instagram logo box */}
						<Box sx={{ width: 103, height: 29, cursor: 'pointer', flexShrink: 0 }}>
							<Avatar
								variant='rounded'
								sx={{ width: '100%', height: '100%', display: 'block' }}
								src='/images/logo.png'
								alt='instagram-logo'
							/>
						</Box>
						{/*Search field */}
						<SearchField />
						{/*Navigation icon box */}
						<NavIconBox />
					</Container>
				</Toolbar>
			</AppBar>
			<Toolbar id='back-to-top-anchor' />

			<ScrollTop {...props}>
				<Fab color='secondary' size='small' aria-label='scroll back to top'>
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
		</React.Fragment>
	);
}
