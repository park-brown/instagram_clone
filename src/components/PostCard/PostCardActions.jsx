import React, { useState } from 'react';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	FavoriteIcon: {
		color: (like) => {
			return like === true ? '#f50057' : 'rgba(0,0,0,0.54)';
		}
	}
});

const PostCardActions = () => {
	const [like, toggleLike] = useState(false);
	const classes = useStyles(like);

	const handleClick = () => {
		toggleLike((like) => !like);
	};
	return (
		<CardActions
			disableSpacing
			sx={{
				display: 'flex',
				px: 0,

				mb: '-10px',
				flexDirection: 'row',
				justifyContent: 'center',
				width: '100%',
				'& .MuiIconButton-root': {
					p: 0,
					width: 40,
					height: 40
				}
			}}>
			<IconButton
				onClick={handleClick}
				className={classes.FavoriteIcon}
				sx={{ marginLeft: '-10px', '&:hover': { color: 'secondary.main' } }}
				aria-label='add to favorites'>
				<FavoriteIcon />
			</IconButton>
			<IconButton sx={{ '&:hover': { color: 'common.black' } }} aria-label='comment'>
				<ModeCommentOutlinedIcon />
			</IconButton>
			<IconButton sx={{ '&:hover': { color: 'common.black' } }} aria-label='share'>
				<ShareIcon />
			</IconButton>

			<IconButton sx={{ '&:hover': { color: 'common.black' }, ml: 'auto' }} aria-label='bookmark'>
				<BookmarkBorderOutlinedIcon />
			</IconButton>
		</CardActions>
	);
};

export default PostCardActions;
