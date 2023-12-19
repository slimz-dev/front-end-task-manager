import { useContext } from 'react';
import classNames from 'classnames/bind';

import Img from '~/components/Img/Img';
import { TotalUsers } from '../context/TotalUsersProvider';
import styles from '../Member.module.scss';

const cx = classNames.bind(styles);

function AllUsers() {
	const totalUsers = useContext(TotalUsers);
	function handleChoose(e) {
		const userId = e.target.parentNode.id;
		const thisUser = totalUsers.users.find((user) => {
			return user._id === userId;
		});
		totalUsers.setSingleUser(thisUser);
	}
	return (
		<div className="card">
			<div className="card-header">
				<div className="card-actions float-right">
					<div className="dropdown show">
						<a href="#" data-toggle="dropdown" data-display="static">
							<i className="align-middle" data-feather="more-horizontal"></i>
						</a>

						<div className="dropdown-menu dropdown-menu-right">
							<a className="dropdown-item" href="#">
								Action
							</a>
							<a className="dropdown-item" href="#">
								Another action
							</a>
							<a className="dropdown-item" href="#">
								Something else here
							</a>
						</div>
					</div>
				</div>
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
							<th>Company</th>
							<th>Email</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{totalUsers.users.map((user) => {
							return (
								<tr
									key={user._id}
									id={user._id}
									className={cx('hover', {
										active: user._id === totalUsers.singleUser._id,
									})}
									onClick={(e) => handleChoose(e)}
								>
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
									<td>senior</td>
									<td>{user.email}</td>
									<td>
										<span
											className={cx('badge', {
												'badge-success': user.state,
												'badge-warning': !user.state,
											})}
										>
											{user.state ? 'Active' : 'Inactive'}
										</span>
									</td>
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
