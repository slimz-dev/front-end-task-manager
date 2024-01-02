import styles from '../../ChangePermission.module.scss';
import useClass from '~/hooks/useClass';
import { useContext } from 'react';
import { GroupContext } from '~/pages/App/pages/AdminConfiguration/components/GroupsTable/context/GroupProvider';

function TotalEmployees() {
	const cx = useClass(styles);
	const modal = useContext(GroupContext);
	return (
		<tr>
			<td className={cx('bordered')}>Total employees</td>
			<td className={cx('bordered')}></td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="totalEmployees"
					value="read"
					defaultChecked={modal.groupInfo?.totalEmployees.read}
				/>
			</td>
			<td className={cx('bordered')}></td>
			<td className={cx('bordered')}></td>
		</tr>
	);
}

export default TotalEmployees;
