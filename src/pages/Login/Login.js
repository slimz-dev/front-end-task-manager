import { useNavigate } from 'react-router-dom';
import config from '~/config';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
	const navigate = useNavigate();
	function handleReset() {
		return navigate(config.routes.ResetPass);
	}
	return (
		<div className={cx('wrapper')}>
			<main className="main d-flex w-100">
				<div className="container d-flex flex-column">
					<div className="row h-100">
						<div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
							<div className="d-table-cell align-middle">
								<div className="text-center mt-4">
									<h1 className="h2">Welcome back, Chris</h1>
									<p className="lead">Sign in to your account to continue</p>
								</div>

								<div className="card">
									<div className="card-body">
										<div className="m-sm-4">
											<div className="text-center">
												<img
													src="./assets/img/avatars/avatar-2.jpg"
													alt="Chris Wood"
													className="img-fluid rounded-circle"
													width="132"
													height="132"
												/>
											</div>
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
												<div className="form-group">
													<label>Password</label>
													<input
														className="form-control form-control-lg"
														type="password"
														name="password"
														placeholder="Enter your password"
													/>
													<small>
														<div
															className={cx('btn-reset')}
															onClick={handleReset}
														>
															Forgot password?
														</div>
													</small>
												</div>
												<div>
													<div className="custom-control custom-checkbox align-items-center">
														<input
															type="checkbox"
															className="custom-control-input"
															value="remember-me"
															name="remember-me"
															checked=""
														/>
														<label className="custom-control-label text-small">
															Remember me next time
														</label>
													</div>
												</div>
												<div className="text-center mt-3">
													<a
														href="dashboard-default.html"
														className="btn btn-lg btn-primary"
													>
														Sign in
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

export default Login;
