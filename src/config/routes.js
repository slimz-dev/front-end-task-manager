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
	Settings: `${mainRoutes.App}/settings`,
	Projects: `${mainRoutes.App}/projects`,
	DepartmentProjects: `${mainRoutes.App}/projects/:id`,
	Tasks: `${mainRoutes.App}/tasks`,
	Calendar: `${mainRoutes.App}/calendar`,
	AdminConfigurations: `${mainRoutes.App}/admin-configurations`,
	MyDepartment: `${mainRoutes.App}/department`,
};
