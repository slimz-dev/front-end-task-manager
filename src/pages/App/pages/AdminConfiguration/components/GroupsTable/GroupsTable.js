import classNames from 'classnames/bind';
import styles from '../../AdminConfiguration.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { AdminContext } from '../../contexts/AdminProvider.js/AdminProvider';

const cx = classNames.bind(styles);

function GroupsTable() {
	const groups = useContext(AdminContext);
	return (
		<table
			id="datatables-clients"
			className={cx('table table-striped', 'bordered')}
			style={{ width: '100%' }}
		>
			<thead>
				<tr>
					<th className={cx('bordered')}>
						<input
							type="checkbox"
							checked={groups.isChecked.checked}
							onChange={(e) => groups.handleChecked(e)}
						/>
					</th>
					<th className={cx('bordered')}>#</th>
					<th className={cx('w-80rem', 'bordered')}>Name</th>
					<th className={cx('bordered')}>Change</th>
					<th className={cx('bordered')}>Delete</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className={cx('bordered')}>
						<input
							ref={(e) => (groups.inputRef.current[0] = e)}
							type="checkbox"
							onChange={(e) => groups.handleSingleChecked(e)}
						/>
					</td>
					<td className={cx('bordered')}>1</td>
					<td className={cx('bordered')}>Admin</td>
					<td className={cx('bordered', 'align-center', 'black-color')}>
						<FontAwesomeIcon icon={faPencil} />
					</td>
					<td className={cx('bordered', 'align-center', 'red-color')}>
						<FontAwesomeIcon icon={faXmark} />
					</td>
				</tr>
				<tr>
					<td className={cx('bordered')}>
						<input
							ref={(e) => (groups.inputRef.current[1] = e)}
							type="checkbox"
							onChange={(e) => groups.handleSingleChecked(e)}
						/>
					</td>
					<td className={cx('bordered')}>2</td>
					<td className={cx('bordered')}>Leader</td>
					<td className={cx('bordered', 'align-center', 'black-color')}>
						<FontAwesomeIcon icon={faPencil} />
					</td>
					<td className={cx('bordered', 'align-center', 'red-color')}>
						<FontAwesomeIcon icon={faXmark} />
					</td>
				</tr>
			</tbody>
		</table>
	);
}

export default GroupsTable;
