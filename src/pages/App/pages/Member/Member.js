import Img from '~/components/Img/Img';

function Member() {
	return (
		<main className="content">
			<div className="container-fluid p-0">
				<h1 className="h3 mb-3">Clients</h1>
				<div className="row">
					<div className="col-xl-8">
						<div className="card">
							<div className="card-header">
								<div className="card-actions float-right">
									<div className="dropdown show">
										<a href="#" data-toggle="dropdown" data-display="static">
											<i
												className="align-middle"
												data-feather="more-horizontal"
											></i>
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
								<h5 className="card-title mb-0">Clients</h5>
							</div>
							<div className="card-body">
								<table
									id="datatables-clients"
									className="table table-striped"
									style={{ width: '100%' }}
								>
									<thead>
										<tr>
											<th>#</th>
											<th>Name</th>
											<th>Company</th>
											<th>Email</th>
											<th>Status</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<Img
													src="img\avatars\avatar.jpg"
													width="32"
													height="32"
													className="rounded-circle my-n1"
													alt="Avatar"
												/>
											</td>
											<td>Garrett Winters</td>
											<td>Good Guys</td>
											<td>garrett@winters.com</td>
											<td>
												<span className="badge badge-success">Active</span>
											</td>
										</tr>
										<tr>
											<td>
												<Img
													src="img\avatars\avatar.jpg"
													width="32"
													height="32"
													className="rounded-circle my-n1"
													alt="Avatar"
												/>
											</td>
											<td>Ashton Cox</td>
											<td>Levitz Furniture</td>
											<td>ashton@cox.com</td>
											<td>
												<span className="badge badge-success">Active</span>
											</td>
										</tr>
										<tr>
											<td>
												<Img
													src="img\avatars\avatar.jpg"
													width="32"
													height="32"
													className="rounded-circle my-n1"
													alt="Avatar"
												/>
											</td>
											<td>Sonya Frost</td>
											<td>Child World</td>
											<td>sonya@frost.com</td>
											<td>
												<span className="badge badge-danger">Deleted</span>
											</td>
										</tr>
										<tr>
											<td>
												<Img
													src="img\avatars\avatar.jpg"
													width="32"
													height="32"
													className="rounded-circle my-n1"
													alt="Avatar"
												/>
											</td>
											<td>Jena Gaines</td>
											<td>Helping Hand</td>
											<td>jena@gaines.com</td>
											<td>
												<span className="badge badge-warning">
													Inactive
												</span>
											</td>
										</tr>
										<tr>
											<td>
												<Img
													src="img\avatars\avatar-2.jpg"
													width="32"
													height="32"
													className="rounded-circle my-n1"
													alt="Avatar"
												/>
											</td>
											<td>Quinn Flynn</td>
											<td>Good Guys</td>
											<td>quinn@flynn.com</td>
											<td>
												<span className="badge badge-success">Active</span>
											</td>
										</tr>
										<tr>
											<td>
												<Img
													src="img\avatars\avatar-2.jpg"
													width="32"
													height="32"
													className="rounded-circle my-n1"
													alt="Avatar"
												/>
											</td>
											<td>Charde Marshall</td>
											<td>Price Savers</td>
											<td>charde@marshall.com</td>
											<td>
												<span className="badge badge-success">Active</span>
											</td>
										</tr>
										<tr>
											<td>
												<Img
													src="img\avatars\avatar-2.jpg"
													width="32"
													height="32"
													className="rounded-circle my-n1"
													alt="Avatar"
												/>
											</td>
											<td>Haley Kennedy</td>
											<td>Helping Hand</td>
											<td>haley@kennedy.com</td>
											<td>
												<span className="badge badge-danger">Deleted</span>
											</td>
										</tr>
										<tr>
											<td>
												<Img
													src="img\avatars\avatar-2.jpg"
													width="32"
													height="32"
													className="rounded-circle my-n1"
													alt="Avatar"
												/>
											</td>
											<td>Tatyana Fitzpatrick</td>
											<td>Good Guys</td>
											<td>tatyana@fitzpatrick.com</td>
											<td>
												<span className="badge badge-success">Active</span>
											</td>
										</tr>
										<tr>
											<td>
												<Img
													src="img\avatars\avatar-3.jpg"
													width="32"
													height="32"
													className="rounded-circle my-n1"
													alt="Avatar"
												/>
											</td>
											<td>Michael Silva</td>
											<td>Red Robin Stores</td>
											<td>michael@silva.com</td>
											<td>
												<span className="badge badge-success">Active</span>
											</td>
										</tr>
										<tr>
											<td>
												<Img
													src="img\avatars\avatar-3.jpg"
													width="32"
													height="32"
													className="rounded-circle my-n1"
													alt="Avatar"
												/>
											</td>
											<td>Yuri Berry</td>
											<td>The Wiz</td>
											<td>yuri@berry.com</td>
											<td>
												<span className="badge badge-danger">Deleted</span>
											</td>
										</tr>
										<tr>
											<td>
												<Img
													src="img\avatars\avatar-3.jpg"
													width="32"
													height="32"
													className="rounded-circle my-n1"
													alt="Avatar"
												/>
											</td>
											<td>Doris Wilder</td>
											<td>Red Robin Stores</td>
											<td>doris@wilder.com</td>
											<td>
												<span className="badge badge-warning">
													Inactive
												</span>
											</td>
										</tr>
										<tr>
											<td>
												<Img
													src="img\avatars\avatar-3.jpg"
													width="32"
													height="32"
													className="rounded-circle my-n1"
													alt="Avatar"
												/>
											</td>
											<td>Angelica Ramos</td>
											<td>The Wiz</td>
											<td>angelica@ramos.com</td>
											<td>
												<span className="badge badge-success">Active</span>
											</td>
										</tr>
										<tr>
											<td>
												<Img
													src="img\avatars\avatar-4.jpg"
													width="32"
													height="32"
													className="rounded-circle my-n1"
													alt="Avatar"
												/>
											</td>
											<td>Jennifer Chang</td>
											<td>Helping Hand</td>
											<td>jennifer@chang.com</td>
											<td>
												<span className="badge badge-warning">
													Inactive
												</span>
											</td>
										</tr>
										<tr>
											<td>
												<Img
													src="img\avatars\avatar-4.jpg"
													width="32"
													height="32"
													className="rounded-circle my-n1"
													alt="Avatar"
												/>
											</td>
											<td>Brenden Wagner</td>
											<td>The Wiz</td>
											<td>brenden@wagner.com</td>
											<td>
												<span className="badge badge-warning">
													Inactive
												</span>
											</td>
										</tr>
										<tr>
											<td>
												<Img
													src="img\avatars\avatar-4.jpg"
													width="32"
													height="32"
													className="rounded-circle my-n1"
													alt="Avatar"
												/>
											</td>
											<td>Fiona Green</td>
											<td>The Sample</td>
											<td>fiona@green.com</td>
											<td>
												<span className="badge badge-warning">
													Inactive
												</span>
											</td>
										</tr>
										<tr>
											<td>
												<Img
													src="img\avatars\avatar-4.jpg"
													width="32"
													height="32"
													className="rounded-circle my-n1"
													alt="Avatar"
												/>
											</td>
											<td>Suki Burks</td>
											<td>The Sample</td>
											<td>suki@burks.com</td>
											<td>
												<span className="badge badge-success">Active</span>
											</td>
										</tr>
										<tr>
											<td>
												<Img
													src="img\avatars\avatar-5.jpg"
													width="32"
													height="32"
													className="rounded-circle my-n1"
													alt="Avatar"
												/>
											</td>
											<td>Prescott Bartlett</td>
											<td>The Sample</td>
											<td>prescott@bartlett.com</td>
											<td>
												<span className="badge badge-success">Active</span>
											</td>
										</tr>
										<tr>
											<td>
												<Img
													src="img\avatars\avatar-5.jpg"
													width="32"
													height="32"
													className="rounded-circle my-n1"
													alt="Avatar"
												/>
											</td>
											<td>Gavin Cortez</td>
											<td>Red Robin Stores</td>
											<td>gavin@cortez.com</td>
											<td>
												<span className="badge badge-success">Active</span>
											</td>
										</tr>
										<tr>
											<td>
												<Img
													src="img\avatars\avatar-5.jpg"
													width="32"
													height="32"
													className="rounded-circle my-n1"
													alt="Avatar"
												/>
											</td>
											<td>Unity Butler</td>
											<td>Price Savers</td>
											<td>unity@butler.com</td>
											<td>
												<span className="badge badge-warning">
													Inactive
												</span>
											</td>
										</tr>
										<tr>
											<td>
												<Img
													src="img\avatars\avatar-5.jpg"
													width="32"
													height="32"
													className="rounded-circle my-n1"
													alt="Avatar"
												/>
											</td>
											<td>Howard Hatfield</td>
											<td>Price Savers</td>
											<td>howard@hatfield.com</td>
											<td>
												<span className="badge badge-warning">
													Inactive
												</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>

					<div className="col-xl-4">
						<div className="card">
							<div className="card-header">
								<div className="card-actions float-right">
									<div className="dropdown show">
										<a href="#" data-toggle="dropdown" data-display="static">
											<i
												className="align-middle"
												data-feather="more-horizontal"
											></i>
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
								<h5 className="card-title mb-0">Angelica Ramos</h5>
							</div>
							<div className="card-body">
								<div className="row no-gutters">
									<div className="col-sm-3 col-xl-12 col-xxl-3 text-center">
										<Img
											src="img\avatars\avatar-3.jpg"
											width="64"
											height="64"
											className="rounded-circle mt-2"
											alt="Angelica Ramos"
										/>
									</div>
									<div className="col-sm-9 col-xl-12 col-xxl-9">
										<strong>About me</strong>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing
											elit, sed do eiusmod tempor incididunt ut labore et
											dolore magna aliqua.
										</p>
									</div>
								</div>

								<table className="table table-sm my-2">
									<tbody>
										<tr>
											<th>Name</th>
											<td>Angelica Ramos</td>
										</tr>
										<tr>
											<th>Company</th>
											<td>The Wiz</td>
										</tr>
										<tr>
											<th>Email</th>
											<td>angelica@ramos.com</td>
										</tr>
										<tr>
											<th>Phone</th>
											<td>+1234123123123</td>
										</tr>
										<tr>
											<th>Status</th>
											<td>
												<span className="badge badge-success">Active</span>
											</td>
										</tr>
									</tbody>
								</table>

								<hr />

								<strong>Activity</strong>

								<ul className="timeline mt-2 mb-0">
									<li className="timeline-item">
										<strong>Signed out</strong>
										<span className="float-right text-muted text-sm">
											30m ago
										</span>
										<p>
											Nam pretium turpis et arcu. Duis arcu tortor,
											suscipit...
										</p>
									</li>
									<li className="timeline-item">
										<strong>Created invoice #1204</strong>
										<span className="float-right text-muted text-sm">
											2h ago
										</span>
										<p>Sed aliquam ultrices mauris. Integer ante arcu...</p>
									</li>
									<li className="timeline-item">
										<strong>Discarded invoice #1147</strong>
										<span className="float-right text-muted text-sm">
											3h ago
										</span>
										<p>
											Nam pretium turpis et arcu. Duis arcu tortor,
											suscipit...
										</p>
									</li>
									<li className="timeline-item">
										<strong>Signed in</strong>
										<span className="float-right text-muted text-sm">
											3h ago
										</span>
										<p>
											Curabitur ligula sapien, tincidunt non, euismod vitae...
										</p>
									</li>
									<li className="timeline-item">
										<strong>Signed up</strong>
										<span className="float-right text-muted text-sm">
											2d ago
										</span>
										<p>Sed aliquam ultrices mauris. Integer ante arcu...</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Member;
