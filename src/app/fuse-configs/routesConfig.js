import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import { MyAppConfig } from '../../MyApp/Pages/Router/MyApp'

const routeConfigs = [MyAppConfig];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/app',
		component: () => <Redirect to="/app/dashboard" />
	},
];

export default routes;
