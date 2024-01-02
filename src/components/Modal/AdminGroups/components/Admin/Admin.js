import styles from '../../AddGroups.module.scss';
import useClass from '~/hooks/useClass';
import usePermission from '../../hooks/usePermission';

function AdminPermissions() {
	const permission = usePermission();
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
				/>
			</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="admin"
					value="read"
					onChange={permission.handleChangePermission}
				/>
			</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="admin"
					value="delete"
					onChange={permission.handleChangePermission}
				/>
			</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="admin"
					value="update"
					onChange={permission.handleChangePermission}
				/>
			</td>
		</tr>
	);
}

export default AdminPermissions;
