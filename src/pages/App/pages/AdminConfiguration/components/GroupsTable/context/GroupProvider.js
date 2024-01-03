import { createContext, useState, useEffect } from 'react';
import { deleteGroup } from '~/services/GroupService/deleteGroupService';
import { getGroup } from '~/services/GroupService/getGroupService';
export const GroupContext = createContext();

function GroupProvider({ children }) {
	const [show, setShow] = useState(false);

	const [groupInfo, setGroupInfo] = useState({});

	function handleSetShow(e) {
		let thisElement = e.target.parentNode;
		while (!thisElement.id) {
			thisElement = thisElement.parentNode;
		}

		const thisGroup = thisElement.id;
		const fetchGroup = async () => {
			const result = await getGroup(thisGroup);
			setGroupInfo(result.data[0]);
		};
		fetchGroup();
	}
	function handleDelete(e) {
		let thisElement = e.target.parentNode;
		while (!thisElement.id) {
			thisElement = thisElement.parentNode;
		}
		const thisGroup = thisElement.id;
		const deleteApi = async () => {
			const result = await deleteGroup(thisGroup);
		};
		deleteApi();
	}
	useEffect(() => {
		if (Object.keys(groupInfo).length !== 0) {
			setShow(true);
		}
	}, [groupInfo]);

	function handleClose() {
		setShow(false);
	}
	const value = {
		show,
		handleSetShow,
		handleClose,
		setGroupInfo,
		groupInfo,
		handleDelete,
	};
	return <GroupContext.Provider value={value}>{children}</GroupContext.Provider>;
}

export default GroupProvider;
