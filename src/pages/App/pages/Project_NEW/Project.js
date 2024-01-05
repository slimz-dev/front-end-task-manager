import { ToastContainer } from 'react-toastify';

//context
import DepartmentProvider from './contexts/DepartmentProvider/DepartmentProvider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

//css
import styles from './Project.module.scss';

//hook
import useClass from '~/hooks/useClass';

import DepartmentsTable from './components/managerDepartmentComponents/DepartmentsTable/DepartmentsTable';

import ActionProvider from './components/managerDepartmentComponents/DepartmentsTable/context/ActionProvider';
import { useState } from 'react';
function Project() {
	const [isDepartment, setIsDepartment] = useState(true);
	const value = {
		setIsDepartment,
	};
	return (
		<main className="content">
			<DepartmentProvider data={value}>
				<div className="container-fluid p-0">
					<h1 className="h3 mb-3">Select Departments</h1>
					<div className="row">
						<div className="col-xl-12">
							<div className="card">
								<div className="card-body">
									<ActionProvider>
										{isDepartment ? <DepartmentsTable /> : ''}
									</ActionProvider>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ToastContainer />
			</DepartmentProvider>
		</main>
	);
}

export default Project;
