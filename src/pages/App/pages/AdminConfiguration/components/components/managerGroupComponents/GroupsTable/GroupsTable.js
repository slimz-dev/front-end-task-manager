import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

//api methods
import { getTotalGroups } from '~/services/GroupService/groupPermissionService';
//css
import styles from '../../../../AdminConfiguration.module.scss';

//Component render
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faXmark } from '@fortawesome/free-solid-svg-icons';

//context
import { AdminContext } from '../../../../contexts/AdminProvider.js/AdminProvider';
import { GroupContext } from './context/GroupProvider';

import ChangePermission from '~/components/Modal/ChangePermission/ChangePermission';
import { UserContext } from '~/contexts/userProvider';

import toastDenied from '~/toastDenied/toast';

const cx = classNames.bind(styles);

function GroupsTable() {
	const user = useContext(UserContext);
	const groups = useContext(AdminContext);
	const modal = useContext(GroupContext);
	function handleShow(e) {
		if (user.info.role.admin.update) {
			modal.handleSetShow(e);
		} else {
			toastDenied();
		}
	}

	function handleDelete(e) {
		if (user.info.role.admin.delete) {
			modal.handleDelete(e);
		} else {
			toastDenied();
		}
	}
	return (
		<>
			<table
				id="datatables-clients"
				className={cx('table table-striped', 'bordered')}
				style={{ width: '100%' }}
			>
				<thead>
					<tr>
						<th className={cx('bordered')}>
							<input
								type="checkbox"
								checked={groups.isChecked.checked}
								onChange={(e) => groups.handleChecked(e)}
							/>
						</th>
						<th className={cx('bordered')}>#</th>
						<th className={cx('w-80rem', 'bordered')}>Name</th>
						<th className={cx('bordered')}>Change</th>
						<th className={cx('bordered')}>Delete</th>
					</tr>
				</thead>
				<tbody>
					{groups.groupsRender.map((group, index) => {
						const groupId = group._id;
						return (
							<tr key={groupId} id={groupId}>
								<td className={cx('bordered')}>
									<input
										ref={(e) => (groups.inputRef.current[groupId] = e)}
										type="checkbox"
										onChange={(e) => groups.handleSingleChecked(e)}
									/>
								</td>
								<td className={cx('bordered')}>{index + 1}</td>
								<td className={cx('bordered')}>{group.name}</td>
								<td
									className={cx('bordered', 'align-center', 'black-color')}
									onClick={(e) => handleShow(e)}
								>
									<FontAwesomeIcon icon={faPencil} />
								</td>
								<td
									className={cx('bordered', 'align-center', 'red-color')}
									onClick={(e) => handleDelete(e)}
								>
									<FontAwesomeIcon icon={faXmark} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<ChangePermission />
		</>
	);
}

export default GroupsTable;
