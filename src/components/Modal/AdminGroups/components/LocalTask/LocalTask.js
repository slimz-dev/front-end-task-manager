import styles from '../../AddGroups.module.scss';
import useClass from '~/hooks/useClass';
import { useContext } from 'react';
import { PermissionContext } from '../../context/PermissionProvider';

function LocalTask() {
	const cx = useClass(styles);
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
				/>
			</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="localTaskManager"
					value="read"
					onChange={permission.handleChangePermission}
				/>
			</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="localTaskManager"
					value="delete"
					onChange={permission.handleChangePermission}
				/>
			</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="localTaskManager"
					value="update"
					onChange={permission.handleChangePermission}
				/>
			</td>
		</tr>
	);
}

export default LocalTask;
