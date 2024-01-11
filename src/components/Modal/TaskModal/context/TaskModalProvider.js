import { createContext, useContext, useEffect, useState } from 'react';
import { DepartmentContext } from '~/pages/App/pages/Project_NEW/contexts/DepartmentProvider/DepartmentProvider';
import { addNewJob } from '~/services/ProjectService/addJobService';
import { getSelectTask } from '~/services/ProjectService/getSelectTaskService';
import { socket } from '~/socket';

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

	socket.on('updated_job', (data) => {
		setTaskInfo(data.tasks[0]);
	});

	function addJob(title) {
		const postJob = async () => {
			const result = await addNewJob(taskInfo._id, title, taskInfo.department);
		};
		if (title) {
			postJob();
		}
	}
	const value = {
		show,
		setShow,
		handleChooseTask,
		taskInfo,
		addJob,
		setTaskInfo,
	};
	return <TaskModalContext.Provider value={value}>{children}</TaskModalContext.Provider>;
}

export default TaskModalProvider;
