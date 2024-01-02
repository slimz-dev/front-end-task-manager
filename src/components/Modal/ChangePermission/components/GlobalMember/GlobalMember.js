import styles from '../../ChangePermission.module.scss';
import useClass from '~/hooks/useClass';
import { useContext } from 'react';
import { GroupContext } from '~/pages/App/pages/AdminConfiguration/components/GroupsTable/context/GroupProvider';

function GlobalMember() {
	const cx = useClass(styles);
	const modal = useContext(GroupContext);
	return (
		<tr>
			<td className={cx('bordered')}>Member Management (Global)</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="globalMemberManager"
					value="create"
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
