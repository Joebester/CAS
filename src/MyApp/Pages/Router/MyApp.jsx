import Admin from "../Admin/Admin";
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
		},{
			path: '/app/admin',
			component: Admin
		}
	]
};