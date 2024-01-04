import { ToastContainer } from 'react-toastify';

//context
import UserAssignProvider from '../../contexts/UserAssignProvider/UserAssignProvider';
import UserProvider from '../components/managerUserComponents/UsersTable/context/UserProvider';
import { MainContext } from '../../AdminConfiguration';

//component
import UsersTable from '../components/managerUserComponents/UsersTable/UsersTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

//css
import styles from '../../AdminConfiguration.module.scss';

//hook
import useClass from '~/hooks/useClass';
import { useContext } from 'react';
function ManageUser() {
	const cx = useClass(styles);
	const main = useContext(MainContext);

	return (
		<main className="content">
			<UserAssignProvider>
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
									<UserProvider>
										<UsersTable />
									</UserProvider>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ToastContainer />
			</UserAssignProvider>
		</main>
	);
}

export default ManageUser;
