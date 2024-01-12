import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { ModalContext } from '~/contexts/ModalProvider';
import { UserContext } from '~/contexts/userProvider';
import { deletePersonalTask } from '~/services/PersonalTaskService/deletePersonalTaskService';
import { getPersonalTask } from '~/services/PersonalTaskService/getPersonalTaskService';
import { updateTaskState } from '~/services/PersonalTaskService/updatePersonalTaskService';

export const TaskContext = createContext();

function TaskProvider({ children }) {
	const modal = useContext(ModalContext);
	const user = useContext(UserContext);
	const [taskState, setTaskState] = useState();
	const [dragItem, setDragItem] = useState('');
	const [data, setData] = useState('');
	const [isChange, setIsChange] = useState(false);
	const stateRef = useRef([]);

	function handleDragOver(e) {
		e.preventDefault();
	}
	function handleStart(e) {
		setDragItem(e.target);
	}
	useEffect(() => {
		const fetchTask = async () => {
			const result = await getPersonalTask(user.info._id);
			setData(result.data[0]);
		};
		if (user.info) {
			fetchTask();
		}
	}, [user.info]);
	useEffect(() => {
		if (isChange && data) {
			const patchTask = async () => {
				const result = await updateTaskState(data._id, data.task);
			};
			patchTask();
		}
	}, [isChange]);
	function handleDrop(e) {
		setIsChange(Math.random());
		e.preventDefault();
		for (let index = 0; index <= 3; index++) {
			const thisState = stateRef.current[index];
			if (thisState.contains(e.target)) {
				let stateChange;
				switch (index) {
					case 0:
						stateChange = 'UpComing';
						break;
					case 1:
						stateChange = 'InProgress';
						break;
					case 2:
						stateChange = 'OnHold';
						break;
					default:
						stateChange = 'Completed';
						break;
				}
				const thisElement = data.task.find((task) => task._id === dragItem.id);
				if (thisElement) {
					const index = data.task.indexOf(thisElement);
					data.task.splice(index, 1, {
						...thisElement,
						state: stateChange,
					});
				}
				const newArray = data.task.map((task) => {
					return task;
				});
				setData((prev) => ({
					...prev,
					task: newArray,
				}));
			}
		}
	}
	function handleOpenModal(e) {
		setTaskState(e.target.id);
		modal.setShow(true);
	}

	function handleDelete(e) {
		let thisElement = e.target;
		while (!thisElement.id) {
			thisElement = thisElement.parentNode;
		}
		if (thisElement.id) {
			const taskId = thisElement.id;
			const deleteTask = async () => {
				const result = await deletePersonalTask(data._id, taskId);
				setData(result.data);
			};
			deleteTask();
		}
	}

	const value = {
		data,
		stateRef,
		handleDragOver,
		handleDrop,
		handleStart,
		taskState,
		handleOpenModal,
		setData,
		handleDelete,
	};
	return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export default TaskProvider;
