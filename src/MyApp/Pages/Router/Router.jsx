export const routerConfig = [
	{
		id: 'home',
		title: 'Home',
		translate: 'Home',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'component1',
				title: 'DashBoard',
				translate: 'DashBoard',
				type: 'item',
				icon: 'home_work',
				url: '/app/dashboard'
			}
		]
	},
	// {
	// 	id: 'notification',
	// 	title: 'Notification',
	// 	translate: 'Notification',
	// 	type: 'group',
	// 	icon: 'apps',
	// 	children: [
	// 		{
	// 			id: 'component101',
	// 			title: 'Notification',
	// 			translate: 'Notification',
	// 			type: 'item',
	// 			icon: 'notifications_active',
	// 			url: '/app/notification',
	// 			badge: {
	// 				title: 25,
	// 				bg: '#d90429',
	// 				fg: '#FFFFFF'
	// 			}
	// 		}
	// 	]
	// }, 
	{
		id: 'Mange',
		title: 'Manage',
		translate: 'Manage',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'component2',
				title: 'Mange Admin',
				translate: 'Admin',
				type: 'item',
				icon: 'admin_panel_settings',
				url: '/app/admin'
			}, {
				id: 'component3',
				title: 'Manage user',
				translate: 'User',
				type: 'item',
				icon: 'people_alt',
				url: '/app/user'
			}, {
				id: 'component4',
				title: 'Manage News',
				translate: 'News',
				type: 'item',
				icon: 'branding_watermark',
				url: '/app/news'
			}, {
				id: 'component5',
				title: 'Manage Content',
				translate: 'Content',
				type: 'item',
				icon: 'topic',
				url: '/app/content'
			}, {
				id: 'component6',
				title: 'Manage Football Analyze',
				translate: 'Football Analyze',
				type: 'item',
				icon: 'sports_soccer',
				url: '/app/Football_Analyze'
			}, {
				id: 'component6',
				title: 'Manage Youtube Video',
				translate: 'Youtube Video',
				type: 'item',
				icon: 'play_circle_outline',
				url: '/app/Youtube_Video'
			}
		]
	},
	// {
	// 	id: 'Report',
	// 	title: 'Report',
	// 	translate: 'Report',
	// 	type: 'group',
	// 	icon: 'apps',
	// 	children: [
	// 		{
	// 			id: 'component30',
	// 			title: 'report sms',
	// 			translate: 'Report SMS',
	// 			type: 'item',
	// 			icon: 'insert_drive_file',
	// 			url: '/app/report_sms'
	// 		}
	// 	]
	// },
];
