import styles from '../../AddGroups.module.scss';
import useClass from '~/hooks/useClass';

function GlobalMember() {
	const cx = useClass(styles);
	return (
		<tr>
			<td className={cx('bordered')}>Member Management (Global)</td>
			<td className={cx('bordered')}>
				<input type="checkbox" name="globalMemberManager" value="create" />
			</td>
			<td className={cx('bordered')}></td>
			<td className={cx('bordered')}></td>
			<td></td>
		</tr>
	);
}

export default GlobalMember;
