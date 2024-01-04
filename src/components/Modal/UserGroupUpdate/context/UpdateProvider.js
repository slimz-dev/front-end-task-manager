import { createContext, useContext, useEffect, useState } from 'react';
import { ActionContext } from '~/pages/App/pages/AdminConfiguration/components/components/managerDepartmentComponents/DepartmentsTable/context/ActionProvider';
import { getTotalDepartments } from '~/services/DepartmentService/departmentService';
import { getTotalGroups } from '~/services/GroupService/groupPermissionService';
export const UpdateContext = createContext();
function UpdateProvider({ children }) {
	const [group, setGroup] = useState([]);
	const [department, setDepartment] = useState([]);
	useEffect(() => {
		const fetchGroup = async () => {
			const departments = await getTotalDepartments();
			setDepartment(departments.data);
			const groups = await getTotalGroups();
			setGroup(groups.data);
		};
		fetchGroup();
	}, []);

	const value = {
		group,
		department,
	};
	return <UpdateContext.Provider value={value}>{children}</UpdateContext.Provider>;
}

export default UpdateProvider;
