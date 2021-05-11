import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import * as Routes from './constants/routes';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/profile/Profile';
import Edit from './pages/edit/Edit';

const Login = lazy(() => import('./pages/login/Login'));
const Signup = lazy(() => import('./pages/signup/Signup-email'));
function App() {
	return (
		<Router>
			<Suspense fallback={<p>loading...</p>}>
				<Switch>
					<Route exact path={Routes.PROFILE} component={Profile} />
					<Route exact path={Routes.LOGIN} component={Login} />
					<Route exact path={Routes.SIGN_UP} component={Signup} />
					<Route exact path={Routes.DASHBOARD} component={Dashboard} />
					<Route exact path={Routes.EDIT_PROFILE} component={Edit} />
				</Switch>
			</Suspense>
		</Router>
	);
}

export default App;
