function UserSetting() {
	return (
		<div>
			<a
				className="nav-icon dropdown-toggle d-inline-block d-sm-none"
				href="#"
				data-toggle="dropdown"
			>
				<i className="align-middle" data-feather="settings"></i>
			</a>

			<a
				className="nav-link dropdown-toggle d-none d-sm-inline-block"
				href="#"
				data-toggle="dropdown"
			>
				<img
					src=".\assets\img\avatars\avatar.jpg"
					className="avatar img-fluid rounded-circle mr-1"
					alt="Chris Wood"
				></img>
				<span className="text-dark">Chris Wood 2</span>{' '}
			</a>
			<div className="dropdown-menu dropdown-menu-right">
				<a className="dropdown-item" href="pages-profile.html">
					<i className="align-middle mr-1" data-feather="user"></i> Profile
				</a>
				<a className="dropdown-item" href="#">
					<i className="align-middle mr-1" data-feather="pie-chart"></i> Analytics
				</a>
				<div className="dropdown-divider"></div>
				<a className="dropdown-item" href="pages-settings.html">
					Settings & Privacy
				</a>
				<a className="dropdown-item" href="#">
					Help
				</a>
				<a className="dropdown-item" href="#">
					Sign out
				</a>
			</div>
		</div>
	);
}

export default UserSetting;
