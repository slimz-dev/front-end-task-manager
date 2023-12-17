import { createContext, useState, useEffect } from 'react';
import { getAll } from '~/services/getAllUserService';
export const TotalUsers = createContext();

function TotalUsersProvider({ children }) {
	const [users, setUsers] = useState([]);
	const [total, setTotal] = useState('');
	const [singleUser, setSingleUser] = useState('');
	useEffect(() => {
		const fetchAll = async () => {
			const result = await getAll();
			setUsers(result.data);
			setTotal(result.meta.numbers);
			setSingleUser(result.data[0]);
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
