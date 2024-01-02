import { createContext, useState } from 'react';
export const PermissionContext = createContext();
function PermissionProvder({ children }) {
	const [name, setName] = useState({});
	const [permission, setPermission] = useState({
		admin: {
			create: false,
			read: false,
			update: false,
			delete: false,
		},
		localTaskManager: {
			create: false,
			read: false,
			delete: false,
			update: false,
		},
		globalTaskManager: {
			create: false,
		},
		localMemberManager: {
			create: false,
			read: false,
			delete: false,
		},
		globalMemberManager: {
			create: false,
		},
		invite: {
			create: false,
		},
		totalEmployees: {
			read: false,
		},
	});
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
	function handleSetName(e) {
		setName({ name: e.target.value });
	}

	const value = {
		handleChangePermission,
		permission,
		name,
		handleSetName,
	};
	return <PermissionContext.Provider value={value}>{children}</PermissionContext.Provider>;
}

export default PermissionProvder;
