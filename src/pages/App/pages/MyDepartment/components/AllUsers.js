import { useContext, useState } from 'react';
import classNames from 'classnames/bind';

import Img from '~/components/Img/Img';
import { TotalUsers } from '../context/TotalUsersProvider';
import styles from '../MyDepartment.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '~/contexts/userProvider';
import { delUserDepartment } from '~/services/UserService/deleteUserDepartmentService';
import swal from 'sweetalert';
import { changeAssign } from '~/services/UserService/changeAssignGroupService';
import { socket } from '~/socket';

const cx = classNames.bind(styles);

function AllUsers() {
	const userContext = useContext(UserContext);
	const totalUsers = useContext(TotalUsers);
	const [isOpen, setIsOpen] = useState(false);
	function handleDelete(e) {
		let thisElement = e.target;
		while (!thisElement.id) {
			thisElement = thisElement.parentNode;
		}
		swal({
			title: 'Are you sure?',
			text: 'Are you sure to remove this person !',
			icon: 'warning',
			buttons: ['Cancel', 'Yes, do it !'],
			dangerMode: true,
		}).then((ok) => {
			const deleteDepartment = async () => {
				const result = await delUserDepartment(thisElement.id, userContext.info.department);
			};
			if (ok) {
				deleteDepartment();
			}
		});
	}

	function handleOpen() {
		setIsOpen(true);
	}
	function handleClose() {
		setIsOpen(false);
	}

	function handleChoose(e) {
		let thisElement = e.target;
		while (!thisElement.id) {
			thisElement = thisElement.parentNode;
		}
		swal({
			title: 'Are you sure?',
			text: 'Are you sure to add this person to your department !',
			icon: 'warning',
			buttons: ['Cancel', 'Yes, do it !'],
			dangerMode: true,
		}).then((ok) => {
			if (ok) {
				const changeDepartment = async () => {
					const data = {
						department: userContext.info.department,
					};
					const result = await changeAssign(thisElement.id, data);
				};

				changeDepartment();
			}
		});
	}
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
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{totalUsers.users.map((user) => {
							return (
								<tr key={user._id} id={user._id}>
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
									{userContext.info._id === user._id ? (
										<td></td>
									) : (
										<td
											className={cx('hover', 'text-justify')}
											onClick={(e) => handleDelete(e)}
										>
											<FontAwesomeIcon icon={faXmark} />
										</td>
									)}
								</tr>
							);
						})}
					</tbody>
				</table>
				<div>
					<span className={cx('add-button')} onClick={handleOpen}>
						+ Add more
					</span>
					{isOpen ? (
						<div className={cx('user-container')}>
							<div>
								<span className={cx('x-icon')} onClick={handleClose}>
									<FontAwesomeIcon icon={faXmark} />
								</span>
							</div>
							<div>
								{totalUsers.anonymousUser.map((user) => {
									return (
										<div
											key={user._id}
											id={user._id}
											className={cx(
												'd-flex',
												'align-items-center',
												'user-box'
											)}
											onClick={(e) => handleChoose(e)}
										>
											<div className={cx('img')}>
												<Img
													className={cx('w-100')}
													style={{ borderRadius: '50%' }}
													src={user.img ? user.img : ''}
												/>
											</div>
											<div>
												<span>
													{`${user.firstName} ${
														user.lastName ? user.lastName : ''
													}`}
												</span>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
}

export default AllUsers;
