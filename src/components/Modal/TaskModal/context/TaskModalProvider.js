import { createContext, useContext, useEffect, useState } from 'react';
import { UserContext } from '~/contexts/userProvider';
import { DepartmentContext } from '~/pages/App/pages/Project/contexts/DepartmentProvider/DepartmentProvider';
import { addNewComment } from '~/services/ProjectService/addCommentService';
import { addNewJob } from '~/services/ProjectService/addJobService';
import { getSelectTask } from '~/services/ProjectService/getSelectTaskService';
import { socket } from '~/socket';

export const TaskModalContext = createContext();

function TaskModalProvider({ children }) {
	const user = useContext(UserContext);
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

	socket.on('updated_comment', (data) => {
		setTaskInfo(data.tasks[0]);
	});

	function addJob(title) {
		const postJob = async () => {
			const result = await addNewJob(taskInfo._id, title, taskInfo.department);
		};
		if (title.trim()) {
			postJob();
		}
	}
	function addComment(content) {
		const postComment = async () => {
			const data = {
				content: content,
				createBy: user.info._id,
			};
			const result = await addNewComment(taskInfo._id, data);
		};
		postComment();
	}
	const value = {
		show,
		setShow,
		handleChooseTask,
		taskInfo,
		addJob,
		addComment,
		setTaskInfo,
	};
	return <TaskModalContext.Provider value={value}>{children}</TaskModalContext.Provider>;
}

export default TaskModalProvider;
