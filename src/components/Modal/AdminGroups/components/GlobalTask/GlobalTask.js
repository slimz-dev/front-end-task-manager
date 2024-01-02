import styles from '../../AddGroups.module.scss';
import useClass from '~/hooks/useClass';

function GlobalTask() {
	const cx = useClass(styles);
	return (
		<tr>
			<td className={cx('bordered')}>Task Management (Global)</td>
			<td className={cx('bordered')}>
				<input type="checkbox" name="globalTaskManager" value="create" />
			</td>
			<td className={cx('bordered')}></td>
			<td className={cx('bordered')}></td>
			<td className={cx('bordered')}></td>
		</tr>
	);
}

export default GlobalTask;
