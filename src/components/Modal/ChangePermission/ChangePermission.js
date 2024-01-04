import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

//context

import { GroupContext } from '~/pages/App/pages/AdminConfiguration/components/components/managerGroupComponents/GroupsTable/context/GroupProvider';

//component render
import { Modal } from 'react-bootstrap';
import AdminPermissions from './components/Admin/Admin';
import LocalMember from './components/LocalMember/LocalMember';
import GlobalMember from './components/GlobalMember/GlobalMember';
import LocalTask from './components/LocalTask/LocalTask';
import GlobalTask from './components/GlobalTask/GlobalTask';
import Invite from './components/Invite/Invite';
import TotalEmployees from './components/TotalEmploys/TotalEmploys';
import FooterButton from './components/FooterButton/FooterButton';
import PermissionProvder from './context/PermissionProvider';
import GroupName from './components/GroupName/GroupName';

//css
import styles from './ChangePermission.module.scss';

const cx = classNames.bind(styles);
const ChangePermission = () => {
	const modal = useContext(GroupContext);
	function hideModal() {
		modal.handleClose();
	}

	return (
		<Modal show={modal.show} onHide={hideModal} size="lg" centered className={cx('effect')}>
			<PermissionProvder>
				<Modal.Header>
					<Modal.Title>
						<strong>Update Group</strong>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className={cx('d-flex', 'flex-column')}>
					<GroupName />
					<div className={cx('d-flex', 'flex-row', 'assign')}>
						<table
							id="datatables-clients"
							className={cx('table', 'bordered')}
							style={{ width: '100%' }}
						>
							<thead>
								<tr>
									<th className={cx('bordered')}>Permission</th>
									<th className={cx('w-80rem', 'bordered')}>Add</th>
									<th className={cx('bordered')}>View</th>
									<th className={cx('bordered')}>Delete</th>
									<th className={cx('bordered')}>Change</th>
								</tr>
							</thead>
							<tbody>
								<AdminPermissions />
								<LocalMember />
								<GlobalMember />
								<LocalTask />
								<GlobalTask />
								<Invite />
								<TotalEmployees />
							</tbody>
						</table>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<FooterButton />
				</Modal.Footer>
			</PermissionProvder>
		</Modal>
	);
};

export default ChangePermission;
