import styles from '../../AddGroups.module.scss';
import useClass from '~/hooks/useClass';

function TotalEmployees() {
	const cx = useClass(styles);
	return (
		<tr>
			<td className={cx('bordered')}>Total employees</td>
			<td className={cx('bordered')}></td>
			<td className={cx('bordered')}>
				<input type="checkbox" name="totalEmployees" value="read" />
			</td>
			<td className={cx('bordered')}></td>
			<td className={cx('bordered')}></td>
		</tr>
	);
}

export default TotalEmployees;
