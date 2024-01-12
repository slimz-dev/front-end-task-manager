import { ToastContainer } from 'react-toastify';
//context
import DepartmentProvider from './contexts/DepartmentProvider/DepartmentProvider';
import DepartmentsTable from './components/managerDepartmentComponents/DepartmentsTable/DepartmentsTable';

function Project() {
	return (
		<DepartmentProvider>
			<DepartmentsTable />
			<ToastContainer />
		</DepartmentProvider>
	);
}

export default Project;
