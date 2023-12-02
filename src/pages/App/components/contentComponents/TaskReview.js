function TaskReview() {
	return (
		<>
			<div class="col-12 col-lg-12 col-xl-12 d-flex">
				<div class="card flex-fill">
					<div class="card-header">
						<div class="card-actions float-right">
							<div class="dropdown show">
								<a href="#" data-toggle="dropdown" data-display="static">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="feather feather-more-horizontal align-middle"
									>
										<circle cx="12" cy="12" r="1"></circle>
										<circle cx="19" cy="12" r="1"></circle>
										<circle cx="5" cy="12" r="1"></circle>
									</svg>
								</a>

								<div class="dropdown-menu dropdown-menu-right">
									<a class="dropdown-item" href="#">
										Action
									</a>
									<a class="dropdown-item" href="#">
										Another action
									</a>
									<a class="dropdown-item" href="#">
										Something else here
									</a>
								</div>
							</div>
						</div>
						<h5 class="card-title mb-0">Latest Projects</h5>
					</div>
					<div
						id="datatables-dashboard-projects_wrapper"
						class="dataTables_wrapper dt-bootstrap4 no-footer"
					>
						<div class="row">
							<div class="col-sm-12 col-md-6"></div>
							<div class="col-sm-12 col-md-6"></div>
						</div>
						<div class="row">
							<div class="col-sm-12">
								<table
									id="datatables-dashboard-projects"
									class="table table-striped my-0 dataTable no-footer"
									role="grid"
									aria-describedby="datatables-dashboard-projects_info"
								>
									<thead>
										<tr role="row">
											<th
												class="sorting_asc"
												tabindex="0"
												aria-controls="datatables-dashboard-projects"
												rowspan="1"
												colspan="1"
												aria-sort="ascending"
												aria-label="Name: activate to sort column descending"
											>
												Name
											</th>
											<th
												class="d-none d-xl-table-cell sorting"
												tabindex="0"
												aria-controls="datatables-dashboard-projects"
												rowspan="1"
												colspan="1"
												aria-label="Start Date: activate to sort column ascending"
											>
												Start Date
											</th>
											<th
												class="d-none d-xl-table-cell sorting"
												tabindex="0"
												aria-controls="datatables-dashboard-projects"
												rowspan="1"
												colspan="1"
												aria-label="End Date: activate to sort column ascending"
											>
												End Date
											</th>
											<th
												class="sorting"
												tabindex="0"
												aria-controls="datatables-dashboard-projects"
												rowspan="1"
												colspan="1"
												aria-label="Status: activate to sort column ascending"
											>
												Status
											</th>
											<th
												class="d-none d-md-table-cell sorting"
												tabindex="0"
												aria-controls="datatables-dashboard-projects"
												rowspan="1"
												colspan="1"
												aria-label="Assignee: activate to sort column ascending"
											>
												Assignee
											</th>
										</tr>
									</thead>
									<tbody>
										<tr role="row" class="odd">
											<td class="sorting_1">Project Apollo</td>
											<td class="d-none d-xl-table-cell">01/01/2018</td>
											<td class="d-none d-xl-table-cell">31/06/2018</td>
											<td>
												<span class="badge badge-success">Done</span>
											</td>
											<td class="d-none d-md-table-cell">Carl Jenkins</td>
										</tr>
										<tr role="row" class="even">
											<td class="sorting_1">Project Fireball</td>
											<td class="d-none d-xl-table-cell">01/01/2018</td>
											<td class="d-none d-xl-table-cell">31/06/2018</td>
											<td>
												<span class="badge badge-danger">Cancelled</span>
											</td>
											<td class="d-none d-md-table-cell">Bertha Martin</td>
										</tr>
										<tr role="row" class="odd">
											<td class="sorting_1">Project Hades</td>
											<td class="d-none d-xl-table-cell">01/01/2018</td>
											<td class="d-none d-xl-table-cell">31/06/2018</td>
											<td>
												<span class="badge badge-success">Done</span>
											</td>
											<td class="d-none d-md-table-cell">Stacie Hall</td>
										</tr>
										<tr role="row" class="even">
											<td class="sorting_1">Project Nitro</td>
											<td class="d-none d-xl-table-cell">01/01/2018</td>
											<td class="d-none d-xl-table-cell">31/06/2018</td>
											<td>
												<span class="badge badge-warning">In progress</span>
											</td>
											<td class="d-none d-md-table-cell">Carl Jenkins</td>
										</tr>
										<tr role="row" class="odd">
											<td class="sorting_1">Project Phoenix</td>
											<td class="d-none d-xl-table-cell">01/01/2018</td>
											<td class="d-none d-xl-table-cell">31/06/2018</td>
											<td>
												<span class="badge badge-success">Done</span>
											</td>
											<td class="d-none d-md-table-cell">Bertha Martin</td>
										</tr>
										<tr role="row" class="even">
											<td class="sorting_1">Project Romeo</td>
											<td class="d-none d-xl-table-cell">01/01/2018</td>
											<td class="d-none d-xl-table-cell">31/06/2018</td>
											<td>
												<span class="badge badge-success">Done</span>
											</td>
											<td class="d-none d-md-table-cell">Ashley Briggs</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-12 col-md-5">
								<div
									class="dataTables_info"
									id="datatables-dashboard-projects_info"
									role="status"
									aria-live="polite"
								>
									Showing 1 to 6 of 9 entries
								</div>
							</div>
							<div class="col-sm-12 col-md-7">
								<div
									class="dataTables_paginate paging_simple_numbers"
									id="datatables-dashboard-projects_paginate"
								>
									<ul class="pagination">
										<li
											class="paginate_button page-item previous disabled"
											id="datatables-dashboard-projects_previous"
										>
											<a
												href="#"
												aria-controls="datatables-dashboard-projects"
												data-dt-idx="0"
												tabindex="0"
												class="page-link"
											>
												Previous
											</a>
										</li>
										<li class="paginate_button page-item active">
											<a
												href="#"
												aria-controls="datatables-dashboard-projects"
												data-dt-idx="1"
												tabindex="0"
												class="page-link"
											>
												1
											</a>
										</li>
										<li class="paginate_button page-item ">
											<a
												href="#"
												aria-controls="datatables-dashboard-projects"
												data-dt-idx="2"
												tabindex="0"
												class="page-link"
											>
												2
											</a>
										</li>
										<li
											class="paginate_button page-item next"
											id="datatables-dashboard-projects_next"
										>
											<a
												href="#"
												aria-controls="datatables-dashboard-projects"
												data-dt-idx="3"
												tabindex="0"
												class="page-link"
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
