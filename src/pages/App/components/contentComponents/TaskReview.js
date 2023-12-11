function TaskReview() {
	return (
		<>
			<div className="col-12 col-lg-12 col-xl-12 d-flex">
				<div className="card flex-fill">
					<div className="card-header">
						<div className="card-actions float-right">
							<div className="dropdown show">
								<a href="#" data-toggle="dropdown" data-display="static">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="feather feather-more-horizontal align-middle"
									>
										<circle cx="12" cy="12" r="1"></circle>
										<circle cx="19" cy="12" r="1"></circle>
										<circle cx="5" cy="12" r="1"></circle>
									</svg>
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
												Assignee
											</th>
										</tr>
									</thead>
									<tbody>
										<tr role="row" className="odd">
											<td className="sorting_1">Project Apollo</td>
											<td className="d-none d-xl-table-cell">01/01/2018</td>
											<td className="d-none d-xl-table-cell">31/06/2018</td>
											<td>
												<span className="badge badge-success">Done</span>
											</td>
											<td className="d-none d-md-table-cell">Carl Jenkins</td>
										</tr>
										<tr role="row" className="even">
											<td className="sorting_1">Project Fireball</td>
											<td className="d-none d-xl-table-cell">01/01/2018</td>
											<td className="d-none d-xl-table-cell">31/06/2018</td>
											<td>
												<span className="badge badge-danger">
													Cancelled
												</span>
											</td>
											<td className="d-none d-md-table-cell">
												Bertha Martin
											</td>
										</tr>
										<tr role="row" className="odd">
											<td className="sorting_1">Project Hades</td>
											<td className="d-none d-xl-table-cell">01/01/2018</td>
											<td className="d-none d-xl-table-cell">31/06/2018</td>
											<td>
												<span className="badge badge-success">Done</span>
											</td>
											<td className="d-none d-md-table-cell">Stacie Hall</td>
										</tr>
										<tr role="row" className="even">
											<td className="sorting_1">Project Nitro</td>
											<td className="d-none d-xl-table-cell">01/01/2018</td>
											<td className="d-none d-xl-table-cell">31/06/2018</td>
											<td>
												<span className="badge badge-warning">
													In progress
												</span>
											</td>
											<td className="d-none d-md-table-cell">Carl Jenkins</td>
										</tr>
										<tr role="row" className="odd">
											<td className="sorting_1">Project Phoenix</td>
											<td className="d-none d-xl-table-cell">01/01/2018</td>
											<td className="d-none d-xl-table-cell">31/06/2018</td>
											<td>
												<span className="badge badge-success">Done</span>
											</td>
											<td className="d-none d-md-table-cell">
												Bertha Martin
											</td>
										</tr>
										<tr role="row" className="even">
											<td className="sorting_1">Project Romeo</td>
											<td className="d-none d-xl-table-cell">01/01/2018</td>
											<td className="d-none d-xl-table-cell">31/06/2018</td>
											<td>
												<span className="badge badge-success">Done</span>
											</td>
											<td className="d-none d-md-table-cell">
												Ashley Briggs
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className="row">
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
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default TaskReview;
