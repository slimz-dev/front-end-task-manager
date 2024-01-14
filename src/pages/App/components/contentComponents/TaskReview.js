import { useEffect, useState } from 'react';
import useClass from '~/hooks/useClass';
import { getMyTasks } from '~/services/UserService/getMyTasks';
import styles from '../../App.module.scss';

function TaskReview() {
	const cx = useClass(styles);
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchTasks = async () => {
			const result = await getMyTasks();
			setData(result.data);
		};
		fetchTasks();
	}, []);
	return (
		<>
			<div className="col-12 col-lg-12 col-xl-12 d-flex">
				<div className="card flex-fill">
					<div className="card-header">
						<h5 className="card-title mb-0">Latest Projects</h5>
					</div>
					<div
						id="datatables-dashboard-projects_wrapper"
						className="dataTables_wrapper dt-bootstrap4 no-footer"
					>
						<div className="row">
							<div className="col-sm-12 col-md-6"></div>
							<div className="col-sm-12 col-md-6"></div>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<table
									id="datatables-dashboard-projects"
									className="table table-striped my-0 dataTable no-footer"
									role="grid"
									aria-describedby="datatables-dashboard-projects_info"
								>
									<thead>
										<tr role="row">
											<th
												className="sorting_asc"
												tabIndex="0"
												aria-controls="datatables-dashboard-projects"
												rowSpan="1"
												colSpan="1"
												aria-sort="ascending"
												aria-label="Name: activate to sort column descending"
											>
												Name
											</th>
											<th
												className="d-none d-xl-table-cell sorting"
												tabIndex="0"
												aria-controls="datatables-dashboard-projects"
												rowSpan="1"
												colSpan="1"
												aria-label="Start Date: activate to sort column ascending"
											>
												Start Date
											</th>
											<th
												className="d-none d-xl-table-cell sorting"
												tabIndex="0"
												aria-controls="datatables-dashboard-projects"
												rowSpan="1"
												colSpan="1"
												aria-label="End Date: activate to sort column ascending"
											>
												End Date
											</th>
											<th
												className="sorting"
												tabIndex="0"
												aria-controls="datatables-dashboard-projects"
												rowSpan="1"
												colSpan="1"
												aria-label="Status: activate to sort column ascending"
											>
												Status
											</th>
											<th
												className="d-none d-md-table-cell sorting"
												tabIndex="0"
												aria-controls="datatables-dashboard-projects"
												rowSpan="1"
												colSpan="1"
												aria-label="Assignee: activate to sort column ascending"
											>
												Assigner
											</th>
										</tr>
									</thead>
									<tbody>
										{data.map((task) => {
											return (
												<tr role="row" className="odd">
													<td className="sorting_1">{task.name}</td>
													<td className="d-none d-xl-table-cell">
														{task.initDate.split('T')[0]}
													</td>
													<td className="d-none d-xl-table-cell">
														{task.expiredDate.split('T')[0]}
													</td>
													<td>
														<span
															className={cx('badge badge-success', {
																'badge-warning': !task.state,
															})}
														>
															{task.state ? 'Done' : 'Working'}
														</span>
													</td>
													<td className="d-none d-md-table-cell">
														{`${task.assigner.firstName} ${
															task.assigner.lastName
																? task.assigner.lastName
																: ''
														}`}
													</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							</div>
						</div>
						{/* <div className="row">
							<div className="col-sm-12 col-md-5">
								<div
									className="dataTables_info"
									id="datatables-dashboard-projects_info"
									role="status"
									aria-live="polite"
								>
									Showing 1 to 6 of 9 entries
								</div>
							</div>
							<div className="col-sm-12 col-md-7">
								<div
									className="dataTables_paginate paging_simple_numbers"
									id="datatables-dashboard-projects_paginate"
								>
									<ul className="pagination">
										<li
											className="paginate_button page-item previous disabled"
											id="datatables-dashboard-projects_previous"
										>
											<a
												href="#"
												aria-controls="datatables-dashboard-projects"
												data-dt-idx="0"
												tabIndex="0"
												className="page-link"
											>
												Previous
											</a>
										</li>
										<li className="paginate_button page-item active">
											<a
												href="#"
												aria-controls="datatables-dashboard-projects"
												data-dt-idx="1"
												tabIndex="0"
												className="page-link"
											>
												1
											</a>
										</li>
										<li className="paginate_button page-item ">
											<a
												href="#"
												aria-controls="datatables-dashboard-projects"
												data-dt-idx="2"
												tabIndex="0"
												className="page-link"
											>
												2
											</a>
										</li>
										<li
											className="paginate_button page-item next"
											id="datatables-dashboard-projects_next"
										>
											<a
												href="#"
												aria-controls="datatables-dashboard-projects"
												data-dt-idx="3"
												tabIndex="0"
												className="page-link"
											>
												Next
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</>
	);
}

export default TaskReview;
