import { useState, useRef, createContext, useEffect } from 'react';

import { getTotalDepartments } from '~/services/DepartmentService/departmentService';

import { socket } from '~/socket';
export const DepartmentContext = createContext();

function DepartmentProvider({ data, children }) {
	const [departmentsRender, setDepartmentsRender] = useState([]);
	const inputRef = useRef({});
	const { setIsDepartment } = data;
	useEffect(() => {
		const fetchGroup = async () => {
			const result = await getTotalDepartments();
			setDepartmentsRender(result.data);
		};
		fetchGroup();
	}, []);
	socket.on('new_department_update', (data) => {
		setDepartmentsRender(data.departments);
	});

	const myValue = {
		inputRef,
		departmentsRender,
		setIsDepartment,
	};
	return <DepartmentContext.Provider value={myValue}>{children}</DepartmentContext.Provider>;
}

export default DepartmentProvider;
