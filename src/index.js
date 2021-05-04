import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';
//firebase config
const fbConfig = {
	apiKey: 'AIzaSyA0amfWemR_sP3-NfQT8Q1GWT5mNijIoyo',
	authDomain: 'instagram-6e300.firebaseapp.com',
	projectId: 'instagram-6e300',
	storageBucket: 'instagram-6e300.appspot.com',
	messagingSenderId: '1010064545795',
	appId: '1:1010064545795:web:a6d5a72abb51669fab1636'
};
// react-redux-firebase config
const rrfConfig = {
	userProfile: 'users',
	useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
	enableClaims: true // Get custom claims along with the profile
};
// Initialize firebase instance
firebase.initializeApp(fbConfig);
firebase.firestore();
const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance // <- needed if using firestore
};
ReactDOM.render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<App />
			</ThemeProvider>
		</ReactReduxFirebaseProvider>
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
