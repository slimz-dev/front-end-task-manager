import styles from '../../ChangePermission.module.scss';
import useClass from '~/hooks/useClass';
import { useContext } from 'react';
import { GroupContext } from '~/pages/App/pages/AdminConfiguration/components/GroupsTable/context/GroupProvider';

function LocalTask() {
	const cx = useClass(styles);
	const modal = useContext(GroupContext);
	return (
		<tr>
			<td className={cx('bordered')}>Task Management (Team)</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="localTaskManager"
					value="create"
					defaultChecked={modal.groupInfo.localTaskManager.create}
				/>
			</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="localTaskManager"
					value="read"
					defaultChecked={modal.groupInfo.localTaskManager.read}
				/>
			</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="localTaskManager"
					value="delete"
					defaultChecked={modal.groupInfo.localTaskManager.delete}
				/>
			</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="localTaskManager"
					value="update"
					defaultChecked={modal.groupInfo.localTaskManager.update}
				/>
			</td>
		</tr>
	);
}

export default LocalTask;
