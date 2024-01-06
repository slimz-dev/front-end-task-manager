import { useState, useRef, createContext, useEffect } from 'react';

import { getTotalDepartments } from '~/services/DepartmentService/departmentService';
import { getDepartmentTask } from '~/services/ProjectService/getDepartmentTaskService';

import { socket } from '~/socket';
export const DepartmentContext = createContext();

function DepartmentProvider({ data, children }) {
	const [departmentsRender, setDepartmentsRender] = useState([]);
	const [departmentId, setDepartmentId] = useState('');
	const [thisDepartment, setThisDepartment] = useState([]);
	const [progress, setProgress] = useState('100%');
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

	function handleSetDepartment(e) {
		let thisElement = e.target.parentNode;
		while (!thisElement.id) {
			thisElement = thisElement.parentNode;
		}
		const departmentId = thisElement.id;
		setDepartmentId(departmentId);
		const fetchDepartmentTask = async () => {
			const result = await getDepartmentTask(departmentId);
			setIsDepartment(() => {
				setThisDepartment(result.data);
				return false;
			});
		};
		fetchDepartmentTask();
	}
	const myValue = {
		inputRef,
		departmentsRender,
		handleSetDepartment,
		setIsDepartment,
		thisDepartment,
		progress,
		setProgress,
		departmentId,
	};
	return <DepartmentContext.Provider value={myValue}>{children}</DepartmentContext.Provider>;
}

export default DepartmentProvider;
