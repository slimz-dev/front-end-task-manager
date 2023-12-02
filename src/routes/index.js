import { Home, Login, ResetPass, Unknown, App } from '~/pages';
import { HeaderSidebarLayout } from '~/Layout';
import config from '~/config';

export const publicRoutes = [
	{ path: config.routes.Home, component: Home },
	{ path: config.routes.Login, component: Login },
	{ path: config.routes.ResetPass, component: ResetPass },
	{ path: config.routes.Unknown, component: Unknown },
];

export const privateRoutes = [
	{ path: config.routes.App, component: App, layout: HeaderSidebarLayout },
];
