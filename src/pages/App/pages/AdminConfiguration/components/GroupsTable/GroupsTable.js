import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

//api methods
import { getTotalGroups } from '~/services/GroupService/groupPermissionService';
//css
import styles from '../../AdminConfiguration.module.scss';

//Component render
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faXmark } from '@fortawesome/free-solid-svg-icons';

//context
import { AdminContext } from '../../contexts/AdminProvider.js/AdminProvider';
import { GroupContext } from './context/GroupProvider';

//socket
import { socket } from '~/socket';
import ChangePermission from '~/components/Modal/ChangePermission/ChangePermission';

const cx = classNames.bind(styles);

function GroupsTable() {
	const groups = useContext(AdminContext);
	const modal = useContext(GroupContext);
	const [groupsRender, setGroupsRender] = useState([]);
	useEffect(() => {
		const fetchGroup = async () => {
			const result = await getTotalGroups();
			setGroupsRender(result.data);
		};
		fetchGroup();
	}, []);
	socket.on('new_group_update', (data) => {
		setGroupsRender(data.groups);
	});
	return (
		<>
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
					{groupsRender.map((group, index) => {
						return (
							<tr key={group._id} id={group._id}>
								<td className={cx('bordered')}>
									<input
										ref={(e) => (groups.inputRef.current[index] = e)}
										type="checkbox"
										onChange={(e) => groups.handleSingleChecked(e)}
									/>
								</td>
								<td className={cx('bordered')}>{index + 1}</td>
								<td className={cx('bordered')}>{group.name}</td>
								<td
									className={cx('bordered', 'align-center', 'black-color')}
									onClick={(e) => modal.handleSetShow(e)}
								>
									<FontAwesomeIcon icon={faPencil} />
								</td>
								<td className={cx('bordered', 'align-center', 'red-color')}>
									<FontAwesomeIcon icon={faXmark} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<ChangePermission />
		</>
	);
}

export default GroupsTable;
