import styles from '../../ChangePermission.module.scss';
import useClass from '~/hooks/useClass';
import { useContext } from 'react';
import { GroupContext } from '~/pages/App/pages/AdminConfiguration/components/managerGroupComponents/GroupsTable/context/GroupProvider';
import { PermissionContext } from '../../context/PermissionProvider';

function LocalMember() {
	const cx = useClass(styles);
	const modal = useContext(GroupContext);
	const permission = useContext(PermissionContext);
	return (
		<tr>
			<td className={cx('bordered')}>Member Management (Team)</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="localMemberManager"
					value="create"
					onChange={permission.handleChangePermission}
					defaultChecked={modal.groupInfo.localMemberManager.create}
				/>
			</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="localMemberManager"
					value="read"
					onChange={permission.handleChangePermission}
					defaultChecked={modal.groupInfo.localMemberManager.read}
				/>
			</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="localMemberManager"
					value="delete"
					onChange={permission.handleChangePermission}
					defaultChecked={modal.groupInfo.localMemberManager.delete}
				/>
			</td>
			<td></td>
		</tr>
	);
}

export default LocalMember;
