import { useState, useRef, createContext, useEffect } from 'react';

import { getTotalDepartments } from '~/services/DepartmentService/departmentService';

import { socket } from '~/socket';
export const DepartmentContext = createContext();

function DepartmentProvider({ children }) {
	const [departmentsRender, setDepartmentsRender] = useState([]);
	const inputRef = useRef({});

	useEffect(() => {
		const fetchGroup = async () => {
			const result = await getTotalDepartments();
			console.log(result);
			setDepartmentsRender(result.data);
		};
		fetchGroup();
	}, []);
	socket.on('new_department_update', (data) => {
		setDepartmentsRender(data.departments);
	});

	const value = {
		inputRef,
		departmentsRender,
	};
	return <DepartmentContext.Provider value={value}>{children}</DepartmentContext.Provider>;
}

export default DepartmentProvider;
