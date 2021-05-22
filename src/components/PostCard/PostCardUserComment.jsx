import React, { useState } from 'react';
import { Box, IconButton, InputBase, Button } from '@material-ui/core';
import InsertEmoticonSharpIcon from '@material-ui/icons/InsertEmoticonSharp';
import Picker from 'emoji-picker-react';
import { useFormik } from 'formik';
const PostCardUserComment = () => {
	const [chosenEmoji, setChosenEmoji] = useState(null);
	const [showEmoji, setShowEmoji] = useState(false);
	const toggleEmoji = () => {
		setShowEmoji((showEmoji) => !showEmoji);
	};
	const formik = useFormik({
		initialValues: {
			comment: ''
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		}
	});

	const onEmojiClick = (event, emojiObject) => {
		setChosenEmoji(emojiObject);

		formik.values.comment += `${emojiObject.emoji}`;
	};
	return (
		<Box sx={{ width: '100%', height: '40px', mt: '8px' }} component='form' onSubmit={formik.handleSubmit}>
			<Box sx={{ display: 'flex', height: '100%', alignItems: 'center', position: 'relative' }}>
				{/*emoji box */}
				<Box>
					<IconButton onClick={toggleEmoji} sx={{ p: 0 }}>
						<InsertEmoticonSharpIcon />
					</IconButton>
				</Box>
				<Picker
					pickerStyle={{
						position: 'absolute',
						left: '-16px',
						bottom: '40px',
						display: `${showEmoji === false ? 'none' : 'flex'} `
					}}
					onEmojiClick={onEmojiClick}
				/>
				{/*add comment field */}
				<InputBase
					id='comment'
					name='comment'
					type='text'
					onChange={formik.handleChange}
					value={formik.values.comment}
					sx={{ flexGrow: 1, ml: '8px' }}
					placeholder='Add a comment'
				/>
				{/*Post button target pseudo-classes style with no white space*/}
				<Button
					type='submit'
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
	);
};

export default PostCardUserComment;
