import styles from '../../ChangePermission.module.scss';
import useClass from '~/hooks/useClass';
import { useContext } from 'react';
import { GroupContext } from '~/pages/App/pages/AdminConfiguration/components/GroupsTable/context/GroupProvider';

function LocalMember() {
	const cx = useClass(styles);
	const modal = useContext(GroupContext);
	return (
		<tr>
			<td className={cx('bordered')}>Member Management (Team)</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="localMemberManager"
					value="create"
					defaultChecked={modal.groupInfo.localMemberManager.create}
				/>
			</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="localMemberManager"
					value="read"
					defaultChecked={modal.groupInfo.localMemberManager.read}
				/>
			</td>
			<td className={cx('bordered')}>
				<input
					type="checkbox"
					name="localMemberManager"
					value="delete"
					defaultChecked={modal.groupInfo.localMemberManager.delete}
				/>
			</td>
			<td></td>
		</tr>
	);
}

export default LocalMember;
