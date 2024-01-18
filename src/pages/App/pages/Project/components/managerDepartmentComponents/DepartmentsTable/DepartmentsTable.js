import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

//css
import styles from '../../../Project.module.scss';

//context
import { DepartmentContext } from '../../../contexts/DepartmentProvider/DepartmentProvider';
import { UserContext } from '~/contexts/userProvider';
import toastDenied from '~/toastDenied/toast';
import { ToastContainer } from 'react-toastify';

const cx = classNames.bind(styles);

function DepartmentsTable() {
	const user = useContext(UserContext);
	const groups = useContext(DepartmentContext);
	function handleChoose(e) {
		let thisElement = e.target.parentNode;
		while (!thisElement.id) {
			thisElement = thisElement.parentNode;
		}
		const departmentId = thisElement.id;
		if (departmentId === user.info.department && user.info.role.localTaskManager.read) {
			groups.handleSetDepartment(departmentId);
		} else {
			if (user.info.role.globalTaskManager.create) {
				groups.handleSetDepartment(departmentId);
			} else {
				toastDenied();
			}
		}
	}
	return (
		<main className="content">
			<div className="container-fluid p-0">
				<h1 className="h3 mb-3">Select Departments</h1>
				<div className="row">
					<div className="col-xl-12">
						<div className="card">
							<div className="card">
								<div className="card-body">
									<table
										id="datatables-clients"
										className={cx('table table-striped', 'bordered')}
										style={{ width: '100%' }}
									>
										<thead>
											<tr>
												<th className={cx('bordered', 'text-center')}>#</th>
												<th
													className={cx(
														'w-70rem',
														'bordered',
														'text-center'
													)}
												>
													Name
												</th>
											</tr>
										</thead>
										<tbody>
											{groups.departmentsRender.map((department, index) => {
												const departmentId = department._id;
												return (
													<tr key={departmentId} id={departmentId}>
														<td
															className={cx(
																'bordered',
																'text-center'
															)}
														>
															{index + 1}
														</td>
														<td
															className={cx(
																'bordered',
																'text-center',
																'w-90rem',
																'hover'
															)}
															onClick={(e) => handleChoose(e)}
														>
															{department.name}
														</td>
													</tr>
												);
											})}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ToastContainer />
		</main>
	);
}

export default DepartmentsTable;
