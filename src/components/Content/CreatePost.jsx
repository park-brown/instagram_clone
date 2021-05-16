import React from 'react';
import { Paper, Box, Avatar, InputBase } from '@material-ui/core';
import CameraIcon from '@material-ui/icons/Camera';
import LinkIcon from '@material-ui/icons/Link';
import Tooltip from '@material-ui/core/Tooltip';
import { useHistory } from 'react-router-dom';
const CreatePost = () => {
	const history = useHistory();
	return (
		<React.Fragment>
			<Box sx={{ py: '16px', mb: '24px', height: 56 }}>
				<Paper sx={{ border: '1px solid  #e0e0e0', height: 56 }}>
					<Box
						sx={{
							display: 'flex',
							height: '100%',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'flex-start',
							cursor: 'pointer',
							p: '8px'
						}}>
						<Avatar sx={{ width: 40, height: 40, mr: '8px' }} src='/images/avatars/default.png' />
						<InputBase
							sx={{ height: 40, border: 1, borderColor: '#e3e3e3', borderRadius: '4px', flexGrow: 1, pl: '8px' }}
							placeholder='Create Post'
							onClick={() => {
								history.push('/submit');
							}}
						/>
						<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
							<Box
								sx={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
								<Tooltip title='create a media post' arrow>
									<CameraIcon sx={{ width: '20px', height: '20px', color: 'primary.main' }} />
								</Tooltip>
							</Box>

							<Box
								sx={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
								<LinkIcon sx={{ width: '20px', height: '20px' }} />
							</Box>
						</Box>
					</Box>
				</Paper>
			</Box>
		</React.Fragment>
	);
};

export default CreatePost;
