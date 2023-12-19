import { createContext, useState, useEffect } from 'react';
import { getAll } from '~/services/getAllUserService';
export const TotalUsers = createContext();

function TotalUsersProvider({ children }) {
	const [online, setOnline] = useState([
		{ state: true, id: '657fdc506a08c4f65ac33abc' },
		{ state: false, id: '657fdc5d6a08c4f65ac33abf' },
		{ state: true, id: '657fdc696a08c4f65ac33ac2' },
		{ state: true, id: '657fdc766a08c4f65ac33ac5' },
		{ state: false, id: '657fdc816a08c4f65ac33ac8' },
		{ state: false, id: '657fdc906a08c4f65ac33acb' },
		{ state: true, id: '657fdcb76a08c4f65ac33acf' },
	]);
	const [users, setUsers] = useState([]);
	const [total, setTotal] = useState('');
	const [singleUser, setSingleUser] = useState('');
	useEffect(() => {
		const fetchAll = async () => {
			const totalUser = [];
			let onlineCount = 0;
			const result = await getAll();
			result.data.map((user) => {
				const thisUserState = online.find((thisUser) => {
					return thisUser.id === user._id;
				});
				if (thisUserState.state) {
					onlineCount++;
				}
				return totalUser.push({
					...user,
					state: thisUserState.state,
				});
			});
			setUsers(totalUser);
			setTotal({
				online: onlineCount,
				total: result.meta.numbers,
			});
			setSingleUser(totalUser[0]);
		};
		fetchAll();
	}, []);

	const value = {
		users,
		setUsers,
		total,
		setTotal,
		setSingleUser,
		singleUser,
	};
	return <TotalUsers.Provider value={value}>{children}</TotalUsers.Provider>;
}

export default TotalUsersProvider;
