import { configureStore } from '@reduxjs/toolkit';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
export default configureStore({
	reducer: {
		firebase: firebaseReducer,
		firestore: firestoreReducer
	},
	// Note that this will replace all default middleware
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false
		})
});
