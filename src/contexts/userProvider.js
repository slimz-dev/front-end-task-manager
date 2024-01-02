import { createContext, useState, useEffect } from 'react';
import { getMe } from '~/services/UserService/getMeService';
import { socket } from '~/socket';
export const UserContext = createContext();

function UserProvider({ children }) {
	const [online, setOnline] = useState([]);
	const [info, setInfo] = useState('');
	const [token, setToken] = useState(
		localStorage.getItem('token') ? localStorage.getItem('token') : false
	);
	socket.on('user-state', (data) => {
		setOnline(data);
	});

	useEffect(() => {
		const getData = async () => {
			try {
				const result = await getMe();
				const userInfo = result.data[0];
				if (userInfo === undefined) {
					localStorage.removeItem('token');
					// socket.disconnect();
				} else {
					localStorage.setItem('token', token);
					setInfo(userInfo);
					socket.emit('login', userInfo._id, true);
				}
			} catch (error) {
				console.log(error);
				localStorage.removeItem('token');
			}
		};
		getData();
	}, [token]);
	const userData = {
		info,
		token,
		setToken,
		online,
	};
	return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
}

export default UserProvider;
