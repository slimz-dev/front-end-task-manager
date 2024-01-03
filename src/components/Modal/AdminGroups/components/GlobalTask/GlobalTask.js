import styles from '../../AddGroups.module.scss';
import useClass from '~/hooks/useClass';
import { useContext } from 'react';
import { PermissionContext } from '../../context/PermissionProvider';

function GlobalTask() {
	const cx = useClass(styles);
	const permission = useContext(PermissionContext);
	return (
		<tr>
			<td className={cx('bordered')}>Task Management (Global)</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="globalTaskManager"
					value="create"
					onChange={permission.handleChangePermission}
				/>
			</td>
			<td className={cx('bordered')}></td>
			<td className={cx('bordered')}></td>
			<td className={cx('bordered')}></td>
		</tr>
	);
}

export default GlobalTask;
