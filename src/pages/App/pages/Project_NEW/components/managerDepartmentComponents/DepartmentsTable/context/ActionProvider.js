import { createContext, useState, useEffect, useContext } from 'react';
import { DepartmentContext } from '~/pages/App/pages/AdminConfiguration/contexts/DepartmentProvider/DepartmentProvider';
import { deleteDepartment } from '~/services/DepartmentService/deleteDepartmentService';
import { getDepartment } from '~/services/DepartmentService/getDepartmentService';

export const ActionContext = createContext();

function ActionProvider({ children }) {
	const [show, setShow] = useState(false);
	const [departmentInfo, setDepartmentInfo] = useState({});

	function handleSetShow(e) {
		let thisElement = e.target.parentNode;
		while (!thisElement.id) {
			thisElement = thisElement.parentNode;
		}

		const thisDepartment = thisElement.id;
		const fetchGroup = async () => {
			const result = await getDepartment(thisDepartment);
			setDepartmentInfo(() => {
				return result.data[0];
			});
		};
		fetchGroup();
	}
	function handleDelete(e) {
		let thisElement = e.target.parentNode;
		while (!thisElement.id) {
			thisElement = thisElement.parentNode;
		}
		const thisDepartment = thisElement.id;
		const deleteApi = async () => {
			const result = await deleteDepartment(thisDepartment);
		};
		deleteApi();
	}
	useEffect(() => {
		if (Object.keys(departmentInfo).length !== 0) {
			setShow(true);
		}
	}, [departmentInfo]);

	function handleClose() {
		setShow(false);
	}
	const value = {
		show,
		handleSetShow,
		handleClose,
		setDepartmentInfo,
		departmentInfo,
		handleDelete,
	};
	return <ActionContext.Provider value={value}>{children}</ActionContext.Provider>;
}

export default ActionProvider;
