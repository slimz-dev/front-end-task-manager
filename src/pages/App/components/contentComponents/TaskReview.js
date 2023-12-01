function TaskReview() {
	return (
		<div className="col-12 col-lg-12 col-xl-12 d-flex">
			<div className="card flex-fill">
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
					<h5 className="card-title mb-0">Latest Projects</h5>
				</div>
				<table id="datatables-dashboard-projects" className="table table-striped my-0">
					<thead>
						<tr>
							<th>Name</th>
							<th className="d-none d-xl-table-cell">Start Date</th>
							<th className="d-none d-xl-table-cell">End Date</th>
							<th>Status</th>
							<th className="d-none d-md-table-cell">Assignee</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Project Apollo</td>
							<td className="d-none d-xl-table-cell">01/01/2018</td>
							<td className="d-none d-xl-table-cell">31/06/2018</td>
							<td>
								<span className="badge badge-success">Done</span>
							</td>
							<td className="d-none d-md-table-cell">Carl Jenkins</td>
						</tr>
						<tr>
							<td>Project Fireball</td>
							<td className="d-none d-xl-table-cell">01/01/2018</td>
							<td className="d-none d-xl-table-cell">31/06/2018</td>
							<td>
								<span className="badge badge-danger">Cancelled</span>
							</td>
							<td className="d-none d-md-table-cell">Bertha Martin</td>
						</tr>
						<tr>
							<td>Project Hades</td>
							<td className="d-none d-xl-table-cell">01/01/2018</td>
							<td className="d-none d-xl-table-cell">31/06/2018</td>
							<td>
								<span className="badge badge-success">Done</span>
							</td>
							<td className="d-none d-md-table-cell">Stacie Hall</td>
						</tr>
						<tr>
							<td>Project Nitro</td>
							<td className="d-none d-xl-table-cell">01/01/2018</td>
							<td className="d-none d-xl-table-cell">31/06/2018</td>
							<td>
								<span className="badge badge-warning">In progress</span>
							</td>
							<td className="d-none d-md-table-cell">Carl Jenkins</td>
						</tr>
						<tr>
							<td>Project Phoenix</td>
							<td className="d-none d-xl-table-cell">01/01/2018</td>
							<td className="d-none d-xl-table-cell">31/06/2018</td>
							<td>
								<span className="badge badge-success">Done</span>
							</td>
							<td className="d-none d-md-table-cell">Bertha Martin</td>
						</tr>
						<tr>
							<td>Project X</td>
							<td className="d-none d-xl-table-cell">01/01/2018</td>
							<td className="d-none d-xl-table-cell">31/06/2018</td>
							<td>
								<span className="badge badge-success">Done</span>
							</td>
							<td className="d-none d-md-table-cell">Stacie Hall</td>
						</tr>
						<tr>
							<td>Project Romeo</td>
							<td className="d-none d-xl-table-cell">01/01/2018</td>
							<td className="d-none d-xl-table-cell">31/06/2018</td>
							<td>
								<span className="badge badge-success">Done</span>
							</td>
							<td className="d-none d-md-table-cell">Ashley Briggs</td>
						</tr>
						<tr>
							<td>Project Wombat</td>
							<td className="d-none d-xl-table-cell">01/01/2018</td>
							<td className="d-none d-xl-table-cell">31/06/2018</td>
							<td>
								<span className="badge badge-warning">In progress</span>
							</td>
							<td className="d-none d-md-table-cell">Bertha Martin</td>
						</tr>
						<tr>
							<td>Project Zircon</td>
							<td className="d-none d-xl-table-cell">01/01/2018</td>
							<td className="d-none d-xl-table-cell">31/06/2018</td>
							<td>
								<span className="badge badge-danger">Cancelled</span>
							</td>
							<td className="d-none d-md-table-cell">Stacie Hall</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default TaskReview;
