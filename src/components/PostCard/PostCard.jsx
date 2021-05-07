import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import ButtonBase from '@material-ui/core/ButtonBase';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Divider from '@material-ui/core/Divider';
import InsertEmoticonSharpIcon from '@material-ui/icons/InsertEmoticonSharp';
export default function PostCard() {
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	return (
		<Card sx={{ width: '100%' }}>
			<CardHeader
				sx={{
					'& .MuiCardHeader-content': {
						cursor: 'pointer',
						'& .MuiCardHeader-title': {
							fontWeight: 550,
							'&:hover': {
								textDecoration: 'underline'
							}
						}
					}
				}}
				avatar={
					<Avatar sx={{ cursor: 'pointer' }} aria-label='recipe'>
						R
					</Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<MoreHorizIcon />
					</IconButton>
				}
				title='user name'
			/>
			<CardMedia
				sx={{
					height: 0,
					paddingTop: '56.25%' // 16:9
				}}
				image='/images/users/raphael/1.jpg'
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
				{/*View tally */}
				<Box sx={{ width: '100%', height: '18px', mb: '4px' }}>
					<Typography variant='body2' sx={{ fontWeight: 500 }}>
						2,583,404 views
					</Typography>
				</Box>
				{/*comment preview section */}
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
						<Typography sx={{ fontWeight: 600, fontSize: '0.8rem', display: 'inline' }}>
							gal_gadot{' '}
							<Typography sx={{ fontSize: '0.8rem', color: 'GrayText', display: 'inline' }}>
								Water is such a basic human need, what would you do without access to it?...{' '}
								<ButtonBase
									onClick={handleExpandClick}
									sx={{ p: 0, fontSize: '0.8rem', color: 'gray', textTransform: 'lowercase', display: 'inline' }}>
									more
								</ButtonBase>
							</Typography>
						</Typography>

						<Collapse sx={{ width: '100%' }} in={expanded} timeout='auto' unmountOnExit>
							<Typography sx={{ fontSize: '0.8rem', color: 'GrayText' }}>
								See what Ariana did on this week's IMPACT
							</Typography>
						</Collapse>
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
								<Typography sx={{ display: 'inline', fontSize: '0.8rem', color: 'GrayText' }}>
									Thought you might enjoy this :)
								</Typography>
							</Typography>
						</Box>
						{/*follower 2 */}
						<Box sx={{ display: 'flex' }}>
							<Typography sx={{ fontWeight: 600, fontSize: '0.8rem', display: 'inline' }}>
								ppersiaa{' '}
								<Typography sx={{ display: 'inline', fontSize: '0.8rem', color: 'GrayText' }}>
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
				{/*user comment section */}
				<Box sx={{ width: '100%', height: '40px', mt: '8px' }}>
					<Box sx={{ display: 'flex', height: '100%', alignItems: 'center' }}>
						{/*emoji box */}
						<Box>
							<IconButton sx={{ p: 0 }}>
								<InsertEmoticonSharpIcon />
							</IconButton>
						</Box>
						{/*add comment field */}
						<InputBase sx={{ flexGrow: 1, ml: '8px' }} placeholder='Add a comment' />
						{/*Post button target pseudo-classes style with no white space*/}
						<Button
							sx={{
								color: 'info.main',
								textTransform: 'capitalize',
								'& :hover': { color: 'info.dark' },
								'&.Mui-disabled': { opacity: 0.3, color: 'info.main' }
							}}>
							Post
						</Button>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
}
