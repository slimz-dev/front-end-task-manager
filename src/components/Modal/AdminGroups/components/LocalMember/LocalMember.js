import styles from '../../AddGroups.module.scss';
import useClass from '~/hooks/useClass';
import { useContext } from 'react';
import { PermissionContext } from '../../context/PermissionProvider';

function LocalMember() {
	const cx = useClass(styles);
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
				/>
			</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="localMemberManager"
					value="read"
					onChange={permission.handleChangePermission}
				/>
			</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="localMemberManager"
					value="delete"
					onChange={permission.handleChangePermission}
				/>
			</td>
			<td></td>
		</tr>
	);
}

export default LocalMember;
