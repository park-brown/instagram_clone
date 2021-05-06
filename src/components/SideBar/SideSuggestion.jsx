import React from 'react';
import { Grid, Avatar, Button, Typography, List, ListItem, Box } from '@material-ui/core';
const SideSuggestion = () => {
	return (
		<React.Fragment>
			<Grid container flexDirection='column' sx={{ width: 325, height: 290 }}>
				<Grid
					item
					container
					flexDirection='row'
					justifyContent='space-between'
					alignItems='center'
					sx={{ px: '12px', py: '4px' }}>
					<Typography color='#9e9e9e' fontWeight={600} fontSize='14px'>
						Suggestions For You
					</Typography>
					<Button
						sx={{
							mr: '16px',
							fontSize: '12px',
							fontWeight: 600,
							lineHeight: '13px',
							color: '#37474f',
							textTransform: 'capitalize'
						}}>
						See All
					</Button>
				</Grid>
				{/*Suggestion list Container */}
				<Grid item>
					<Box sx={{ width: 321, height: 240, display: 'flex', flexDirection: 'column' }}>
						<List sx={{ py: '8px', px: '16px' }}>
							<ListItem sx={{ width: 321 }}>
								<Avatar
									sx={{ width: 32, height: 32, mr: '12px' }}
									src='/images/avatars/default.png'
									alt='suggestion-user-photo'
								/>
								<Box sx={{ flexGrow: 1, textAlign: 'left', alignItems: 'center' }}>
									<Typography variant='body2' sx={{ fontWeight: 500 }}>
										user name
									</Typography>
									<Typography variant='body2' color='GrayText' sx={{ fontSize: '12px' }}>
										Popular
									</Typography>
								</Box>
								<Button
									sx={{
										fontSize: '12px',
										fontWeight: 600,
										lineHeight: '13px',
										color: 'info.main',
										textTransform: 'capitalize',
										mr: '24px'
									}}>
									Follow
								</Button>
							</ListItem>
						</List>
					</Box>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default SideSuggestion;
