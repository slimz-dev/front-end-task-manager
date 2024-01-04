import { createContext, useState } from 'react';
import ManageDepartment from './components/ManageDepartment/ManageDepartment';
import ManageGroup from './components/ManageGroup/ManageGroup';
import ManageUser from './components/ManageUser/ManageUser';

export const MainContext = createContext();
function AdminConfiguration() {
	const [isGroup, setIsGroup] = useState(true);
	const [isUser, setIsUser] = useState(false);
	function handleChangeView(group, user) {
		if (group) {
			setIsGroup(group);
		} else {
			setIsGroup(() => {
				setIsUser(user);
				return group;
			});
		}
	}
	const value = {
		handleChangeView,
		isGroup,
	};
	return (
		<MainContext.Provider value={value}>
			{isGroup ? <ManageGroup /> : isUser ? <ManageUser /> : <ManageDepartment />}
		</MainContext.Provider>
	);
}

export default AdminConfiguration;
