import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, ButtonBase, Button, Divider } from '@material-ui/core';

const useStyles = makeStyles({
	expanded: {
		display: 'none'
	},
	textShow: {
		display: 'inline'
	}
});
const PostCardCommentPreview = () => {
	const [expanded, setExpanded] = React.useState(false);

	const classes = useStyles();
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	return (
		<>
			<Box
				sx={{
					width: '100%',
					height: 'auto',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-start',
					alignItems: 'flex-start'
				}}>
				{/*poster comment */}
				<Box sx={{ width: '100%', height: 'auto', display: 'flex', flexWrap: 'wrap' }}>
					<Typography sx={{ fontWeight: 600, fontSize: '0.8rem', display: 'inline' }} component='div'>
						gal_gadot{' '}
						<Typography sx={{ fontSize: '0.8rem', color: 'GrayText', display: 'inline' }} component='div'>
							Water is such a basic human need, what would you do without access to it?{' '}
							<Typography
								sx={{ fontSize: '0.8rem', color: 'GrayText' }}
								className={clsx({ [classes.textShow]: expanded, [classes.expanded]: !expanded })}>
								watch it on my platforms and share your thoughts with me
							</Typography>
							<ButtonBase
								className={clsx({ [classes.expanded]: expanded })}
								onClick={handleExpandClick}
								sx={{ p: 0, fontSize: '0.8rem', color: 'gray', textTransform: 'lowercase', display: 'inline' }}>
								...more
							</ButtonBase>
						</Typography>
					</Typography>
				</Box>
				{/*View all comment button */}
				<Button sx={{ px: 0, py: 0, my: '6px', fontSize: '14px', color: 'GrayText', textTransform: 'capitalize' }}>
					View all 455 comments
				</Button>
				{/*follower comments */}
				<Box sx={{ width: '100%', height: 'auto', display: 'flex', flexDirection: 'column' }}>
					{/*follower 1 */}
					<Box sx={{ display: 'flex' }}>
						<Typography sx={{ fontWeight: 600, fontSize: '0.8rem', display: 'inline' }}>
							poshcloset_la{' '}
							<Typography sx={{ display: 'inline', fontSize: '0.8rem', color: 'GrayText' }} component='span'>
								Thought you might enjoy this :)
							</Typography>
						</Typography>
					</Box>
					{/*follower 2 */}
					<Box sx={{ display: 'flex' }}>
						<Typography sx={{ fontWeight: 600, fontSize: '0.8rem', display: 'inline' }}>
							ppersiaa{' '}
							<Typography sx={{ display: 'inline', fontSize: '0.8rem', color: 'GrayText' }} component='span'>
								{' '}
								Another wonderful woman making an impact in your country.
							</Typography>
						</Typography>
					</Box>
				</Box>
				{/*Date  */}
				<Box>
					<Button sx={{ p: 0, fontSize: '0.8rem', color: 'gray', textTransform: 'uppercase' }}>11 HOURS AGO</Button>
				</Box>
			</Box>
			<Divider sx={{ width: '100%', mt: '1rem' }} />
		</>
	);
};

export default PostCardCommentPreview;
