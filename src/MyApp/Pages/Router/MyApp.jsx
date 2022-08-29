import Dashboard from "../Dashboard/Dashboard";

export const MyAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/app/dashboard',
			component: Dashboard
		}
	]
};