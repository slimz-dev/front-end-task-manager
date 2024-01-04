import styles from '../../ChangePermission.module.scss';
import useClass from '~/hooks/useClass';
import { useContext } from 'react';
import { GroupContext } from '~/pages/App/pages/AdminConfiguration/components/components/managerGroupComponents/GroupsTable/context/GroupProvider';
import { PermissionContext } from '../../context/PermissionProvider';

function GlobalMember() {
	const cx = useClass(styles);
	const permission = useContext(PermissionContext);
	const modal = useContext(GroupContext);
	return (
		<tr>
			<td className={cx('bordered')}>Member Management (Global)</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="globalMemberManager"
					value="create"
					onChange={permission.handleChangePermission}
					defaultChecked={modal.groupInfo?.globalMemberManager.create}
				/>
			</td>
			<td className={cx('bordered')}></td>
			<td className={cx('bordered')}></td>
			<td></td>
		</tr>
	);
}

export default GlobalMember;
