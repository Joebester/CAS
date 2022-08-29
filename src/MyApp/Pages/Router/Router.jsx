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
	}, {
		id: 'notification',
		title: 'Notification',
		translate: 'Notification',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'component101',
				title: 'Notification',
				translate: 'Notification',
				type: 'item',
				icon: 'notifications_active',
				url: '/app/notification',
				badge: {
					title: 25,
					bg: '#d90429',
					fg: '#FFFFFF'
				}
			}
		]
	}, {
		id: 'Mange',
		title: 'Manage',
		translate: 'Manage',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'component2',
				title: 'Mange SMS',
				translate: 'SMS',
				type: 'item',
				icon: 'textsms',
				url: '/app/manage_sms'
			}, {
				id: 'component3',
				title: 'Manage Language',
				translate: 'Language',
				type: 'item',
				icon: 'language',
				url: '/app/language'
			}, {
				id: 'component4',
				title: 'Manage Link Survey',
				translate: 'Link Survey',
				type: 'item',
				icon: 'link',
				url: '/app/survey'
			}
		]
	}, {
		id: 'Report',
		title: 'Report',
		translate: 'Report',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'component30',
				title: 'report sms',
				translate: 'Report SMS',
				type: 'item',
				icon: 'insert_drive_file',
				url: '/app/report_sms'
			}
		]
	},
];
