import { useContext } from 'react';
import classNames from 'classnames/bind';

import Img from '~/components/Img/Img';
import { TotalUsers } from '../context/TotalUsersProvider';
import styles from '../MyDepartment.module.scss';

const cx = classNames.bind(styles);

function AllUsers() {
	const totalUsers = useContext(TotalUsers);
	return (
		<div className="card">
			<div className="card-header">
				<h5 className="card-title mb-0">Members</h5>
			</div>
			<div className="card-body">
				<table
					id="datatables-clients"
					className="table table-striped"
					style={{ width: '100%' }}
				>
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Position</th>
							<th>Department</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>
						{totalUsers.users.map((user) => {
							return (
								<tr key={user._id} id={user._id} className={cx('hover')}>
									<td>
										<Img
											src={user.img ? user.img : ''}
											width="32"
											height="32"
											className="rounded-circle my-n1"
											alt="Avatar"
										/>
									</td>
									<td>{`${user.firstName} ${
										user.lastName ? user.lastName : ''
									}`}</td>
									<td>{user.role.name}</td>
									<td>{user.department?.name}</td>
									<td>{user.email}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default AllUsers;
