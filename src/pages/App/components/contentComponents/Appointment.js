function Appointment() {
	return (
		<div className="col-12 col-lg-6 col-xl-6 d-flex">
			<div className="card flex-fill w-100">
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
					<h5 className="card-title mb-0">Appointments</h5>
				</div>
				<div className="p-4 bg-light">
					<h2>You have a meeting today!</h2>
					<p className="mb-0 text-sm">
						Your next meeting is in 2 hours. Check your <a href="#">schedule</a> to see
						the details.
					</p>
				</div>
				<div className="card-body">
					<ul className="timeline">
						<li className="timeline-item">
							<strong>Chat with Carl and Ashley</strong>
							<span className="float-right text-muted text-sm">30m ago</span>
							<p>
								Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
								imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices
								mauris. Integer ante arcu...
							</p>
						</li>
						<li className="timeline-item">
							<strong>The big launch</strong>
							<span className="float-right text-muted text-sm">2h ago</span>
							<p>
								Sed aliquam ultrices mauris. Integer ante arcu, accumsan a,
								consectetuer eget, posuere ut, mauris. Praesent adipiscing.
								Phasellus ullamcorper ipsum rutrum nunc...
							</p>
						</li>
						<li className="timeline-item">
							<strong>Coffee break</strong>
							<span className="float-right text-muted text-sm">3h ago</span>
							<p>
								Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
								imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa.
								Sed cursus turpis vitae tortor...
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Appointment;
