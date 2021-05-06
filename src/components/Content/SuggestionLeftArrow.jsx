import React from 'react';
import { IconButton } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
const SuggestionLeftArrow = ({ handleLeftClick }) => {
	return (
		<>
			<IconButton
				onClick={handleLeftClick}
				sx={{
					position: 'absolute',
					top: '40%',
					cursor: 'pointer',
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
		</>
	);
};

export default SuggestionLeftArrow;
