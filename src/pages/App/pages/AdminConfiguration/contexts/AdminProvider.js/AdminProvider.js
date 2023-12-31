import { useState, useRef, createContext } from 'react';
import { toast } from 'react-toastify';

export const AdminContext = createContext();

function AdminProvider({ children }) {
	const [isChecked, setIsChecked] = useState({ checked: false, deleted: [] });
	const inputRef = useRef([]);
	function handleChecked(e) {
		let count = isChecked.deleted;
		setIsChecked(() => {
			// Loop all groups
			inputRef.current.forEach((group, index) => {
				// Set deleted state
				if (e.target.checked) {
					//Finding already checked
					const element = count.find((groupFind) => {
						return groupFind === index;
					});
					if (element === undefined) {
						count.push(index);
					}
				} else {
					count = [];
				}
				// Set state check to all groups
				group.checked = e.target.checked;
			});
			return {
				checked: e.target.checked,
				deleted: count,
			};
		});
	}

	function handleSingleChecked(e) {
		//Find the group change
		const groupFind = inputRef.current.findIndex((group) => {
			return group === e.target;
		});
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
			toast.success('Deleting.. ', {
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
	};
	return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
}

export default AdminProvider;
