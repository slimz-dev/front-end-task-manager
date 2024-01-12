import { useState, useRef, createContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import config from '~/config';

import { getTotalDepartments } from '~/services/DepartmentService/departmentService';
import { getDepartmentTask } from '~/services/ProjectService/getDepartmentTaskService';
import { getMyDepartment } from '~/services/UserService/getMyDepartment';

import { socket } from '~/socket';
export const DepartmentContext = createContext();

function DepartmentProvider({ children }) {
	const { id } = useParams();
	const navigate = useNavigate();
	const [departmentsRender, setDepartmentsRender] = useState([]);
	const [departmentId, setDepartmentId] = useState('');
	const [thisDepartment, setThisDepartment] = useState([]);
	const [departmentUsers, setDepartmentUsers] = useState([]);
	const [progress, setProgress] = useState('100%');
	const inputRef = useRef({});

	//Get all departments
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

	socket.on('changed_job', (data) => {
		setThisDepartment(data.tasks);
	});

	//Set department task
	useEffect(() => {
		const allDepartmentIds = departmentsRender.map((department) => {
			return department._id;
		});
		if (id && allDepartmentIds.includes(id)) {
			setDepartmentId(id);
			const fetchDepartmentTask = async () => {
				const result = await getDepartmentTask(id);
				setThisDepartment(result.data);
				const userData = await getMyDepartment(id);
				setDepartmentUsers(userData.data);
			};
			fetchDepartmentTask();
		} else if (id && departmentsRender.length !== 0) {
			navigate(config.routes.Unknown);
		}
	}, [id, departmentsRender]);

	//Chose department
	function handleSetDepartment(e) {
		let thisElement = e.target.parentNode;
		while (!thisElement.id) {
			thisElement = thisElement.parentNode;
		}
		const departmentId = thisElement.id;
		navigate(`${config.routes.Projects}/${departmentId}`);
	}
	const myValue = {
		inputRef,
		departmentsRender,
		handleSetDepartment,
		thisDepartment,
		progress,
		setProgress,
		departmentId,
		departmentUsers,
	};
	return <DepartmentContext.Provider value={myValue}>{children}</DepartmentContext.Provider>;
}

export default DepartmentProvider;
