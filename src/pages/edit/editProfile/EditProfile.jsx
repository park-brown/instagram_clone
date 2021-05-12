import React from 'react';
import { Grid, Box, Avatar, Typography, Button, InputBase } from '@material-ui/core';
const EditProfile = () => {
	return (
		<Grid container flexDirection='column' component='article'>
			<Grid item xs sx={{ maxHeight: '42px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
				<Box sx={{ ml: { md: '122px', xs: '20px' }, mr: { md: '24px', xs: '20px' } }}>
					<Avatar src='./images/avatars/default.png'></Avatar>
				</Box>
				<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
					<Typography>createdAt2021</Typography>
					<Button sx={{ p: '0px', textTransform: 'capitalize', color: 'info.main' }}>Change Profile photo</Button>
				</Box>
			</Grid>
			<Grid item xs sx={{ height: 'auto', my: '16px' }} component='form'>
				<Box
					sx={{
						height: 'auto',
						display: 'flex',
						flexDirection: { md: 'row', xs: 'column' },
						alignItems: { md: 'center', xs: 'flex-start' },
						mb: '16px'
					}}>
					{/*Label Box */}
					<Box
						sx={{
							height: '100%',
							px: { md: '32px', xs: '0px' },
							mt: '6px',
							textAlign: 'right',
							alignSelf: { md: 'flex-start' },
							flexBasis: { xs: 0, md: '194px' }
						}}>
						<Typography component='label' variant='subtitle1'>
							Name
						</Typography>
					</Box>
					{/*Input Box */}
					<Box
						sx={{
							flex: '1 1',
							height: '100%',
							pr: '60px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-start'
						}}>
						<InputBase
							placeholder='fullname'
							sx={{ border: '1px solid #e3e3e3', borderRadius: '4px', pl: '6px', width: '20ch' }}
						/>
						<Box sx={{ mt: '16px', mb: '8px' }}>
							<Typography variant='caption' sx={{ display: 'block', fontSize: '0.5rem', color: 'GrayText', mb: '8px' }}>
								Help people discover your account by using the name you're known by: either your full name, nickname, or
								business name.
							</Typography>
							<Typography variant='caption' sx={{ display: 'block', fontSize: '0.5rem', color: 'GrayText' }}>
								You can only change your name twice within 14 days.
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box
					sx={{
						height: { md: '92px', xs: 'auto' },
						display: 'flex',
						flexDirection: { md: 'row', xs: 'column' },
						alignItems: { md: 'center', xs: 'flex-start' },
						mb: '16px'
					}}>
					{/*Label Box */}
					<Box
						sx={{
							height: '100%',
							px: { md: '32px', sm: '0px' },
							mt: '6px',
							textAlign: 'right',
							alignSelf: { md: 'flex-start' },
							flexBasis: { md: '194px', sm: 'auto', xs: 'auto' }
						}}>
						<Typography component='label' variant='subtitle1'>
							Username
						</Typography>
					</Box>
					{/*Username input box */}
					<Box
						sx={{
							flex: '1 1',
							height: '100%',
							pr: '60px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-start'
						}}>
						<InputBase
							placeholder='username'
							sx={{ border: '1px solid #e3e3e3', borderRadius: '4px', pl: '6px', width: '20ch' }}></InputBase>
						<Typography variant='caption' sx={{ display: 'block', fontSize: '0.5rem', color: 'GrayText', mt: '16px' }}>
							In most cases, you'll be able to change your username back to createat2021 for another 14 days.{' '}
						</Typography>
					</Box>
				</Box>
				<Box
					sx={{
						height: { md: '32px', sm: 'auto', xs: 'auto' },
						display: 'flex',
						flexDirection: { md: 'row', xs: 'column' },
						alignItems: { md: 'center', xs: 'flex-start' },
						mb: '16px'
					}}>
					{/*Label Box */}
					<Box
						sx={{
							height: { md: '100%', sm: 'auto' },
							px: { md: '32px', sm: '0px' },
							mt: '6px',
							textAlign: 'right',
							alignSelf: { md: 'flex-start' },
							flexBasis: { md: '194px', sm: 'auto', xs: 'auto' }
						}}>
						<Typography component='label' variant='subtitle1'>
							Website
						</Typography>
					</Box>
					{/*Website input */}
					<Box
						sx={{
							flex: '1 1',
							height: '100%',
							pr: '60px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-start'
						}}>
						<InputBase
							placeholder='website'
							sx={{ border: '1px solid #e3e3e3', borderRadius: '4px', pl: '6px' }}></InputBase>
					</Box>
				</Box>
				<Box
					sx={{
						height: { md: '60px', sm: 'auto', xs: 'auto' },
						display: 'flex',
						flexDirection: { md: 'row', xs: 'column' },
						alignItems: { md: 'center', xs: 'flex-start' },
						mb: '16px'
					}}>
					{/*Label Box */}
					<Box
						sx={{
							height: { md: '100%', sm: 'auto' },
							px: { md: '32px', sm: '0px' },
							mt: '6px',
							textAlign: 'right',
							alignSelf: { md: 'flex-start' },
							flexBasis: { md: '194px', sm: 'auto', xs: 'auto' }
						}}>
						<Typography component='label' variant='subtitle1'>
							Bio
						</Typography>
					</Box>
					{/*Bio input */}
					<Box
						sx={{
							flex: '1 1',
							height: '100%',
							pr: '60px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-start'
						}}>
						<InputBase
							placeholder='Bio'
							multiline={true}
							rows={3}
							sx={{
								border: '1px solid #e3e3e3',
								borderRadius: '4px',
								pl: '6px',
								height: '100%',
								width: { md: '100%', sm: '23ch', xs: '23ch' }
							}}></InputBase>
					</Box>
				</Box>
				<Box
					sx={{
						height: { md: '75px', sm: 'auto', xs: 'auto' },
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						mb: '16px',
						mt: { sm: '16px', xs: '12px' }
					}}>
					{/*Label Box */}
					<Box
						sx={{
							height: '100%',
							px: { md: '32px', sm: '0px' },
							mt: '6px',
							textAlign: 'right',
							alignSelf: { md: 'flex-start' },
							flexBasis: { md: '194px', sm: 'auto', xs: 'auto' }
						}}></Box>
					<Box
						sx={{
							flex: '1 1',
							height: '100%',
							pr: '60px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-start'
						}}>
						<Typography
							variant='caption'
							sx={{ display: 'block', fontSize: '0.8rem', color: 'GrayText', fontWeight: 600, mt: '6px' }}>
							Personal Information
						</Typography>
						<Typography variant='caption' sx={{ display: 'block', fontSize: '0.5rem', color: 'GrayText' }}>
							Provide your personal information, even if the account is used for a business, a pet or something else.
							This won't be a part of your public profile.
						</Typography>
					</Box>
				</Box>
				<Box
					sx={{
						height: { md: '32px', sm: 'auto', xs: 'auto' },
						display: 'flex',
						flexDirection: { md: 'row', xs: 'column' },
						alignItems: { md: 'center', xs: 'flex-start' },
						mb: '16px'
					}}>
					{/*Label Box */}
					<Box
						sx={{
							height: { md: '100%', sm: 'auto' },
							px: { md: '32px', sm: '0px' },
							mt: '6px',
							textAlign: 'right',
							alignSelf: { md: 'flex-start' },
							flexBasis: { md: '194px', sm: 'auto', xs: 'auto' }
						}}>
						<Typography component='label' variant='subtitle1'>
							email
						</Typography>
					</Box>
					<Box
						sx={{
							flex: '1 1',
							height: '100%',
							pr: '60px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-start'
						}}>
						<InputBase
							placeholder='email'
							sx={{ border: '1px solid #e3e3e3', borderRadius: '4px', pl: '6px' }}></InputBase>
					</Box>
				</Box>
				<Box
					sx={{
						height: '32px',
						display: 'flex',
						flexDirection: { md: 'row', xs: 'column' },
						alignItems: { md: 'center', xs: 'flex-start' },
						mb: '16px'
					}}>
					{/*Label Box */}
					<Box
						sx={{
							height: { md: '100%', sm: 'auto' },
							px: { md: '32px', sm: '0px' },
							mt: '6px',
							textAlign: 'right',
							alignSelf: { md: 'flex-start' },
							flexBasis: { md: '194px', sm: 'auto', xs: 'auto' }
						}}>
						<Typography component='label' variant='subtitle1'>
							phone number
						</Typography>
					</Box>
					<Box
						sx={{
							flex: '1 1',
							height: '100%',
							pr: '60px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-start'
						}}>
						<InputBase
							placeholder='phone number'
							sx={{ border: '1px solid #e3e3e3', borderRadius: '4px', pl: '6px' }}></InputBase>
					</Box>
				</Box>
				<Box
					sx={{
						height: { md: '48px', sm: 'auto', xs: 'auto' },
						display: 'flex',
						flexDirection: { md: 'row', xs: 'column' },
						alignItems: { md: 'center', xs: 'flex-start' },
						mb: '16px'
					}}>
					{/*Label Box */}
					<Box
						sx={{
							height: { md: '100%', sm: 'auto' },
							px: { md: '32px', sm: '0px' },
							mt: '6px',
							textAlign: 'right',
							alignSelf: { md: 'flex-start' },
							flexBasis: { md: '194px', sm: 'auto', xs: 'auto' }
						}}>
						<Typography component='label' variant='subtitle1'>
							Gender
						</Typography>
					</Box>
					<Box
						sx={{
							flex: '1 1',
							height: '100%',
							pr: '60px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-start'
						}}>
						<InputBase
							placeholder='gender'
							sx={{ border: '1px solid #e3e3e3', borderRadius: '4px', pl: '6px' }}></InputBase>
					</Box>
				</Box>

				<Box
					sx={{
						height: { md: '52.8px', xs: '90px' },
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						mb: '16px'
					}}>
					{/*Label Box */}
					<Box
						sx={{
							height: '100%',
							px: { md: '32px', sm: '0px' },
							mt: '6px',
							textAlign: 'right',
							alignSelf: { md: 'flex-start' },
							flexBasis: { md: '194px', sm: '0px', xs: '0px' }
						}}></Box>
					<Box
						sx={{
							flex: '1 1',
							height: '100%',
							pr: '60px',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center'
						}}>
						<Button
							disabled
							sx={{
								bgcolor: 'info.main',
								color: 'white',
								textTransform: 'capitalize',
								'&:hover,&:active': { bgcolor: 'info.dark', color: 'white' },
								'&.Mui-disabled': {
									color: 'white',
									opacity: 0.6
								}
							}}>
							sumbit
						</Button>
						<Button
							sx={{
								bgcolor: 'white',
								color: 'info.main',
								textTransform: 'capitalize',
								fontWeight: 600,
								'&:hover,&:active': { color: 'info.dark' },
								'&.Mui-disabled': {
									opacity: 0.6
								}
							}}>
							Temporarily disable my account
						</Button>
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
};

export default EditProfile;
