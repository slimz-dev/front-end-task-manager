import { createContext, useContext, useState } from 'react';
import { UserContext } from '~/contexts/userProvider';
import { DepartmentContext } from '~/pages/App/pages/Project/contexts/DepartmentProvider/DepartmentProvider';
import { postNewTask } from '~/services/ProjectService/newDepartmentService';

export const TaskAssignContext = createContext();

function TaskAssignProvider({ children, data }) {
	const [minDate, setMinDate] = useState(new Date());
	const department = useContext(DepartmentContext);
	const user = useContext(UserContext);
	const [maxDate, setMaxDate] = useState('');
	const [assignees, setAssignees] = useState([]);

	function submitForm() {
		const value = {
			assigner: user.info._id,
			assignee: assignees,
			name: data.name,
			description: data.description,
			initDate: minDate,
			expiredDate: maxDate,
			department: department.departmentId,
		};
		const postTask = async () => {
			const result = await postNewTask(value, department.departmentId);
		};
		postTask();
	}
	const valueData = {
		...data,
		minDate,
		maxDate,
		setMinDate,
		setMaxDate,
		assignees,
		setAssignees,
		submitForm,
	};

	return <TaskAssignContext.Provider value={valueData}>{children}</TaskAssignContext.Provider>;
}

export default TaskAssignProvider;
