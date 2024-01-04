import { ToastContainer } from 'react-toastify';

//context
import ModalProvider from '~/contexts/ModalProvider';

import ActionGroups from '../components/managerGroupComponents/ActionGroups/ActionGroups';
import GroupsTable from '../components/managerGroupComponents/GroupsTable/GroupsTable';
import AdminProvider from '../../contexts/AdminProvider.js/AdminProvider';
import GroupProvider from '../components/managerGroupComponents/GroupsTable/context/GroupProvider';

function ManageGroup() {
	return (
		<main className="content">
			<AdminProvider>
				<div className="container-fluid p-0">
					<h1 className="h3 mb-3">Manage Groups</h1>
					<div className="row">
						<div className="col-xl-12">
							<div className="card">
								<div className="card-body">
									<GroupProvider>
										<GroupsTable />
									</GroupProvider>
								</div>
							</div>
						</div>
					</div>
					<ModalProvider>
						<ActionGroups />
					</ModalProvider>
				</div>
				<ToastContainer />
			</AdminProvider>
		</main>
	);
}

export default ManageGroup;
