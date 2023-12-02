import { Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';
import PrivateRoutes from './routes/PrivateRoutes';
import { DefaultLayout } from './Layout';
function App() {
	return (
		<div className="App">
			<Routes>
				{publicRoutes.map((route, index) => {
					const Page = route.component;
					let Layout = DefaultLayout;
					if (route.layout) {
						Layout = route.layout;
					}
					return (
						<Route
							key={index}
							path={route.path}
							element={
								<Layout>
									<Page />
								</Layout>
							}
						/>
					);
				})}
				<Route element={<PrivateRoutes />}>
					{privateRoutes.map((route, index) => {
						const Page = route.component;
						let Layout = DefaultLayout;
						if (route.layout) {
							Layout = route.layout;
						}
						return (
							<Route
								key={index}
								path={route.path}
								element={
									<Layout>
										<Page />
									</Layout>
								}
							/>
						);
					})}
				</Route>
			</Routes>
		</div>
	);
}

export default App;
