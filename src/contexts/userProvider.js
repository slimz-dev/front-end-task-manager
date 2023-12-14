import { createContext, useState, useEffect } from 'react';
import { getMe } from '~/services/getMeService';
export const UserContext = createContext();

function UserProvider({ children }) {
	const [info, setInfo] = useState('');
	const [user, setUser] = useState(
		localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : false
	);
	const [token, setToken] = useState(
		localStorage.getItem('token') ? localStorage.getItem('token') : false
	);
	useEffect(() => {
		const getData = async () => {
			try {
				const result = await getMe(token);
				setInfo(result.data[0]);
			} catch (error) {
				localStorage.setItem('user', JSON.stringify(false));
				localStorage.setItem('token', JSON.stringify(false));
			}
		};
		getData();
		localStorage.setItem('user', JSON.stringify(user));
		localStorage.setItem('token', token);
	}, [token, user]);
	const userData = {
		info,
		user,
		setUser,
		token,
		setToken,
	};
	return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
}

export default UserProvider;
