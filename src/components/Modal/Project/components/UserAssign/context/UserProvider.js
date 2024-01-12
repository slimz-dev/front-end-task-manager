import { createContext, useContext, useState } from 'react';
import { DepartmentContext } from '~/pages/App/pages/Project/contexts/DepartmentProvider/DepartmentProvider';
import { TaskAssignContext } from '../../../context/TaskAssignProvider';

export const UserAssignContext = createContext();

function UserProvider({ children }) {
	const task = useContext(TaskAssignContext);
	const department = useContext(DepartmentContext);
	const [isOpen, setIsOpen] = useState(false);
	function handleSelected(e) {
		let thisElement = e.target;
		const multiple = thisElement.getAttribute('multi');
		while (!thisElement.id) {
			thisElement = thisElement.parentNode;
		}
		const thisUser = department.departmentUsers.find((user) => {
			return user._id === thisElement.id;
		});
		checkSelected(thisUser, multiple);
	}

	function checkSelected(user, multiple) {
		const alreadyAssigned = task.assignees.findIndex((assignee) => assignee.id === user._id);
		if (alreadyAssigned === -1) {
			if (multiple !== null) {
				task.setAssignees((prev) => [
					...prev,
					{
						src: user.img,
						id: user._id,
					},
				]);
			} else {
				task.setAssignees([
					{
						src: user.img,
						id: user._id,
					},
				]);
				setIsOpen(false);
			}
		} else {
			if (multiple !== null) {
				task.assignees.splice(alreadyAssigned, 1);
				task.setAssignees((prev) => [...prev]);
			} else {
				task.setAssignees([]);
			}
		}
	}

	const value = {
		handleSelected,
		isOpen,
		setIsOpen,
	};
	return <UserAssignContext.Provider value={value}>{children}</UserAssignContext.Provider>;
}

export default UserProvider;
