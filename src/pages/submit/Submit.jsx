import React from 'react';
import {
	Container,
	Grid,
	Box,
	Typography,
	Button,
	ToggleButton,
	ToggleButtonGroup,
	Paper,
	InputBase,
	Input,
	Divider
} from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import CommentIcon from '@material-ui/icons/Comment';
import ImageIcon from '@material-ui/icons/Image';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import LinkIcon from '@material-ui/icons/Link';
import FormatListBulletedSharpIcon from '@material-ui/icons/FormatListBulletedSharp';
import FormatListNumberedSharpIcon from '@material-ui/icons/FormatListNumberedSharp';
import GavelSharpIcon from '@material-ui/icons/GavelSharp';
import { useTheme } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import * as yup from 'yup';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import { FormatQuote } from '@material-ui/icons';
const validationSchema = yup.object({
	title: yup.string('title').max(300, 'title should be less than 300 characters').required('title is required')
});

const Submit = () => {
	const [value, setValue] = React.useState('1');
	const theme = useTheme();
	const below_600 = useMediaQuery(theme.breakpoints.down('sm'));

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const formik = useFormik({
		initialValues: {
			title: ''
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		}
	});
	const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

	const handleFormat = (event, newFormats) => {
		setFormats(newFormats);
	};
	return (
		<Container fluid='true' maxWidth='lg' sx={{}}>
			<Grid container sx={{ py: '24px', px: { xs: 0, sm: '20px' } }}>
				{/*post content */}
				<Grid item lg={8} md={8} sm={12} xs={12}>
					{/*Create a post Header */}
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
							my: '16px',
							pb: '10px',
							borderBottom: 1,
							borderColor: '#e3e3e3'
						}}>
						<Typography variant='h5'>Create a post</Typography>
						<Button sx={{ color: 'info.main' }}>
							Drafts{' '}
							<Box
								sx={{
									ml: '4px',
									bgcolor: '#878A8C',
									color: '#FFFFFF',
									fontSize: '16px',
									p: '1px 3px',
									lineHeight: '18px'
								}}>
								0
							</Box>
						</Button>
					</Box>
					{/*Post Box */}
					<Paper>
						<TabContext value={value}>
							<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
								<TabList
									onChange={handleChange}
									aria-label='lab API tabs example'
									sx={{
										'& .MuiTabs-flexContainer': {
											justifyContent: { md: 'space-between', sm: 'space-around', xs: 'space-around' },
											'& .MuiTab-wrapper': { flexDirection: 'row', '& > *:first-child': { mb: '0px', mr: '6px' } }
										}
									}}>
									<Tab icon={<CommentIcon />} label={below_600 ? '' : 'Post'} value='1' />
									<Tab icon={<ImageIcon />} label={below_600 ? '' : 'Images & Video'} value='2' />
									<Tab icon={<LinkIcon />} label={below_600 ? '' : 'Link'} value='3' />
								</TabList>
							</Box>
							<TabPanel value='1'>
								{/*Post Area */}
								<InputBase
									id='title'
									name='title'
									placeholder='title'
									inputProps={{ maxLength: '300' }}
									value={formik.values.title}
									onChange={formik.handleChange}
									multiline
									endAdornment={
										<Box sx={{ p: '8px', color: 'GrayText', fontWeight: 500 }}>{formik.values.title.length}/300</Box>
									}
									maxRows={3}
									sx={{
										alignSelf: 'stretch',
										border: 1,
										width: '100%',
										borderColor: '#e3e3e3',
										borderRadius: '6px',
										pl: '6px',
										py: '5px',
										'&:hover,&:focus': {
											borderColor: '#000'
										}
									}}
								/>
								{/*post writeboard */}
								<Box
									sx={{
										alignSelf: 'stretch',
										border: 1,
										display: 'flex',
										flexDirection: 'column',
										borderColor: '#e3e3e3',
										borderRadius: '6px',
										mt: '12px',
										px: '6px',
										py: '5px',
										'&:hover,&:focus': {
											borderColor: '#000'
										}
									}}>
									{/*Toolbox area */}

									<ToggleButtonGroup
										value={formats}
										onChange={handleFormat}
										aria-label='text formatting'
										sx={{
											display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex' },
											alignSelf: 'stretch',

											'& .MuiToggleButtonGroup-grouped:last-of-type': {
												marginLeft: 'auto',
												borderLeft: 1,
												color: 'info.main',
												borderColor: '#e3e3e3',
												textTransform: 'capitalize',
												fontWeight: 'bold',
												'&:hover, &:focus': {
													color: 'info.main'
												}
											}
										}}>
										<ToggleButton value='bold' aria-label='bold'>
											<FormatBoldIcon />
										</ToggleButton>
										<ToggleButton value='italic' aria-label='italic'>
											<FormatItalicIcon />
										</ToggleButton>
										<ToggleButton value='underlined' aria-label='underlined'>
											<FormatUnderlinedIcon />
										</ToggleButton>
										<ToggleButton value='bullet-list' aria-label='bullet-list'>
											<FormatListBulletedSharpIcon />
										</ToggleButton>
										<ToggleButton value='number-list' aria-label='number-list'>
											<FormatListNumberedSharpIcon />
										</ToggleButton>
										<ToggleButton value='add-quote' aria-label='add-quote'>
											<FormatQuote />
										</ToggleButton>

										<ToggleButton value='markdown-mode' aria-label='markdown-mode'>
											markdown mode
										</ToggleButton>
									</ToggleButtonGroup>

									{/*text area */}
									<Box sx={{ height: 'auto', display: 'flex', mt: '12px' }}>
										<InputBase
											fullWidth
											multiline
											placeholder='Text(optional)'
											sx={{ alignSelf: 'stretch', display: 'flex', alignItems: 'flex-start', minHeight: '136px' }}
										/>
									</Box>
								</Box>
								{/*Action area */}
								<Box
									sx={{
										height: '56px',
										alignSelf: 'stretch',
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center'
									}}>
									<Button
										disabled
										variant='contained'
										sx={{ ml: 'auto', '&.Mui-disabled': { opacity: 0.5, bgcolor: '#3f51b5', color: '#fff' } }}>
										Post
									</Button>
								</Box>
							</TabPanel>
							{/*Image and video panel */}
							<TabPanel value='2'>
								{/*Post Area */}
								<InputBase
									id='title'
									name='title'
									placeholder='title'
									inputProps={{ maxLength: '300' }}
									value={formik.values.title}
									onChange={formik.handleChange}
									multiline
									endAdornment={
										<Box sx={{ p: '8px', color: 'GrayText', fontWeight: 500 }}>{formik.values.title.length}/300</Box>
									}
									maxRows={3}
									sx={{
										alignSelf: 'stretch',
										border: 1,
										width: '100%',
										borderColor: '#e3e3e3',
										borderRadius: '6px',
										pl: '6px',
										py: '5px',
										'&:hover,&:focus': {
											borderColor: '#000'
										}
									}}
								/>
								{/*Drop and Drag image box*/}
								<Box
									sx={{
										alignSelf: 'stretch',
										border: 1,
										display: 'flex',
										flexDirection: 'column',
										borderColor: '#e3e3e3',
										borderRadius: '6px',
										mt: '12px',
										px: '6px',
										py: '5px',
										'&:hover,&:focus': {
											borderColor: '#000'
										}
									}}>
									{/*text area */}
									<Box sx={{ height: 'auto', display: 'flex', mt: '12px' }}>
										<Box
											sx={{
												alignSelf: 'stretch',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												minHeight: '136px',
												width: '100%'
											}}>
											<Typography color='primary.main' sx={{ mr: '8px' }}>
												Drag and drop images or{' '}
											</Typography>

											<label htmlFor='contained-button-file'>
												<Input
													sx={{ display: 'none' }}
													accept='image/*'
													id='contained-button-file'
													multiple
													type='file'
												/>
												<Button variant='outlined' component='span'>
													Upload
												</Button>
											</label>
										</Box>
									</Box>
								</Box>
								{/*Action area */}
								<Box
									sx={{
										height: '56px',
										alignSelf: 'stretch',
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center'
									}}>
									<Button
										disabled
										variant='contained'
										sx={{ ml: 'auto', '&.Mui-disabled': { opacity: 0.5, bgcolor: '#3f51b5', color: '#fff' } }}>
										Post
									</Button>
								</Box>
							</TabPanel>
							{/*Link panel */}
							<TabPanel value='3'>
								<InputBase
									id='title'
									name='title'
									placeholder='title'
									inputProps={{ maxLength: '300' }}
									value={formik.values.title}
									onChange={formik.handleChange}
									multiline
									endAdornment={
										<Box sx={{ p: '8px', color: 'GrayText', fontWeight: 500 }}>{formik.values.title.length}/300</Box>
									}
									maxRows={3}
									sx={{
										alignSelf: 'stretch',
										border: 1,
										width: '100%',
										borderColor: '#e3e3e3',
										borderRadius: '6px',
										pl: '6px',
										py: '5px',
										'&:hover,&:focus': {
											borderColor: '#000'
										}
									}}
								/>
								{/*post writeboard */}
								<Box
									sx={{
										alignSelf: 'stretch',
										border: 1,
										display: 'flex',
										flexDirection: 'column',
										borderColor: '#e3e3e3',
										borderRadius: '6px',
										mt: '12px',
										px: '6px',
										py: '5px',
										'&:hover,&:focus': {
											borderColor: '#000'
										}
									}}>
									{/*text area */}
									<Box sx={{ height: 'auto', display: 'flex', mt: '12px' }}>
										<InputBase
											fullWidth
											multiline
											placeholder='Url'
											sx={{ alignSelf: 'stretch', display: 'flex', alignItems: 'flex-start', minHeight: '36px' }}
										/>
									</Box>
								</Box>
								{/*Action area */}
								<Box
									sx={{
										height: '56px',
										alignSelf: 'stretch',
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center'
									}}>
									<Button
										disabled
										variant='contained'
										sx={{ ml: 'auto', '&.Mui-disabled': { opacity: 0.5, bgcolor: '#3f51b5', color: '#fff' } }}>
										Post
									</Button>
								</Box>
							</TabPanel>
						</TabContext>
					</Paper>
				</Grid>
				{/*side content */}
				<Grid item lg={4} md={4}>
					<Paper sx={{ ml: '24px', p: '12px' }}>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<GavelSharpIcon sx={{ width: 30, height: 30, mr: '12px' }} />
							<Typography variant='h6'>Posting rule</Typography>
						</Box>
						<Divider sx={{ mt: '6px' }} />
						<Box sx={{ display: 'flex', flexDirection: 'column' }}>
							<Typography variant='body1' sx={{ py: '10px', px: '5px' }}>
								1. Remember the human
							</Typography>
							<Divider />
							<Typography sx={{ py: '10px', px: '5px' }}>2. Behave like you would in real life</Typography>
							<Divider />
							<Typography sx={{ py: '10px', px: '5px' }}>3. Look for the original source of content</Typography>
							<Divider />
							<Typography sx={{ py: '10px', px: '5px' }}>4. Search for duplicates before posting</Typography>
							<Divider />
							<Typography sx={{ py: '10px', px: '5px' }}>5. Read the community’s rules</Typography>
							<Divider />
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Submit;
