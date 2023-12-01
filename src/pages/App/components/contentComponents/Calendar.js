function Calendar() {
	return (
		<div className="col-12 col-lg-6 col-xl-6 d-flex">
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
					<h5 className="card-title mb-0">Calendar</h5>
				</div>
				<div className="card-body d-flex">
					<div className="align-self-center w-100">
						<div className="chart">
							<div id="datetimepicker-dashboard"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Calendar;
