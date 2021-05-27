import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import lodash from 'lodash';
export const useChatList = (activeStep, checked) => {
	const [userToChat, setUserToChat] = useState({});

	const { users } = useSelector((state) => state.firestore.data);
	useEffect(() => {
		if (activeStep === 1 && checked === true) {
			setUserToChat({ ...userToChat, ...users });
		}
	}, [users, activeStep, checked]);
	// add userToChat cause infinte update,just ignore console-warning
	const chatList = lodash.map(userToChat, (value, key) => {
		return {
			key: key,
			...value
		};
	});

	return chatList;
};
