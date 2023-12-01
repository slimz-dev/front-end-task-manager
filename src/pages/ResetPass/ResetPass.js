function ResetPass() {
	return (
		<div>
			<main className="main d-flex w-100">
				<div className="container d-flex flex-column">
					<div className="row h-100">
						<div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
							<div className="d-table-cell align-middle">
								<div className="text-center mt-4">
									<h1 className="h2">Reset password</h1>
									<p className="lead">Enter your email to reset your password.</p>
								</div>

								<div className="card">
									<div className="card-body">
										<div className="m-sm-4">
											<form>
												<div className="form-group">
													<label>Email</label>
													<input
														className="form-control form-control-lg"
														type="email"
														name="email"
														placeholder="Enter your email"
													/>
												</div>
												<div className="text-center mt-3">
													<a
														href="dashboard-default.html"
														className="btn btn-lg btn-primary"
													>
														Reset password
													</a>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default ResetPass;
