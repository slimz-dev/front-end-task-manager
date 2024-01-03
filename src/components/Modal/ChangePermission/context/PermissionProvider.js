import { createContext, useContext, useState } from 'react';
import { GroupContext } from '~/pages/App/pages/AdminConfiguration/components/managerGroupComponents/GroupsTable/context/GroupProvider';
export const PermissionContext = createContext();
function PermissionProvder({ children }) {
	const group = useContext(GroupContext);
	const [name, setName] = useState({});
	const [permission, setPermission] = useState(group.groupInfo);
	function handleChangePermission(e) {
		const permission = e.target.name;
		const authority = e.target.value;
		const accept = e.target.checked;
		setPermission((prev) => ({
			...prev,
			[permission]: {
				...prev[permission],
				[authority]: accept,
			},
		}));
	}
	function handleSetName(group) {
		setName({ name: group.value });
	}

	const value = {
		setPermission,
		handleChangePermission,
		permission,
		name,
		handleSetName,
	};
	return <PermissionContext.Provider value={value}>{children}</PermissionContext.Provider>;
}

export default PermissionProvder;
