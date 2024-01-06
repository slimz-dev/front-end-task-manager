import { createContext, useContext, useState } from 'react';
import { DepartmentContext } from '~/pages/App/pages/Project_NEW/contexts/DepartmentProvider/DepartmentProvider';
import { getSelectTask } from '~/services/ProjectService/getSelectTaskService';

export const TaskModalContext = createContext();

function TaskModalProvider({ children }) {
	const [show, setShow] = useState(false);
	const [taskInfo, setTaskInfo] = useState([]);
	const department = useContext(DepartmentContext);
	function handleChooseTask(e) {
		let thisElement = e.target.parentNode;
		while (!thisElement.id) {
			thisElement = thisElement.parentNode;
		}
		const taskId = thisElement.id;
		const fetchTask = async () => {
			const result = await getSelectTask(department.departmentId, taskId);

			setShow(() => {
				setTaskInfo(result.data[0]);
				return true;
			});
		};
		fetchTask();
	}
	const value = {
		show,
		setShow,
		handleChooseTask,
		taskInfo,
	};
	return <TaskModalContext.Provider value={value}>{children}</TaskModalContext.Provider>;
}

export default TaskModalProvider;
