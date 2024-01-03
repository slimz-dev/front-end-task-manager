import { createContext, useState } from 'react';
import ManageGroup from './components/ManageGroup/ManageGroup';
import ManageUser from './components/ManageUser/ManageUser';

export const MainContext = createContext();
function AdminConfiguration() {
	const [isGroup, setIsGroup] = useState(true);
	function handleChangeView(boolean) {
		setIsGroup(boolean);
	}
	const value = {
		handleChangeView,
		isGroup,
	};
	return (
		<MainContext.Provider value={value}>
			{isGroup ? <ManageGroup /> : <ManageUser />}
		</MainContext.Provider>
	);
}

export default AdminConfiguration;
