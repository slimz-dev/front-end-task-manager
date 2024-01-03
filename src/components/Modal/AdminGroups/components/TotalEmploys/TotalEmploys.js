import styles from '../../AddGroups.module.scss';
import useClass from '~/hooks/useClass';
import { useContext } from 'react';
import { PermissionContext } from '../../context/PermissionProvider';

function TotalEmployees() {
	const cx = useClass(styles);
	const permission = useContext(PermissionContext);
	return (
		<tr>
			<td className={cx('bordered')}>Total employees</td>
			<td className={cx('bordered')}></td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="totalEmployees"
					value="read"
					onChange={permission.handleChangePermission}
				/>
			</td>
			<td className={cx('bordered')}></td>
			<td className={cx('bordered')}></td>
		</tr>
	);
}

export default TotalEmployees;
