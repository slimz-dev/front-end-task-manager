import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { UserContext } from '~/contexts/userProvider';
function PrivateRoutes() {
	const user = useContext(UserContext);
	return user.user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
