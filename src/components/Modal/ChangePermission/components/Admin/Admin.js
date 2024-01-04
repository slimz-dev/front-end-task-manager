import styles from '../../ChangePermission.module.scss';
import useClass from '~/hooks/useClass';
import usePermission from '../../hooks/usePermission';
import { useContext } from 'react';
import { GroupContext } from '~/pages/App/pages/AdminConfiguration/components/components/managerGroupComponents/GroupsTable/context/GroupProvider';

function AdminPermissions() {
	const permission = usePermission();
	const modal = useContext(GroupContext);
	const cx = useClass(styles);
	return (
		<tr>
			<td className={cx('bordered')}>Admin Permissions</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="admin"
					value="create"
					onChange={permission.handleChangePermission}
					defaultChecked={modal.groupInfo?.admin.create}
				/>
			</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="admin"
					value="read"
					defaultChecked={modal.groupInfo?.admin.read}
					onChange={permission.handleChangePermission}
				/>
			</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="admin"
					value="delete"
					defaultChecked={modal.groupInfo?.admin.delete}
					onChange={permission.handleChangePermission}
				/>
			</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="admin"
					value="update"
					defaultChecked={modal.groupInfo?.admin.update}
					onChange={permission.handleChangePermission}
				/>
			</td>
		</tr>
	);
}

export default AdminPermissions;
