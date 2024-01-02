import styles from '../../AddGroups.module.scss';
import useClass from '~/hooks/useClass';

function LocalTask() {
	const cx = useClass(styles);
	return (
		<tr>
			<td className={cx('bordered')}>Task Management (Team)</td>
			<td className={cx('bordered')}>
				<input type="checkbox" name="localTaskManager" value="create" />
			</td>
			<td className={cx('bordered')}>
				<input type="checkbox" name="localTaskManager" value="read" />
			</td>
			<td className={cx('bordered')}>
				<input type="checkbox" name="localTaskManager" value="delete" />
			</td>
			<td className={cx('bordered')}>
				<input type="checkbox" name="localTaskManager" value="update" />
			</td>
		</tr>
	);
}

export default LocalTask;
