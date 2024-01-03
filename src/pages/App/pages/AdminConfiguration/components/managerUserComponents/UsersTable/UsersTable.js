import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

//api methods
import { getTotalGroups } from '~/services/GroupService/groupPermissionService';
//css
import styles from '../../../AdminConfiguration.module.scss';

//Component render
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

//context
import { AdminContext } from '../../../contexts/AdminProvider.js/AdminProvider';
import { GroupContext } from './context/GroupProvider';

//socket
import { socket } from '~/socket';
import ChangePermission from '~/components/Modal/ChangePermission/ChangePermission';

const cx = classNames.bind(styles);

function UsersTable() {
	const groups = useContext(AdminContext);
	const modal = useContext(GroupContext);
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
					{groups.groupsRender.map((group, index) => {
						const groupId = group._id;
						return (
							<tr key={groupId} id={groupId}>
								<td className={cx('bordered')}>{index + 1}</td>
								<td className={cx('bordered')}>{group.name}</td>
								<td
									className={cx('bordered', 'align-center', 'black-color')}
									onClick={(e) => modal.handleSetShow(e)}
								>
									Giám đốc
								</td>
								<td
									className={cx('bordered', 'align-center', 'black-color')}
									onClick={(e) => modal.handleSetShow(e)}
								>
									Phòng kinh doanh
								</td>
								<td
									className={cx('bordered', 'align-center', 'black-color')}
									onClick={(e) => modal.handleDelete(e)}
								>
									<FontAwesomeIcon icon={faPencil} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}

export default UsersTable;
