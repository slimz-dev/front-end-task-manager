import { useState, useRef, createContext, useEffect } from 'react';

import { getAll } from '~/services/UserService/getAllUserService';

import { socket } from '~/socket';
export const UserAssignContext = createContext();

function UserAssignProvider({ children }) {
	const [usersRender, setUsersRender] = useState([]);
	const inputRef = useRef({});

	useEffect(() => {
		const fetchGroup = async () => {
			const result = await getAll();
			setUsersRender(result.data);
		};
		fetchGroup();
	}, []);
	socket.on('user_group_updated', (data) => {
		setUsersRender(data.users);
	});

	const value = {
		inputRef,
		usersRender,
	};
	return <UserAssignContext.Provider value={value}>{children}</UserAssignContext.Provider>;
}

export default UserAssignProvider;
