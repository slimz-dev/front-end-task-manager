import { mainRoutes, childRoutes } from './routes';
const routes = {
	...mainRoutes,
	...childRoutes,
};
const config = {
	routes,
};

export default config;
