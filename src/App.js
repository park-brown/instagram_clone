import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import * as Routes from './constants/routes';
const Login = lazy(() => import('./pages/login/Login'));
function App() {
	return (
		<Router>
			<Suspense fallback={<p>loading...</p>}>
				<Switch>
					<Route exact path={Routes.LOGIN} component={Login} />
				</Switch>
			</Suspense>
		</Router>
	);
}

export default App;
