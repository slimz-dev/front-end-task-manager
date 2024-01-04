import { createContext, useContext, useEffect, useState } from 'react';
import { ActionContext } from '~/pages/App/pages/AdminConfiguration/components/components/managerDepartmentComponents/DepartmentsTable/context/ActionProvider';
export const UpdateContext = createContext();
function UpdateProvider({ children }) {
	const [name, setName] = useState({});
	const department = useContext(ActionContext);
	function handleSetName(e) {
		setName({ name: e.target.value });
	}
	useEffect(() => {
		setName({ name: department.departmentInfo.name });
	}, [department.departmentInfo]);
	const value = {
		name,
		handleSetName,
	};
	return <UpdateContext.Provider value={value}>{children}</UpdateContext.Provider>;
}

export default UpdateProvider;
