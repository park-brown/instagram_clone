import React from 'react';
import { Grid, Typography, Box, Button } from '@material-ui/core';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
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
const PrivacyAndSecurity = () => {
	const theme = useTheme();
	return (
		<Grid container sx={{ flexDirection: 'column', alignItems: 'flex-start' }} component='main'>
			{/*Account privacy section */}
			<Grid item component='section' sx={{ mb: '22px', pb: '22px', borderBottom: 1, borderColor: '#e3e3e3' }}>
				<Typography sx={{ mb: '26px' }} variant='h5'>
					Account Privacy
				</Typography>
				<Box>
					<FormControlLabel
						sx={{ '& .MuiTypography-root': { ...theme.typography.body1 } }}
						control={<Checkbox color='default' size='small' />}
						label='Private account'
					/>
					<Typography variant='subtitle2' color='GrayText' sx={{ mt: '8px' }}>
						When your account is private, only people you approve can see your photos and videos on Instagram. Your
						existing followers won't be affected.
					</Typography>
				</Box>
			</Grid>
			{/*Activity status section */}
			<Grid item component='section' sx={{ mb: '22px', pb: '22px', borderBottom: 1, borderColor: '#e3e3e3' }}>
				<Typography sx={{ mb: '26px' }} variant='h5'>
					Activity Status
				</Typography>
				<Box>
					<FormControlLabel
						sx={{ '& .MuiTypography-root': { ...theme.typography.body1 } }}
						control={<Checkbox color='default' size='small' defaultChecked />}
						label='show activity status'
					/>
					<Typography variant='subtitle2' color='GrayText' sx={{ mt: '8px' }}>
						Allow accounts you follow and anyone you message to see when you were last active on Instagram apps. When
						this is turned off, you won't be able to see the activity status of other accounts.
					</Typography>
				</Box>
			</Grid>
			{/*Story share section */}
			<Grid
				item
				component='section'
				sx={{ mb: '22px', pb: '22px', borderBottom: 1, borderColor: '#e3e3e3', width: '100%' }}>
				<Typography sx={{ mb: '26px' }} variant='h5'>
					Story Sharing
				</Typography>
				<Box>
					<FormControlLabel
						sx={{ '& .MuiTypography-root': { ...theme.typography.body1 } }}
						control={<Checkbox color='default' size='small' defaultChecked />}
						label='Allow Sharing'
					/>
					<Typography variant='subtitle2' color='GrayText' sx={{ mt: '8px' }}>
						Let people share your story as messages
					</Typography>
				</Box>
			</Grid>
			{/*Comments section */}
			<Grid
				item
				component='section'
				sx={{ mb: '22px', pb: '22px', borderBottom: 1, borderColor: '#e3e3e3', width: '100%' }}>
				<Typography sx={{ mb: '26px' }} variant='h5'>
					Comments
				</Typography>
				<Box>
					<Button sx={{ p: 0, color: 'info.main', textTransform: 'capitalize', fontSize: '1.2rem' }}>
						Edit Comment Settings
					</Button>
				</Box>
			</Grid>
			{/*Photos of you section */}
			<Grid
				item
				component='section'
				sx={{ mb: '22px', pb: '22px', borderBottom: 1, borderColor: '#e3e3e3', width: '100%' }}>
				<FormControl component='fieldset'>
					<FormLabel
						component='legend'
						sx={{
							...theme.typography.h5,
							color: 'rgba(0,0,0,1.2)',
							mb: '12px',
							'&.Mui-focused': { color: 'rgba(0,0,0,1.2)' }
						}}>
						Photos of You
					</FormLabel>
					<RadioGroup defaultValue='Add Automatically' aria-label='likes' name='radio-buttons-group-for-likes'>
						<FormControlLabel value='Add Automatically' control={<StyledRadio />} label='Add Automatically' />
						<FormControlLabel value='Add Manually' control={<StyledRadio />} label='Add Manually' />
					</RadioGroup>
					<Typography variant='subtitle2' color='GrayText' sx={{ mt: '8px' }}>
						Choose how you want photos of you added to your profile.{' '}
						<Button component='span' sx={{ p: 0, color: 'info.main', textTransform: 'capitalize' }}>
							Learn more
						</Button>{' '}
						about Photos of You.
					</Typography>
				</FormControl>
			</Grid>
			{/*Account data section */}
			<Grid
				item
				component='section'
				sx={{ mb: '22px', pb: '22px', borderBottom: 1, borderColor: '#e3e3e3', width: '100%' }}>
				<Typography sx={{ mb: '26px' }} variant='h5'>
					Account Data
				</Typography>
				<Box>
					<Button sx={{ p: 0, color: 'info.main', textTransform: 'capitalize', fontSize: '1.2rem' }}>
						View Account Data
					</Button>
				</Box>
			</Grid>
			{/*Two-Factor Authentication */}
			<Grid
				item
				component='section'
				sx={{ mb: '22px', pb: '22px', borderBottom: 1, borderColor: '#e3e3e3', width: '100%' }}>
				<Typography sx={{ mb: '26px' }} variant='h5'>
					Two-Factor Authentication
				</Typography>
				<Box>
					<Button sx={{ p: 0, color: 'info.main', textTransform: 'capitalize', fontSize: '1.2rem' }}>
						Edit Settings
					</Button>
				</Box>
			</Grid>
			{/*Data Download section */}
			<Grid
				item
				component='section'
				sx={{ mb: '22px', pb: '22px', borderBottom: 1, borderColor: '#e3e3e3', width: '100%' }}>
				<Typography sx={{ mb: '26px' }} variant='h5'>
					Data Download
				</Typography>
				<Box>
					<Button sx={{ p: 0, color: 'info.main', textTransform: 'capitalize', fontSize: '1.2rem' }}>
						Request Download
					</Button>
				</Box>
			</Grid>
			{/*Privacy and Security Help section */}
			<Grid
				item
				component='section'
				sx={{ mb: '22px', pb: '22px', borderBottom: 1, borderColor: '#e3e3e3', width: '100%' }}>
				<Typography sx={{ mb: '26px' }} variant='h5'>
					Privacy and Security Help
				</Typography>
				<Box>
					<Button sx={{ p: 0, color: 'info.main', textTransform: 'capitalize', fontSize: '1.2rem' }}>Support</Button>
				</Box>
			</Grid>
		</Grid>
	);
};

export default PrivacyAndSecurity;
