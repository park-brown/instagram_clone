import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';
ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
