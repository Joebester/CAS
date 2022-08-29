import MomentUtils from '@date-io/moment';
import FuseAuthorization from '@fuse/core/FuseAuthorization';
import FuseLayout from '@fuse/core/FuseLayout';
import FuseTheme from '@fuse/core/FuseTheme';
import history from '@history';
import { createGenerateClassName, jssPreset, StylesProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { create } from 'jss';
import jssExtend from 'jss-plugin-extend';
import rtl from 'jss-rtl';
import Login from 'MyApp/Pages/Login/Login';
import React from 'react';
import Provider from 'react-redux/es/components/Provider';
import { Router, BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from './AppContext';
import { Auth } from './auth';
import routes from './fuse-configs/routesConfig';
import store from './store';
import { ProtectRoute } from '../MyApp/Components/ProtectRoute'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

const jss = create({
	...jssPreset(),
	plugins: [...jssPreset().plugins, jssExtend(), rtl()],
	insertionPoint: document.getElementById('jss-insertion-point')
});

const generateClassName = createGenerateClassName();

const App = () => {
	
	
	const Dashboard = () => {
		return (
			<AppContext.Provider
				value={{
					routes
				}}
			>
				<StylesProvider jss={jss} generateClassName={generateClassName}>
					<Provider store={store}>
						<MuiPickersUtilsProvider utils={MomentUtils}>
							<Auth>
								<Router history={history}>
									<FuseAuthorization>
										<FuseTheme>
											<FuseLayout />
										</FuseTheme>
									</FuseAuthorization>
								</Router>
							</Auth>
						</MuiPickersUtilsProvider>
					</Provider>
				</StylesProvider>
			</AppContext.Provider>
		)
	}
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route path={"/"} component={Login} exact />
					<Route path={"/login"} component={Login} exact />
					<Route path={"/app"} component={Dashboard} />
				</Switch>
			</BrowserRouter>
		</>
	);
};

export default App;
