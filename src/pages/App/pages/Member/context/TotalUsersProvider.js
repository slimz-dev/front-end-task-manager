import { createContext, useState, useEffect, useContext } from 'react';
import { getAll } from '~/services/UserService/getAllUserService';
import { UserContext } from '~/contexts/userProvider';
export const TotalUsers = createContext();

function TotalUsersProvider({ children }) {
	const userContext = useContext(UserContext);
	const [users, setUsers] = useState([]);
	const [total, setTotal] = useState('');
	const [singleUser, setSingleUser] = useState('');
	useEffect(() => {
		const fetchAll = async () => {
			const totalUser = [];
			let onlineCount = 0;
			const result = await getAll();
			result.data.map((user) => {
				const thisUserState = userContext.online.find((thisUser) => {
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
		if (userContext.online.length !== 0) {
			fetchAll();
		}
	}, [userContext.online]);

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
