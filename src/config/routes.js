export const mainRoutes = {
	Home: '/',
	Login: '/login',
	Register: '/register',
	ResetPass: '/reset-password',
	App: '/app',
	Unknown: '*',
};

export const childRoutes = {
	Member: `${mainRoutes.App}/member`,
	Profile: `${mainRoutes.App}/profile`,
	Settings: `${mainRoutes.App}/settings`,
	Projects: `${mainRoutes.App}/projects`,
	Tasks: `${mainRoutes.App}/tasks`,
	Calendar: `${mainRoutes.App}/calendar`,
	AdminConfigurations: `${mainRoutes.App}/admin-configurations`,
};
