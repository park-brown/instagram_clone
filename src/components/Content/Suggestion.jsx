import React, { useState } from 'react';
import { Paper, Grid, Typography, Button, Box } from '@material-ui/core';
import SuggestionCard from './SuggestionCard';
import SuggestionRightArrow from './SuggestionRightArrow';
import SuggestionLeftArrow from './SuggestionLeftArrow';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
const Suggestion = () => {
	const [index, setIndex] = useState(0);
	const maxIndex = 9;
	const theme = useTheme();
	const matches_600 = useMediaQuery(theme.breakpoints.down('xs'));
	const handleRightClick = () => {
		if (index >= maxIndex) {
			return index;
		}
		setIndex(index + 1);
	};

	const handleLeftClick = () => {
		if (index <= 0) return;
		setIndex(index - 1);
	};

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
						<SuggestionRightArrow handleRightClick={handleRightClick} />
						{/*cards go here  */}
						<Box
							sx={{
								width: '100%',
								height: '100%',
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								gap: '12px',
								justifyContent: 'flex-start',
								position: 'relative',
								cursor: 'pointer',
								overflow: 'hidden'
							}}>
							{/*first card group */}
							<SuggestionCard index={index} matches_600={matches_600} />
							<SuggestionCard index={index} matches_600={matches_600} />
							<SuggestionCard index={index} matches_600={matches_600} />
							{/*second card group */}
							<SuggestionCard index={index} matches_600={matches_600} />
							<SuggestionCard index={index} matches_600={matches_600} />
							<SuggestionCard index={index} matches_600={matches_600} />
						</Box>
						<SuggestionLeftArrow handleLeftClick={handleLeftClick} />
					</Box>
				</Grid>
			</Paper>
		</React.Fragment>
	);
};

export default Suggestion;
