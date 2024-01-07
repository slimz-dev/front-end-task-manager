import { ToastContainer } from 'react-toastify';

//context
import DepartmentProvider from './contexts/DepartmentProvider/DepartmentProvider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

//css
import styles from './Project.module.scss';

//hook
import DepartmentsTable from './components/managerDepartmentComponents/DepartmentsTable/DepartmentsTable';

import { useState } from 'react';
import Projects from './components/Projects/Projects';
function Project() {
	const [isDepartment, setIsDepartment] = useState(true);
	const value = {
		setIsDepartment,
	};
	return (
		<DepartmentProvider data={value}>
			{isDepartment ? <DepartmentsTable /> : <Projects />}
			<ToastContainer />
		</DepartmentProvider>
	);
}

export default Project;
