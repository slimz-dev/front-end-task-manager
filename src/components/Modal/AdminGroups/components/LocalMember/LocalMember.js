import styles from '../../AddGroups.module.scss';
import useClass from '~/hooks/useClass';

function LocalMember() {
	const cx = useClass(styles);
	return (
		<tr>
			<td className={cx('bordered')}>Member Management (Team)</td>
			<td className={cx('bordered')}>
				<input type="checkbox" name="localMemberManager" value="create" />
			</td>
			<td className={cx('bordered')}>
				<input type="checkbox" name="localMemberManager" value="read" />
			</td>
			<td className={cx('bordered')}>
				<input type="checkbox" name="localMemberManager" value="delete" />
			</td>
			<td></td>
		</tr>
	);
}

export default LocalMember;
