import { createContext, useState, useEffect } from 'react';
import { getMe } from '~/services/getMeService';
export const UserContext = createContext();

function UserProvider({ children }) {
	const [user, setUser] = useState(
		localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : false
	);
	const [token, setToken] = useState(
		localStorage.getItem('token') ? localStorage.getItem('token') : false
	);
	useEffect(() => {
		// const getData = async () => {
		// 	const result = await getMe(token);
		// 	// if (result.data.length === 0) {
		// 	// 	setUser(false);
		// 	// 	setToken(false);
		// 	// }
		// };
		// getData();
		localStorage.setItem('user', JSON.stringify(user));
		localStorage.setItem('token', token);
	}, [token, user]);
	const userData = {
		user,
		setUser,
		token,
		setToken,
	};
	return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
}

export default UserProvider;
