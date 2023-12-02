function Notification() {
	return (
		<div>
			<a
				className="nav-icon dropdown-toggle"
				href="#"
				id="alertsDropdown"
				data-toggle="dropdown"
			>
				<div className="position-relative">
					<i className="align-middle" data-feather="bell-on"></i>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="16"
						width="14"
						viewBox="0 0 448 512"
						fill="currentColor"
					>
						<path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
					</svg>
				</div>
			</a>
			<div
				className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0"
				aria-labelledby="alertsDropdown"
			>
				<div className="dropdown-menu-header">4 New Notifications</div>
				<div className="list-group">
					<a href="#" className="list-group-item">
						<div className="row no-gutters align-items-center">
							<div className="col-2">
								<i className="text-danger" data-feather="alert-circle"></i>
							</div>
							<div className="col-10">
								<div className="text-dark">Update completed</div>
								<div className="text-muted small mt-1">
									Restart server 12 to complete the update.
								</div>
								<div className="text-muted small mt-1">2h ago</div>
							</div>
						</div>
					</a>
					<a href="#" className="list-group-item">
						<div className="row no-gutters align-items-center">
							<div className="col-2">
								<i className="text-warning" data-feather="bell"></i>
							</div>
							<div className="col-10">
								<div className="text-dark">Lorem ipsum</div>
								<div className="text-muted small mt-1">
									Aliquam ex eros, imperdiet vulputate hendrerit et.
								</div>
								<div className="text-muted small mt-1">6h ago</div>
							</div>
						</div>
					</a>
					<a href="#" className="list-group-item">
						<div className="row no-gutters align-items-center">
							<div className="col-2">
								<i className="text-primary" data-feather="home"></i>
							</div>
							<div className="col-10">
								<div className="text-dark">Login from 192.186.1.1</div>
								<div className="text-muted small mt-1">8h ago</div>
							</div>
						</div>
					</a>
					<a href="#" className="list-group-item">
						<div className="row no-gutters align-items-center">
							<div className="col-2">
								<i className="text-success" data-feather="user-plus"></i>
							</div>
							<div className="col-10">
								<div className="text-dark">New connection</div>
								<div className="text-muted small mt-1">
									Anna accepted your request.
								</div>
								<div className="text-muted small mt-1">12h ago</div>
							</div>
						</div>
					</a>
				</div>
				<div className="dropdown-menu-footer">
					<a href="#" className="text-muted">
						Show all notifications
					</a>
				</div>
			</div>
		</div>
	);
}

export default Notification;
