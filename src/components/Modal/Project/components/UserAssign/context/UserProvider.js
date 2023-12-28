import { createContext, useContext, useState } from 'react';
import { TotalUsers } from '~/pages/App/pages/Member/context/TotalUsersProvider';

export const UserContext = createContext();

function UserProvider({ children }) {
	const total = useContext(TotalUsers);
	const [isOpen, setIsOpen] = useState(false);
	const [assignees, setAssignees] = useState([]);
	function handleSelected(e) {
		let thisElement = e.target;
		const multiple = thisElement.getAttribute('multi');
		while (!thisElement.id) {
			thisElement = thisElement.parentNode;
		}
		const thisUser = total.users.find((user) => {
			return user._id === thisElement.id;
		});
		checkSelected(thisUser, multiple);
	}

	function checkSelected(user, multiple) {
		const alreadyAssigned = assignees.findIndex((assignee) => assignee.id === user._id);
		if (alreadyAssigned === -1) {
			if (multiple !== null) {
				setAssignees((prev) => [
					...prev,
					{
						src: user.img,
						id: user._id,
					},
				]);
			} else {
				setAssignees([
					{
						src: user.img,
						id: user._id,
					},
				]);
				setIsOpen(false);
			}
		} else {
			if (multiple !== null) {
				assignees.splice(alreadyAssigned, 1);
				setAssignees((prev) => [...prev]);
			} else {
				setAssignees([]);
			}
		}
	}
	const value = {
		assignees,
		setAssignees,
		handleSelected,
		isOpen,
		setIsOpen,
	};
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;
