import styles from '../../AddGroups.module.scss';
import useClass from '~/hooks/useClass';

function Invite() {
	const cx = useClass(styles);
	return (
		<tr>
			<td className={cx('bordered')}>Invite Member</td>
			<td className={cx('bordered')}>
				<input type="checkbox" name="invite" value="create" />
			</td>
			<td className={cx('bordered')}></td>
			<td className={cx('bordered')}></td>
			<td className={cx('bordered')}></td>
		</tr>
	);
}

export default Invite;
