import styles from '../../ChangePermission.module.scss';
import useClass from '~/hooks/useClass';
import { useContext } from 'react';
import { GroupContext } from '~/pages/App/pages/AdminConfiguration/components/GroupsTable/context/GroupProvider';

function GlobalTask() {
	const cx = useClass(styles);
	const modal = useContext(GroupContext);
	return (
		<tr>
			<td className={cx('bordered')}>Task Management (Global)</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="globalTaskManager"
					value="create"
					defaultChecked={modal.groupInfo?.globalTaskManager.create}
				/>
			</td>
			<td className={cx('bordered')}></td>
			<td className={cx('bordered')}></td>
			<td className={cx('bordered')}></td>
		</tr>
	);
}

export default GlobalTask;
