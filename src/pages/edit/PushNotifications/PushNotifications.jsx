import React from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useTheme } from '@material-ui/core/styles';
const Icon = styled('span')({
	borderRadius: '50%',
	width: 18,
	height: 18,
	boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
	backgroundColor: '#f5f8fa',
	backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
	'.Mui-focusVisible &': {
		outline: '2px auto rgba(19,124,189,.6)',
		outlineOffset: 2
	},
	'input:hover ~ &': {
		backgroundColor: '#ebf1f5'
	},
	'input:disabled ~ &': {
		boxShadow: 'none',
		background: 'rgba(206,217,224,.5)'
	}
});

const CheckedIcon = styled(Icon)({
	backgroundColor: '#2196f3',
	backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
	'&:before': {
		display: 'block',
		width: 18,
		height: 18,
		backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
		content: '""'
	},
	'input:hover ~ &': {
		backgroundColor: '#2196f3'
	}
});

// Inspired by blueprintjs
function StyledRadio(props) {
	return (
		<Radio
			sx={{
				'&:hover': {
					bgcolor: 'transparent'
				}
			}}
			disableRipple
			color='default'
			checkedIcon={<CheckedIcon />}
			icon={<Icon />}
			{...props}
		/>
	);
}

const PushNotifications = () => {
	const theme = useTheme();
	return (
		<Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
			{/*section likes */}
			<Grid item>
				<FormControl component='fieldset'>
					<FormLabel
						component='legend'
						sx={{
							...theme.typography.h5,
							color: 'rgba(0,0,0,1.2)',
							mb: '12px',
							'&.Mui-focused': { color: 'rgba(0,0,0,1.2)' }
						}}>
						Likes
					</FormLabel>
					<RadioGroup defaultValue='from everyone' aria-label='likes' name='radio-buttons-group-for-likes'>
						<FormControlLabel value='off' control={<StyledRadio />} label='Off' />
						<FormControlLabel value='from people I follow' control={<StyledRadio />} label='From people I follow' />
						<FormControlLabel value='from everyone' control={<StyledRadio />} label='From everyone' />
					</RadioGroup>
				</FormControl>
				<Typography variant='body1' sx={{ mt: '10px', color: 'GrayText' }}>
					johnappleseed liked your photo.
				</Typography>
			</Grid>
			<Divider sx={{ width: '100%', mt: '20px' }} />
			{/*Comment section */}
			<Grid item sx={{ mt: '20px' }}>
				<FormControl component='fieldset'>
					<FormLabel
						component='legend'
						sx={{
							...theme.typography.h5,
							color: 'rgba(0,0,0,1.2)',
							mb: '12px',
							'&.Mui-focused': { color: 'rgba(0,0,0,1.2)' }
						}}>
						Comments
					</FormLabel>
					<RadioGroup defaultValue='from everyone' aria-label='likes' name='radio-buttons-group-for-likes'>
						<FormControlLabel value='off' control={<StyledRadio />} label='Off' />
						<FormControlLabel value='from people I follow' control={<StyledRadio />} label='From people I follow' />
						<FormControlLabel value='from everyone' control={<StyledRadio />} label='From everyone' />
					</RadioGroup>
				</FormControl>
				<Typography variant='body1' sx={{ mt: '10px', color: 'GrayText' }}>
					johnappleseed commented: "Nice shot!"
				</Typography>
			</Grid>
			<Divider sx={{ width: '100%', mt: '20px' }} />
			{/*Comment like section */}
			<Grid item sx={{ mt: '20px' }}>
				<FormControl component='fieldset'>
					<FormLabel
						component='legend'
						sx={{
							...theme.typography.h5,
							color: 'rgba(0,0,0,1.2)',
							mb: '12px',
							'&.Mui-focused': { color: 'rgba(0,0,0,1.2)' }
						}}>
						Comment likes
					</FormLabel>
					<RadioGroup defaultValue='from people I follow' aria-label='likes' name='radio-buttons-group-for-likes'>
						<FormControlLabel value='off' control={<StyledRadio />} label='Off' />
						<FormControlLabel value='from people I follow' control={<StyledRadio />} label='From people I follow' />
					</RadioGroup>
				</FormControl>
				<Typography variant='body1' sx={{ mt: '10px', color: 'GrayText' }}>
					johnappleseed liked your comment: "Nice shot!"
				</Typography>
			</Grid>
			<Divider sx={{ width: '100%', mt: '20px' }} />
		</Grid>
	);
};

export default PushNotifications;
