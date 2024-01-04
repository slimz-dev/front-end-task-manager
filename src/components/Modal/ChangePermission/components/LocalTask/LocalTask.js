import styles from '../../ChangePermission.module.scss';
import useClass from '~/hooks/useClass';
import { useContext } from 'react';
import { GroupContext } from '~/pages/App/pages/AdminConfiguration/components/components/managerGroupComponents/GroupsTable/context/GroupProvider';
import { PermissionContext } from '../../context/PermissionProvider';

function LocalTask() {
	const cx = useClass(styles);
	const modal = useContext(GroupContext);
	const permission = useContext(PermissionContext);
	return (
		<tr>
			<td className={cx('bordered')}>Task Management (Team)</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="localTaskManager"
					value="create"
					onChange={permission.handleChangePermission}
					defaultChecked={modal.groupInfo.localTaskManager.create}
				/>
			</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="localTaskManager"
					value="read"
					onChange={permission.handleChangePermission}
					defaultChecked={modal.groupInfo.localTaskManager.read}
				/>
			</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="localTaskManager"
					value="delete"
					onChange={permission.handleChangePermission}
					defaultChecked={modal.groupInfo.localTaskManager.delete}
				/>
			</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="localTaskManager"
					value="update"
					onChange={permission.handleChangePermission}
					defaultChecked={modal.groupInfo.localTaskManager.update}
				/>
			</td>
		</tr>
	);
}

export default LocalTask;
