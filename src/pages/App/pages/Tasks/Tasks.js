import Img from '~/components/Img/Img';

function Tasks() {
	return (
		<main class="content">
			<div class="container-fluid p-0">
				<a href="#a" class="btn btn-primary float-right mt-n1">
					<i class="fas fa-plus"></i> New task
				</a>
				<h1 class="h3 mb-3">Tasks</h1>

				<div class="row">
					<div class="col-12 col-lg-6 col-xl-3">
						<div class="card">
							<div class="card-header">
								<div class="card-actions float-right">
									<div class="dropdown show">
										<a href="#a" data-toggle="dropdown" data-display="static">
											<i
												class="align-middle"
												data-feather="more-horizontal"
											></i>
										</a>

										<div class="dropdown-menu dropdown-menu-right">
											<a class="dropdown-item" href="#a">
												Action
											</a>
											<a class="dropdown-item" href="#a">
												Another action
											</a>
											<a class="dropdown-item" href="#a">
												Something else here
											</a>
										</div>
									</div>
								</div>
								<h5 class="card-title">Upcoming</h5>
								<h6 class="card-subtitle text-muted">
									Nam pretium turpis et arcu. Duis arcu.
								</h6>
							</div>
							<div class="card-body p-3">
								<div id="tasks-upcoming">
									<div class="card mb-3 bg-light cursor-grab border">
										<div class="card-body p-3">
											<div class="float-right mr-n2">
												<label class="custom-control custom-checkbox">
													<input
														type="checkbox"
														class="custom-control-input"
														checked=""
													/>
													<span class="custom-control-label text-hide">
														Checkbox
													</span>
												</label>
											</div>
											<p>
												Curabitur ligula sapien, tincidunt non, euismod
												vitae, posuere imperdiet, leo. Maecenas malesuada.
											</p>
											<div class="float-right mt-n1">
												<Img
													src="img\avatars\avatar.jpg"
													width="32"
													height="32"
													class="rounded-circle"
													alt="Avatar"
												/>
											</div>
											<a class="btn btn-primary btn-sm" href="#a">
												View
											</a>
										</div>
									</div>
									<div class="card mb-3 bg-light cursor-grab border">
										<div class="card-body p-3">
											<div class="float-right mr-n2">
												<label class="custom-control custom-checkbox">
													<input
														type="checkbox"
														class="custom-control-input"
														checked=""
													/>
													<span class="custom-control-label text-hide">
														Checkbox
													</span>
												</label>
											</div>
											<p>
												Nam pretium turpis et arcu. Duis arcu tortor,
												suscipit eget, imperdiet nec, imperdiet iaculis,
												ipsum.
											</p>
											<div class="float-right mt-n1">
												<Img
													src="img\avatars\avatar-2.jpg"
													width="32"
													height="32"
													class="rounded-circle"
													alt="Avatar"
												/>
											</div>
											<a class="btn btn-primary btn-sm" href="#a">
												View
											</a>
										</div>
									</div>
									<div class="card mb-3 bg-light cursor-grab border">
										<div class="card-body p-3">
											<div class="float-right mr-n2">
												<label class="custom-control custom-checkbox">
													<input
														type="checkbox"
														class="custom-control-input"
													/>
													<span class="custom-control-label text-hide">
														Checkbox
													</span>
												</label>
											</div>
											<p>
												Aenean posuere, tortor sed cursus feugiat, nunc
												augue blandit nunc, eu sollicitudin urna dolor
												sagittis.
											</p>
											<div class="float-right mt-n1">
												<Img
													src="img\avatars\avatar-3.jpg"
													width="32"
													height="32"
													class="rounded-circle"
													alt="Avatar"
												/>
											</div>
											<a class="btn btn-primary btn-sm" href="#a">
												View
											</a>
										</div>
									</div>
									<div class="card mb-3 bg-light cursor-grab border">
										<div class="card-body p-3">
											<div class="float-right mr-n2">
												<label class="custom-control custom-checkbox">
													<input
														type="checkbox"
														class="custom-control-input"
													/>
													<span class="custom-control-label text-hide">
														Checkbox
													</span>
												</label>
											</div>
											<p>
												In hac habitasse platea dictumst. Curabitur at lacus
												ac velit ornare lobortis. Curabitur a felis
												tristique.
											</p>
											<div class="float-right mt-n1">
												<Img
													src="img\avatars\avatar-4.jpg"
													width="32"
													height="32"
													class="rounded-circle"
													alt="Avatar"
												/>
											</div>
											<a class="btn btn-primary btn-sm" href="#a">
												View
											</a>
										</div>
									</div>
									<div class="card mb-3 bg-light cursor-grab border">
										<div class="card-body p-3">
											<div class="float-right mr-n2">
												<label class="custom-control custom-checkbox">
													<input
														type="checkbox"
														class="custom-control-input"
													/>
													<span class="custom-control-label text-hide">
														Checkbox
													</span>
												</label>
											</div>
											<p>
												Nam pretium turpis et arcu. Duis arcu tortor,
												suscipit eget, imperdiet nec, imperdiet iaculis,
												ipsum.
											</p>
											<div class="float-right mt-n1">
												<Img
													src="img\avatars\avatar-2.jpg"
													width="32"
													height="32"
													class="rounded-circle"
													alt="Avatar"
												/>
											</div>
											<a class="btn btn-primary btn-sm" href="#a">
												View
											</a>
										</div>
									</div>
								</div>

								<a href="#a" class="btn btn-primary btn-block">
									Add new task
								</a>
							</div>
						</div>
					</div>
					<div class="col-12 col-lg-6 col-xl-3">
						<div class="card">
							<div class="card-header">
								<div class="card-actions float-right">
									<div class="dropdown show">
										<a href="#a" data-toggle="dropdown" data-display="static">
											<i
												class="align-middle"
												data-feather="more-horizontal"
											></i>
										</a>

										<div class="dropdown-menu dropdown-menu-right">
											<a class="dropdown-item" href="#a">
												Action
											</a>
											<a class="dropdown-item" href="#a">
												Another action
											</a>
											<a class="dropdown-item" href="#a">
												Something else here
											</a>
										</div>
									</div>
								</div>
								<h5 class="card-title">In Progress</h5>
								<h6 class="card-subtitle text-muted">
									Nam pretium turpis et arcu. Duis arcu.
								</h6>
							</div>
							<div class="card-body">
								<div id="tasks-progress">
									<div class="card mb-3 bg-light cursor-grab border">
										<div class="card-body p-3">
											<div class="float-right mr-n2">
												<label class="custom-control custom-checkbox">
													<input
														type="checkbox"
														class="custom-control-input"
													/>
													<span class="custom-control-label text-hide">
														Checkbox
													</span>
												</label>
											</div>
											<p>
												Curabitur ligula sapien, tincidunt non, euismod
												vitae, posuere imperdiet, leo. Maecenas malesuada.
											</p>
											<div class="float-right mt-n1">
												<Img
													src="img\avatars\avatar.jpg"
													width="32"
													height="32"
													class="rounded-circle"
													alt="Avatar"
												/>
											</div>
											<a class="btn btn-primary btn-sm" href="#a">
												View
											</a>
										</div>
									</div>
									<div class="card mb-3 bg-light cursor-grab border">
										<div class="card-body p-3">
											<div class="float-right mr-n2">
												<label class="custom-control custom-checkbox">
													<input
														type="checkbox"
														class="custom-control-input"
													/>
													<span class="custom-control-label text-hide">
														Checkbox
													</span>
												</label>
											</div>
											<p>
												Aenean posuere, tortor sed cursus feugiat, nunc
												augue blandit nunc, eu sollicitudin urna dolor
												sagittis.
											</p>
											<div class="float-right mt-n1">
												<Img
													src="img\avatars\avatar-3.jpg"
													width="32"
													height="32"
													class="rounded-circle"
													alt="Avatar"
												/>
											</div>
											<a class="btn btn-primary btn-sm" href="#a">
												View
											</a>
										</div>
									</div>
									<div class="card mb-3 bg-light cursor-grab border">
										<div class="card-body p-3">
											<div class="float-right mr-n2">
												<label class="custom-control custom-checkbox">
													<input
														type="checkbox"
														class="custom-control-input"
													/>
													<span class="custom-control-label text-hide">
														Checkbox
													</span>
												</label>
											</div>
											<p>
												Nam pretium turpis et arcu. Duis arcu tortor,
												suscipit eget, imperdiet nec, imperdiet iaculis,
												ipsum.
											</p>
											<div class="float-right mt-n1">
												<Img
													src="img\avatars\avatar-2.jpg"
													width="32"
													height="32"
													class="rounded-circle"
													alt="Avatar"
												/>
											</div>
											<a class="btn btn-primary btn-sm" href="#a">
												View
											</a>
										</div>
									</div>
								</div>

								<a href="#a" class="btn btn-primary btn-block">
									Add new task
								</a>
							</div>
						</div>
					</div>
					<div class="col-12 col-lg-6 col-xl-3">
						<div class="card">
							<div class="card-header">
								<div class="card-actions float-right">
									<div class="dropdown show">
										<a href="#a" data-toggle="dropdown" data-display="static">
											<i
												class="align-middle"
												data-feather="more-horizontal"
											></i>
										</a>

										<div class="dropdown-menu dropdown-menu-right">
											<a class="dropdown-item" href="#a">
												Action
											</a>
											<a class="dropdown-item" href="#a">
												Another action
											</a>
											<a class="dropdown-item" href="#a">
												Something else here
											</a>
										</div>
									</div>
								</div>
								<h5 class="card-title">On Hold</h5>
								<h6 class="card-subtitle text-muted">
									Nam pretium turpis et arcu. Duis arcu.
								</h6>
							</div>
							<div class="card-body">
								<div id="tasks-hold">
									<div class="card mb-3 bg-light cursor-grab border">
										<div class="card-body p-3">
											<div class="float-right mr-n2">
												<label class="custom-control custom-checkbox">
													<input
														type="checkbox"
														class="custom-control-input"
													/>
													<span class="custom-control-label text-hide">
														Checkbox
													</span>
												</label>
											</div>
											<p>
												In hac habitasse platea dictumst. Curabitur at lacus
												ac velit ornare lobortis. Curabitur a felis
												tristique.
											</p>
											<div class="float-right mt-n1">
												<Img
													src="img\avatars\avatar-4.jpg"
													width="32"
													height="32"
													class="rounded-circle"
													alt="Avatar"
												/>
											</div>
											<a class="btn btn-primary btn-sm" href="#a">
												View
											</a>
										</div>
									</div>
									<div class="card mb-3 bg-light cursor-grab border">
										<div class="card-body p-3">
											<div class="float-right mr-n2">
												<label class="custom-control custom-checkbox">
													<input
														type="checkbox"
														class="custom-control-input"
													/>
													<span class="custom-control-label text-hide">
														Checkbox
													</span>
												</label>
											</div>
											<p>
												Aenean posuere, tortor sed cursus feugiat, nunc
												augue blandit nunc, eu sollicitudin urna dolor
												sagittis.
											</p>
											<div class="float-right mt-n1">
												<Img
													src="img\avatars\avatar-3.jpg"
													width="32"
													height="32"
													class="rounded-circle"
													alt="Avatar"
												/>
											</div>
											<a class="btn btn-primary btn-sm" href="#a">
												View
											</a>
										</div>
									</div>
									<div class="card mb-3 bg-light cursor-grab border">
										<div class="card-body p-3">
											<div class="float-right mr-n2">
												<label class="custom-control custom-checkbox">
													<input
														type="checkbox"
														class="custom-control-input"
													/>
													<span class="custom-control-label text-hide">
														Checkbox
													</span>
												</label>
											</div>
											<p>
												Nam pretium turpis et arcu. Duis arcu tortor,
												suscipit eget, imperdiet nec, imperdiet iaculis,
												ipsum.
											</p>
											<div class="float-right mt-n1">
												<Img
													src="img\avatars\avatar-2.jpg"
													width="32"
													height="32"
													class="rounded-circle"
													alt="Avatar"
												/>
											</div>
											<a class="btn btn-primary btn-sm" href="#a">
												View
											</a>
										</div>
									</div>
									<div class="card mb-3 bg-light cursor-grab border">
										<div class="card-body p-3">
											<div class="float-right mr-n2">
												<label class="custom-control custom-checkbox">
													<input
														type="checkbox"
														class="custom-control-input"
													/>
													<span class="custom-control-label text-hide">
														Checkbox
													</span>
												</label>
											</div>
											<p>
												Curabitur ligula sapien, tincidunt non, euismod
												vitae, posuere imperdiet, leo. Maecenas malesuada.
											</p>
											<div class="float-right mt-n1">
												<Img
													src="img\avatars\avatar.jpg"
													width="32"
													height="32"
													class="rounded-circle"
													alt="Avatar"
												/>
											</div>
											<a class="btn btn-primary btn-sm" href="#a">
												View
											</a>
										</div>
									</div>
								</div>

								<a href="#a" class="btn btn-primary btn-block">
									Add new task
								</a>
							</div>
						</div>
					</div>
					<div class="col-12 col-lg-6 col-xl-3">
						<div class="card">
							<div class="card-header">
								<div class="card-actions float-right">
									<div class="dropdown show">
										<a href="#a" data-toggle="dropdown" data-display="static">
											<i
												class="align-middle"
												data-feather="more-horizontal"
											></i>
										</a>

										<div class="dropdown-menu dropdown-menu-right">
											<a class="dropdown-item" href="#a">
												Action
											</a>
											<a class="dropdown-item" href="#a">
												Another action
											</a>
											<a class="dropdown-item" href="#a">
												Something else here
											</a>
										</div>
									</div>
								</div>
								<h5 class="card-title">Completed</h5>
								<h6 class="card-subtitle text-muted">
									Nam pretium turpis et arcu. Duis arcu.
								</h6>
							</div>
							<div class="card-body">
								<div id="tasks-completed">
									<div class="card mb-3 bg-light cursor-grab border">
										<div class="card-body p-3">
											<div class="float-right mr-n2">
												<label class="custom-control custom-checkbox">
													<input
														type="checkbox"
														class="custom-control-input"
													/>
													<span class="custom-control-label text-hide">
														Checkbox
													</span>
												</label>
											</div>
											<p>
												Nam pretium turpis et arcu. Duis arcu tortor,
												suscipit eget, imperdiet nec, imperdiet iaculis,
												ipsum.
											</p>
											<div class="float-right mt-n1">
												<Img
													src="img\avatars\avatar-2.jpg"
													width="32"
													height="32"
													class="rounded-circle"
													alt="Avatar"
												/>
											</div>
											<a class="btn btn-primary btn-sm" href="#a">
												View
											</a>
										</div>
									</div>
									<div class="card mb-3 bg-light cursor-grab border">
										<div class="card-body p-3">
											<div class="float-right mr-n2">
												<label class="custom-control custom-checkbox">
													<input
														type="checkbox"
														class="custom-control-input"
													/>
													<span class="custom-control-label text-hide">
														Checkbox
													</span>
												</label>
											</div>
											<p>
												In hac habitasse platea dictumst. Curabitur at lacus
												ac velit ornare lobortis. Curabitur a felis
												tristique.
											</p>
											<div class="float-right mt-n1">
												<Img
													src="img\avatars\avatar-4.jpg"
													width="32"
													height="32"
													class="rounded-circle"
													alt="Avatar"
												/>
											</div>
											<a class="btn btn-primary btn-sm" href="#a">
												View
											</a>
										</div>
									</div>
									<div class="card mb-3 bg-light cursor-grab border">
										<div class="card-body p-3">
											<div class="float-right mr-n2">
												<label class="custom-control custom-checkbox">
													<input
														type="checkbox"
														class="custom-control-input"
													/>
													<span class="custom-control-label text-hide">
														Checkbox
													</span>
												</label>
											</div>
											<p>
												Aenean posuere, tortor sed cursus feugiat, nunc
												augue blandit nunc, eu sollicitudin urna dolor
												sagittis.
											</p>
											<div class="float-right mt-n1">
												<Img
													src="img\avatars\avatar-3.jpg"
													width="32"
													height="32"
													class="rounded-circle"
													alt="Avatar"
												/>
											</div>
											<a class="btn btn-primary btn-sm" href="#a">
												View
											</a>
										</div>
									</div>
									<div class="card mb-3 bg-light cursor-grab border">
										<div class="card-body p-3">
											<div class="float-right mr-n2">
												<label class="custom-control custom-checkbox">
													<input
														type="checkbox"
														class="custom-control-input"
													/>
													<span class="custom-control-label text-hide">
														Checkbox
													</span>
												</label>
											</div>
											<p>
												Curabitur ligula sapien, tincidunt non, euismod
												vitae, posuere imperdiet, leo. Maecenas malesuada.
											</p>
											<div class="float-right mt-n1">
												<Img
													src="img\avatars\avatar.jpg"
													width="32"
													height="32"
													class="rounded-circle"
													alt="Avatar"
												/>
											</div>
											<a class="btn btn-primary btn-sm" href="#a">
												View
											</a>
										</div>
									</div>
									<div class="card mb-3 bg-light cursor-grab border">
										<div class="card-body p-3">
											<div class="float-right mr-n2">
												<label class="custom-control custom-checkbox">
													<input
														type="checkbox"
														class="custom-control-input"
													/>
													<span class="custom-control-label text-hide">
														Checkbox
													</span>
												</label>
											</div>
											<p>
												Aenean posuere, tortor sed cursus feugiat, nunc
												augue blandit nunc, eu sollicitudin urna dolor
												sagittis.
											</p>
											<div class="float-right mt-n1">
												<Img
													src="img\avatars\avatar-3.jpg"
													width="32"
													height="32"
													class="rounded-circle"
													alt="Avatar"
												/>
											</div>
											<a class="btn btn-primary btn-sm" href="#a">
												View
											</a>
										</div>
									</div>
								</div>

								<a href="#a" class="btn btn-primary btn-block">
									Add new task
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Tasks;
