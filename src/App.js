import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import * as Routes from './constants/routes';
import Dashboard from './pages/dashboard/Dashboard';

const Login = lazy(() => import('./pages/login/Login'));
const Signup = lazy(() => import('./pages/signup/Signup-email'));
function App() {
	return (
		<Router>
			<Suspense fallback={<p>loading...</p>}>
				<Switch>
					<Route exact path={Routes.DASHBOARD} component={Dashboard} />
					<Route exact path={Routes.LOGIN} component={Login} />
					<Route exact path={Routes.SIGN_UP} component={Signup} />
				</Switch>
			</Suspense>
		</Router>
	);
}

export default App;
