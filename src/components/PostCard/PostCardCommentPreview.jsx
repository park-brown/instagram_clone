import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, ButtonBase, Button, Divider } from '@material-ui/core';
import { formatDistanceToNow } from 'date-fns';
const useStyles = makeStyles({
	expanded: {
		display: 'none'
	},
	textShow: {
		display: 'inline'
	}
});
const PostCardCommentPreview = ({ host, caption, comments, date }) => {
	const [expanded, setExpanded] = React.useState(false);
	const size = comments.length;
	const createdAt = formatDistanceToNow(date, { addSuffix: true });

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
						{`${host}`}{' '}
						<Typography sx={{ fontSize: '0.8rem', color: 'GrayText', display: 'inline' }} component='div'>
							{`${caption}`}{' '}
							<Typography
								sx={{ fontSize: '0.8rem', color: 'GrayText' }}
								className={clsx({ [classes.textShow]: expanded, [classes.expanded]: !expanded })}>
								......
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
					View all {size} comments
				</Button>
				{/*follower comments */}
				<Box sx={{ width: '100%', height: 'auto', display: 'flex', flexDirection: 'column' }}>
					{comments.map((comment, index) => (
						<Box key={index} sx={{ display: 'flex' }}>
							<Typography sx={{ fontWeight: 600, fontSize: '0.8rem', display: 'inline' }}>
								{comment.displayName}{' '}
								<Typography sx={{ display: 'inline', fontSize: '0.8rem', color: 'GrayText' }} component='span'>
									{' '}
									{comment.comment}
								</Typography>
							</Typography>
						</Box>
					))}
				</Box>
				{/*Date  */}
				<Box>
					<Button sx={{ p: 0, fontSize: '0.8rem', color: 'gray', textTransform: 'uppercase' }}>{createdAt}</Button>
				</Box>
			</Box>
			<Divider sx={{ width: '100%', mt: '6px' }} />
		</>
	);
};

export default PostCardCommentPreview;
