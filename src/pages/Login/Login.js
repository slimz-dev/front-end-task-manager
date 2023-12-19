import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import validator from 'validator';
//Context
import { UserContext } from '~/contexts/userProvider';

//component render
import Img from '~/components/Img/Img';

//config
import config from '~/config';

//css
import styles from './Login.module.scss';

//Login api
import { userLogin } from '~/services/loginService';
import { toast, ToastContainer } from 'react-toastify';
const cx = classNames.bind(styles);

function Login() {
	const [data, setData] = useState({});
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	useEffect(() => {
		const loginUser = async () => {
			if (Object.keys(data).length > 0) {
				if (!validator.isEmail(data.email)) {
					data.userName = data.email;
					delete data.email;
				}
				const result = await userLogin(data);
				let msg;
				if (result.statusCode === 404) {
					msg = "This account doesn't exist";
				} else if (result.statusCode === 200) {
					msg = result.data.message;
					setTimeout(() => {
						window.location.reload();
					}, 2000);
					localStorage.setItem('token', result.data.token);
				}
				toast(msg, {
					position: 'top-center',
					autoClose: 300,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'dark',
				});
			}
		};
		loginUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);
	useEffect(() => {
		if (localStorage.getItem('token')) {
			return navigate(config.routes.App);
		}
	}, []);
	function handleReset() {
		return navigate(config.routes.ResetPass);
	}
	function handleChange(e) {
		switch (e.target.name) {
			case 'email': {
				setEmail(e.target.value);
				break;
			}
			default: {
				setPassword(e.target.value);
				break;
			}
		}
	}

	function handleSubmit() {
		if (email && password) {
			setData({ email, password });
		} else {
			console.log('dont have enough info');
		}
	}

	return (
		<div className={cx('wrapper')}>
			<main className="main d-flex w-100">
				<div className="container d-flex flex-column">
					<div className="row h-100">
						<div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
							<div className="d-table-cell align-middle">
								<div className="text-center mt-4">
									{/* <h1 className="h2">Welcome back, Chris</h1> */}
									<p className="lead">Sign in to your account to continue</p>
								</div>

								<div className="card">
									<div className="card-body">
										<div className="m-sm-4">
											<div className="text-center">
												<Img
													alt="Chris Wood"
													src="hi"
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
														value={email}
														onChange={(e) => handleChange(e)}
														placeholder="Enter your email"
													/>
												</div>
												<div className="form-group">
													<label>Password</label>
													<input
														className="form-control form-control-lg"
														type="password"
														name="password"
														value={password}
														onChange={(e) => handleChange(e)}
														placeholder="Enter your password"
													/>
													<small className="d-flex">
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
														/>
														<label className="custom-control-label text-small">
															Remember me next time
														</label>
													</div>
												</div>
												<div className="text-center mt-3">
													<div
														onClick={handleSubmit}
														href="dashboard-default.html"
														className={cx(
															'btn btn-lg btn-primary',
															'btn-submit'
														)}
													>
														Sign in
													</div>
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
			<ToastContainer />
		</div>
	);
}

export default Login;
