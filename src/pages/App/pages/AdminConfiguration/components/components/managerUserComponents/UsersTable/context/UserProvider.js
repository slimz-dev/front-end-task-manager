import { createContext, useState, useEffect } from 'react';

import { getGroup } from '~/services/GroupService/getGroupService';
export const UserContext = createContext();

function UserProvider({ children }) {
	const [show, setShow] = useState(false);

	const [userInfo, setUserInfo] = useState({});

	function handleSetShow(e) {
		let thisElement = e.target.parentNode;
		while (!thisElement.id) {
			thisElement = thisElement.parentNode;
		}

		const thisUser = thisElement.id;
		setShow(true);
	}

	function handleClose() {
		setShow(false);
	}
	const value = {
		show,
		handleSetShow,
		handleClose,
	};
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;
