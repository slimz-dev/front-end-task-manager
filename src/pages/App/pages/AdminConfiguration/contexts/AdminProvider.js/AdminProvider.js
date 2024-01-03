import { useState, useRef, createContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { deleteMultipleGroup } from '~/services/GroupService/deleteMultipleGroupService';
import { getTotalGroups } from '~/services/GroupService/groupPermissionService';
import { socket } from '~/socket';
export const AdminContext = createContext();

function AdminProvider({ children }) {
	const [isChecked, setIsChecked] = useState({ checked: false, deleted: [] });
	const [groupsRender, setGroupsRender] = useState([]);
	const inputRef = useRef({});

	useEffect(() => {
		const fetchGroup = async () => {
			const result = await getTotalGroups();
			setGroupsRender(result.data);
		};
		fetchGroup();
	}, []);
	socket.on('new_group_update', (data) => {
		setGroupsRender(data.groups);
	});

	function handleChecked(e) {
		let deleteGroups = isChecked.deleted;
		setIsChecked(() => {
			// Loop all groups
			if (e.target.checked) {
				for (const [key, value] of Object.entries(inputRef.current)) {
					if (!value.checked) {
						deleteGroups.push(key);
						value.checked = true;
					}
				}
			} else {
				deleteGroups = [];
				for (const [key, value] of Object.entries(inputRef.current)) {
					if (value.checked) {
						value.checked = false;
					}
				}
			}
			return {
				checked: e.target.checked,
				deleted: deleteGroups,
			};
		});
	}
	function handleSingleChecked(e) {
		//Find the group change
		function findGroup() {
			for (const [key, value] of Object.entries(inputRef.current)) {
				if (value === e.target) {
					return key;
				}
			}
		}
		const groupFind = findGroup();
		setIsChecked((prev) => {
			//Find already deleted
			const isDeleted = prev.deleted.findIndex((group) => {
				return group === groupFind;
			});

			if (isDeleted !== -1) {
				//Already deleted => reverse
				prev.deleted.splice(isDeleted, 1);
				const arrayAfterDrop = prev.deleted;
				return {
					checked: false,
					deleted: arrayAfterDrop,
				};
			}
			//Haven't delete => push to deleted array
			prev.deleted.push(groupFind);
			const arrayAfterAdd = prev.deleted;
			return {
				checked: false,
				deleted: arrayAfterAdd,
			};
		});
	}

	function handleDeletedAction() {
		if (isChecked.deleted.length === 0) {
			toast.warn('No deleted groups found ❗', {
				position: 'top-center',
				autoClose: 1000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark',
			});
		} else {
			const deleteMulti = async () => {
				const groups = isChecked.deleted;
				const result = await deleteMultipleGroup(groups);
			};
			deleteMulti();
			toast.success('Deleted !!! ', {
				position: 'top-center',
				autoClose: 1000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark',
			});
		}
	}
	const value = {
		isChecked,
		handleChecked,
		handleSingleChecked,
		handleDeletedAction,
		inputRef,
		groupsRender,
	};
	return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
}

export default AdminProvider;
