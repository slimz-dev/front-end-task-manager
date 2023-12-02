function Message() {
	return (
		<div>
			<a
				className="nav-icon dropdown-toggle"
				href="#"
				id="messagesDropdown"
				data-toggle="dropdown"
			>
				<div className="position-relative">
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
						className="feather feather-message-circle align-middle"
					>
						<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
					</svg>
					<i className="align-middle" data-feather="message-circle"></i>
					<span className="indicator">4</span>
				</div>
			</a>
			<div
				className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0"
				aria-labelledby="messagesDropdown"
			>
				<div className="dropdown-menu-header">
					<div className="position-relative">4 New Messages</div>
				</div>
				<div className="list-group">
					<a href="#" className="list-group-item">
						<div className="row no-gutters align-items-center">
							<div className="col-2">
								<img
									src=".\assets\img\avatars\avatar-5.jpg"
									className="avatar img-fluid rounded-circle"
									alt="Ashley Briggs"
								/>
							</div>
							<div className="col-10 pl-2">
								<div className="text-dark">Ashley Briggs</div>
								<div className="text-muted small mt-1">
									Nam pretium turpis et arcu. Duis arcu tortor.
								</div>
								<div className="text-muted small mt-1">15m ago</div>
							</div>
						</div>
					</a>
					<a href="#" className="list-group-item">
						<div className="row no-gutters align-items-center">
							<div className="col-2">
								<img
									src=".\assets\img\avatars\avatar-2.jpg"
									className="avatar img-fluid rounded-circle"
									alt="Carl Jenkins"
								/>
							</div>
							<div className="col-10 pl-2">
								<div className="text-dark">Carl Jenkins</div>
								<div className="text-muted small mt-1">
									Curabitur ligula sapien euismod vitae.
								</div>
								<div className="text-muted small mt-1">2h ago</div>
							</div>
						</div>
					</a>
					<a href="#" className="list-group-item">
						<div className="row no-gutters align-items-center">
							<div className="col-2">
								<img
									src=".\assets\img\avatars\avatar-4.jpg"
									className="avatar img-fluid rounded-circle"
									alt="Stacie Hall"
								/>
							</div>
							<div className="col-10 pl-2">
								<div className="text-dark">Stacie Hall</div>
								<div className="text-muted small mt-1">
									Pellentesque auctor neque nec urna.
								</div>
								<div className="text-muted small mt-1">4h ago</div>
							</div>
						</div>
					</a>
					<a href="#" className="list-group-item">
						<div className="row no-gutters align-items-center">
							<div className="col-2">
								<img
									src=".\assets\img\avatars\avatar-3.jpg"
									className="avatar img-fluid rounded-circle"
									alt="Bertha Martin"
								/>
							</div>
							<div className="col-10 pl-2">
								<div className="text-dark">Bertha Martin</div>
								<div className="text-muted small mt-1">
									Aenean tellus metus, bibendum sed, posuere ac, mattis non.
								</div>
								<div className="text-muted small mt-1">5h ago</div>
							</div>
						</div>
					</a>
				</div>
				<div className="dropdown-menu-footer">
					<a href="#" className="text-muted">
						Show all messages
					</a>
				</div>
			</div>
		</div>
	);
}

export default Message;
