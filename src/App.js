import { Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';
import PrivateRoutes from './routes/PrivateRoutes';
function App() {
	return (
		<div className="App">
			<Routes>
				{publicRoutes.map((route, index) => {
					const Page = route.component;
					return <Route key={index} path={route.path} element={<Page />} />;
				})}
				<Route element={<PrivateRoutes />}>
					{privateRoutes.map((route, index) => {
						const Page = route.component;
						return <Route key={index} path={route.path} element={<Page />} />;
					})}
				</Route>
			</Routes>
		</div>
	);
}

export default App;
