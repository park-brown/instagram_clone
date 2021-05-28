import { Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import lodash from 'lodash';
export const RenderHeader = ({ activeStep }) => {
	const { chatRoom } = useSelector((state) => state.firestore.data);

	const name = lodash.map(chatRoom, (item) => {
		return item.nameList[1];
	});

	const render = () => {
		switch (activeStep) {
			case 0:
				return (
					<Typography
						variant='h6'
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%,-50%)',
							fontSize: { md: '1.2rem', sm: '1.2rem' }
						}}>
						chats
					</Typography>
				);

			case 1:
				return (
					<Typography
						variant='h6'
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%,-50%)',
							fontSize: { md: '1.2rem', sm: '1.2rem' }
						}}>
						New Messages
					</Typography>
				);
			case 2:
				return (
					<Typography
						variant='h6'
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%,-50%)',
							fontSize: { md: '1.2rem', sm: '1.2rem' }
						}}>
						{name[0]}
					</Typography>
				);
			default:
				return;
		}
	};

	return <>{render()}</>;
};
