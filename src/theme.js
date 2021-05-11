import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
	// breakpoints: {
	// 	values: {
	// 		tablet: 720
	// 	}
	// }
});
theme = responsiveFontSizes(theme);

export default theme;
