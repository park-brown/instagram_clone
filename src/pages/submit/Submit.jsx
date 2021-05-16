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
	InputBase
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
	console.log(below_600);
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
							<TabPanel value='1' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
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
							<TabPanel value='2'>Item Two</TabPanel>
							<TabPanel value='3'>Item Three</TabPanel>
						</TabContext>
					</Paper>
				</Grid>
				{/*side content */}
				<Grid item lg={4} md={4}></Grid>
			</Grid>
		</Container>
	);
};

export default Submit;
