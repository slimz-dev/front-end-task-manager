import { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { toast, ToastContainer } from 'react-toastify';

//context
import ModalProvider from '~/contexts/ModalProvider';

//css
import styles from './AdminConfiguration.module.scss';
import ActionGroups from './components/ActionGroups/ActionGroups';
import GroupsTable from './components/GroupsTable/GroupsTable';
import AdminProvider from './contexts/AdminProvider.js/AdminProvider';
import GroupProvider from './components/GroupsTable/context/GroupProvider';

function AdminConfiguration() {
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

export default AdminConfiguration;
