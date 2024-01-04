import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

//api methods
import { getTotalGroups } from '~/services/GroupService/groupPermissionService';
//css
import styles from '../../../../AdminConfiguration.module.scss';

//Component render
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

//context
import { AdminContext } from '../../../../contexts/AdminProvider.js/AdminProvider';
import { UserContext } from './context/UserProvider';

//socket
import { socket } from '~/socket';
import ChangePermission from '~/components/Modal/ChangePermission/ChangePermission';
import { UserAssignContext } from '../../../../contexts/UserAssignProvider/UserAssignProvider';
import UserGroupUpdate from '~/components/Modal/UserGroupUpdate/UserGroupUpdate';

const cx = classNames.bind(styles);

function UsersTable() {
	const users = useContext(UserAssignContext);
	const modal = useContext(UserContext);
	return (
		<>
			<table
				id="datatables-clients"
				className={cx('table table-striped', 'bordered')}
				style={{ width: '100%' }}
			>
				<thead>
					<tr>
						<th className={cx('bordered')}>#</th>
						<th className={cx('w-70rem', 'bordered')}>Name</th>
						<th className={cx('w-21rem', 'bordered', 'text-center')}>Group</th>
						<th className={cx('w-21rem', 'bordered', 'text-center')}>Department</th>
						<th className={cx('bordered')}>Change</th>
					</tr>
				</thead>
				<tbody>
					{users.usersRender.map((user, index) => {
						const groupId = user._id;
						return (
							<tr key={groupId} id={groupId}>
								<td className={cx('bordered')}>{index + 1}</td>
								<td className={cx('bordered')}>{`${user.firstName} ${
									user.lastName ? user.lastName : ''
								}`}</td>
								<td className={cx('bordered', 'align-center', 'black-color')}>
									{user.role ? user.role.name : ''}
								</td>
								<td className={cx('bordered', 'align-center', 'black-color')}>
									{user.department ? user.department.name : ''}
								</td>
								<td
									className={cx('bordered', 'align-center', 'black-color')}
									onClick={(e) => modal.handleSetShow(e)}
								>
									<FontAwesomeIcon icon={faPencil} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<UserGroupUpdate />
		</>
	);
}

export default UsersTable;
