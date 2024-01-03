import { ToastContainer } from 'react-toastify';

//context
import ModalProvider from '~/contexts/ModalProvider';

import UsersTable from '../managerUserComponents/UsersTable/UsersTable';
import AdminProvider from '../../contexts/AdminProvider.js/AdminProvider';
import GroupProvider from '../managerUserComponents/UsersTable/context/GroupProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

//css
import styles from '../../AdminConfiguration.module.scss';

//hook
import useClass from '~/hooks/useClass';
import { useContext } from 'react';
import { MainContext } from '../../AdminConfiguration';
function ManageUser() {
	const cx = useClass(styles);
	const main = useContext(MainContext);
	console.log(main);
	return (
		<main className="content">
			<AdminProvider>
				<div className="container-fluid p-0">
					<h1 className="h3 mb-3">Manage Users</h1>
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
									<GroupProvider>
										<UsersTable />
									</GroupProvider>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ToastContainer />
			</AdminProvider>
		</main>
	);
}

export default ManageUser;
