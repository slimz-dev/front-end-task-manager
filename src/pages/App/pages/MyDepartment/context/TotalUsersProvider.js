import { createContext, useState, useEffect, useContext } from 'react';
import { getAll } from '~/services/UserService/getAllUserService';
import { UserContext } from '~/contexts/userProvider';
import { getMyDepartment } from '~/services/UserService/getMyDepartment';
export const TotalUsers = createContext();

function TotalUsersProvider({ children }) {
	const userContext = useContext(UserContext);
	const [users, setUsers] = useState([]);
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

	const value = {
		users,
		setUsers,
	};
	return <TotalUsers.Provider value={value}>{children}</TotalUsers.Provider>;
}

export default TotalUsersProvider;
