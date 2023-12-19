import { createContext, useState, useEffect } from 'react';
import { getMe } from '~/services/getMeService';
import { socket } from '~/socket';
export const UserContext = createContext();

function UserProvider({ children }) {
	const [online, setOnline] = useState([]);
	const [info, setInfo] = useState('');
	const [token, setToken] = useState(
		localStorage.getItem('token') ? localStorage.getItem('token') : false
	);
	socket.on('online', (data) => {
		console.log('online');
		setOnline(data);
	});
	socket.on('disconnect', () => {
		socket.emit('logout', info.id);
	});
	socket.on('offline', (data) => {
		console.log('this is offline state');
		console.log(data);
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
					socket.emit('login', userInfo._id);
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
