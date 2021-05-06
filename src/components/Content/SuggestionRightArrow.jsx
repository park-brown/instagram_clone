import React from 'react';
import { IconButton } from '@material-ui/core';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
const SuggestionRightArrow = ({ handleRightClick }) => {
	return (
		<IconButton
			onClick={handleRightClick}
			sx={{
				position: 'absolute',
				zIndex: 1,
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
	);
};

export default SuggestionRightArrow;
