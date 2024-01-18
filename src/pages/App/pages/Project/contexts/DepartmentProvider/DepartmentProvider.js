import { useState, useRef, createContext, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import config from '~/config';
import { UserContext } from '~/contexts/userProvider';

import { getTotalDepartments } from '~/services/DepartmentService/departmentService';
import { getDepartmentTask } from '~/services/ProjectService/getDepartmentTaskService';
import { getMyDepartmentTask } from '~/services/ProjectService/getMyDepartmentTaskService';
import { getMyDepartment } from '~/services/UserService/getMyDepartment';

import { socket } from '~/socket';
export const DepartmentContext = createContext();

function DepartmentProvider({ children }) {
	const { id } = useParams();
	const user = useContext(UserContext);
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
		if (id && allDepartmentIds.includes(id) && user.info) {
			setDepartmentId(id);
			const fetchDepartmentTask = async () => {
				let result;
				if (user.info.department === id && user.info.role.localTaskManager.read) {
					result = await getMyDepartmentTask(id);
				} else {
					if (user.info.role.globalTaskManager.create) {
						result = await getDepartmentTask(id);
					} else {
						navigate(config.routes.Unknown);
					}
				}
				setThisDepartment(result.data);
				const userData = await getMyDepartment(id);
				setDepartmentUsers(userData.data);
			};
			fetchDepartmentTask();
		} else if (id && departmentsRender.length !== 0) {
			navigate(config.routes.Unknown);
		}
	}, [id, departmentsRender, user]);

	//Chose department
	function handleSetDepartment(departmentId) {
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
