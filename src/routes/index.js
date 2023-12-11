import {
	Home,
	Login,
	Register,
	ResetPass,
	Unknown,
	App,
	Member,
	Profile,
	Settings,
	Projects,
	Tasks,
	Calendar,
} from '~/pages';
import { ContentLayout } from '~/Layout';
import config from '~/config';

export const publicRoutes = [
	{ path: config.routes.Home, component: Home },
	{ path: config.routes.Login, component: Login, layout: ContentLayout },
	{ path: config.routes.Register, component: Register, layout: ContentLayout },
	{ path: config.routes.ResetPass, component: ResetPass, layout: ContentLayout },
	{ path: config.routes.Unknown, component: Unknown, layout: ContentLayout },
];

export const privateRoutes = [
	{ path: config.routes.App, component: App },
	{ path: config.routes.Member, component: Member },
	{ path: config.routes.Profile, component: Profile },
	{ path: config.routes.Settings, component: Settings },
	{ path: config.routes.Projects, component: Projects },
	{ path: config.routes.Tasks, component: Tasks },
	{ path: config.routes.Calendar, component: Calendar },
];
