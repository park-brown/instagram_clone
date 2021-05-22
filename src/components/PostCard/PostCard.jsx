import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Box from '@material-ui/core/Box';
import PostCardActions from './PostCardActions';
import PostCardCommentPreview from './PostCardCommentPreview';
import { useHistory } from 'react-router';
import PostCardUserComment from './PostCardUserComment';

export default function PostCard({ info }) {
	const history = useHistory();
	const { host, dateCreated, imageSrc, caption, comments } = info;
	const handleClick = () => {
		history.push(`/${host}/`);
	};
	return (
		<Card sx={{ width: '100%', my: '1.5rem' }}>
			<CardHeader
				sx={{
					'& .MuiCardHeader-content': {
						cursor: 'pointer'
					}
				}}
				avatar={
					<Avatar
						onClick={handleClick}
						sx={{ cursor: 'pointer' }}
						aria-label='recipe'
						src={`/images/avatars/${host}.jpg`}></Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<MoreHorizIcon />
					</IconButton>
				}
				title={
					<Typography
						onClick={handleClick}
						sx={{
							fontWeight: 550,
							fontSize: '1rem',
							'&:hover': {
								textDecoration: 'underline'
							}
						}}>
						{host}{' '}
					</Typography>
				}
			/>
			<CardMedia
				sx={{
					height: 0,
					paddingTop: '56.25%' // 16:9
				}}
				image={imageSrc}
				title='images'
			/>

			<CardContent
				sx={{
					height: 'auto',
					py: 0,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'flex-start'
				}}>
				{/*Action area */}
				<PostCardActions />
				{/*View tally */}
				<Box sx={{ width: '100%', height: '18px', mb: '4px' }}>
					<Typography variant='body2' sx={{ fontWeight: 500 }}>
						2,583,404 views
					</Typography>
				</Box>
				{/*comment preview section */}
				<PostCardCommentPreview date={dateCreated} host={host} caption={caption} comments={comments} />
				{/*user comment section */}
				<PostCardUserComment />
			</CardContent>
		</Card>
	);
}
