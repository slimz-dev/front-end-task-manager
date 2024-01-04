import { ToastContainer } from 'react-toastify';

//context
import DepartmentProvider from '../../contexts/DepartmentProvider/DepartmentProvider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

//css
import styles from '../../AdminConfiguration.module.scss';

//hook
import useClass from '~/hooks/useClass';
import { useContext } from 'react';
import { MainContext } from '../../AdminConfiguration';
import DepartmentsTable from '../components/managerDepartmentComponents/DepartmentsTable/DepartmentsTable';
import ActionGroups from '../components/managerDepartmentComponents/ActionGroups/ActionGroups';
import ModalProvider from '~/contexts/ModalProvider';
import ActionProvider from '../components/managerDepartmentComponents/DepartmentsTable/context/ActionProvider';
function ManageDepartment() {
	const cx = useClass(styles);
	const main = useContext(MainContext);

	return (
		<main className="content">
			<DepartmentProvider>
				<div className="container-fluid p-0">
					<h1 className="h3 mb-3">Manage Departments</h1>
					<div className="row">
						<div className="col-xl-12">
							<div className="card">
								<div className="card-header">
									<div
										className={cx('hover')}
										onClick={() => main.handleChangeView(true)}
									>
										<FontAwesomeIcon icon={faLeftLong} size="xl" />
									</div>
								</div>
								<div className="card-body">
									<ActionProvider>
										<DepartmentsTable />
									</ActionProvider>
								</div>
							</div>
						</div>
					</div>
					<ModalProvider>
						<ActionGroups />
					</ModalProvider>
				</div>
				<ToastContainer />
			</DepartmentProvider>
		</main>
	);
}

export default ManageDepartment;
