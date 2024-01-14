import { createContext, useState, useEffect, useContext } from 'react';
import { getAll } from '~/services/UserService/getAllUserService';
import { UserContext } from '~/contexts/userProvider';
import { getMyDepartment } from '~/services/UserService/getMyDepartment';
import { getAnonymous } from '~/services/UserService/getAnonymousUserService';
import { socket } from '~/socket';
export const TotalUsers = createContext();

function TotalUsersProvider({ children }) {
	const userContext = useContext(UserContext);
	const [users, setUsers] = useState([]);
	const [anonymousUser, setAnonymousUser] = useState([]);

	socket.on('my_department_updated', (data) => {
		setUsers(data.users);
	});
	useEffect(() => {
		const fetchAll = async () => {
			const departmentId = userContext.info.department;
			const result = await getMyDepartment(departmentId);
			setUsers(result.data);
		};
		if (userContext.info) {
			fetchAll();
		}
	}, [userContext.info]);
	useEffect(() => {
		const fetchAnonymous = async () => {
			const result = await getAnonymous();
			setAnonymousUser(result.data);
		};
		fetchAnonymous();
	}, [users]);
	const value = {
		users,
		setUsers,
		anonymousUser,
	};
	return <TotalUsers.Provider value={value}>{children}</TotalUsers.Provider>;
}

export default TotalUsersProvider;
