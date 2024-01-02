import { useState } from 'react';
import { Link } from 'react-router-dom';
import config from '~/config';
import { changePassword } from '~/services/UserService/changePassword';
import { ToastContainer, toast } from 'react-toastify';
import { Toast } from 'react-bootstrap';
function Password() {
	const [password, setPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [rePassword, setRePassword] = useState('');
	function handleChangePassword(e) {
		const password = e.target.value.trim();
		const propName = e.target.name;
		switch (propName) {
			case 'password': {
				setPassword(password);
				break;
			}
			case 'newPassword': {
				setNewPassword(password);
				break;
			}
			default: {
				setRePassword(password);
				break;
			}
		}
	}

	function handleSubmit() {
		if (password && newPassword === rePassword) {
			const data = {
				password,
				newPassword,
			};
			const updatePassword = async () => {
				const result = await changePassword(data);
				if (result.data) {
					toast.success('💯 Update password successfully ', {
						position: 'top-center',
						autoClose: 2000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'dark',
					});
				} else {
					toast.warn('❗ Wrong password, please try again', {
						position: 'top-center',
						autoClose: 2000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'dark',
					});
				}
			};
			updatePassword();
		} else if (password) {
			toast.warn('❗ New password doesnt match, please try again', {
				position: 'top-center',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark',
			});
		} else {
			toast.warn('❗ Empty password field', {
				position: 'top-center',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark',
			});
		}
	}

	return (
		<div className="tab-pane fade active show" id="password" role="tabpanel">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">Password</h5>

					<form>
						<div className="form-group">
							<label htmlFor="inputPasswordCurrent">Current password</label>
							<input
								value={password}
								onChange={(e) => handleChangePassword(e)}
								name="password"
								type="password"
								className="form-control"
								id="inputPasswordCurrent"
							/>
							<small>
								<Link to={config.routes.ResetPass}>Forgot your password?</Link>
							</small>
						</div>
						<div className="form-group">
							<label htmlFor="inputPasswordNew">New password</label>
							<input
								value={newPassword}
								onChange={(e) => handleChangePassword(e)}
								name="newPassword"
								type="password"
								className="form-control"
								id="inputPasswordNew"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="inputPasswordNew2">Verify password</label>
							<input
								value={rePassword}
								onChange={(e) => handleChangePassword(e)}
								name="rePassword"
								type="password"
								className="form-control"
								id="inputPasswordNew2"
							/>
						</div>
						<div type="submit" onClick={handleSubmit} className="btn btn-primary">
							Save changes
						</div>
					</form>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
}

export default Password;
