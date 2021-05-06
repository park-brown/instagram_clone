import React from 'react';
import { Paper, Grid, Typography, Button, Box, IconButton } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import SuggestionCard from './SuggestionCard';
const Suggestion = () => {
	return (
		<React.Fragment>
			<Paper sx={{ height: 280, mt: '3rem', border: '1px solid  #e0e0e0' }}>
				<Grid
					item
					container
					flexDirection='row'
					justifyContent='space-between'
					alignItems='center'
					sx={{ px: '12px', py: '8px', mb: '12px' }}>
					<Typography color='#9e9e9e' fontWeight={600} fontSize='14px'>
						Suggestions For You
					</Typography>
					<Button
						sx={{
							fontSize: '12px',
							fontWeight: 600,
							lineHeight: '13px',
							color: 'info.main',
							textTransform: 'capitalize'
						}}>
						See All
					</Button>
				</Grid>
				{/*suggestion card slider */}
				<Grid container flexDirection='row' sx={{ height: 208 }}>
					<Box
						sx={{
							width: '100%',
							height: '100%',
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'flex-start',
							position: 'relative',
							pl: '24px'
						}}>
						<IconButton
							sx={{
								position: 'absolute',
								top: '40%',
								right: 0,
								'& .MuiIconButton-label': {
									bgcolor: '#9e9e9e',
									color: 'white',
									borderRadius: '50%',
									'& .MuiSvgIcon-root': {
										fontSize: '20px'
									}
								}
							}}>
							<KeyboardArrowRight />
						</IconButton>

						{/*cards go here  */}
						<Box
							sx={{
								width: '100%',
								height: '100%',
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'flex-start',
								position: 'relative',
								overflow: 'hidden'
							}}>
							{/*first card */}
							<SuggestionCard />
						</Box>

						<IconButton
							sx={{
								position: 'absolute',
								top: '40%',
								left: 0,
								'& .MuiIconButton-label': {
									bgcolor: '#9e9e9e',
									color: 'white',
									borderRadius: '50%',
									'& .MuiSvgIcon-root': {
										fontSize: '20px'
									}
								}
							}}>
							<KeyboardArrowLeft />
						</IconButton>
					</Box>
				</Grid>
			</Paper>
		</React.Fragment>
	);
};

export default Suggestion;
