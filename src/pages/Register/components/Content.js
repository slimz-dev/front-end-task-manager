import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import { toast } from 'react-toastify';
//css
import styles from './components.module.scss';

//fetch api
import { userRegistration } from '~/services/UserService/registerService';

//config
import config from '~/config';

const cx = classNames.bind(styles);
function Content() {
	const params = useParams();
	const navigate = useNavigate();
	const inputRef = useRef();
	const buttonRef = useRef();
	const [data, setData] = useState({});
	const [firstName, setFirstName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	useEffect(() => {
		const handlePress = (event) => {
			const key = event.key;
			if (key === 'Enter') {
				buttonRef.current.click();
			}
		};
		inputRef.current.addEventListener('keypress', handlePress, true);
		return inputRef.current.removeEventListener('keypress', handlePress);
	}, []);
	useEffect(() => {
		const registerUser = async () => {
			if (Object.keys(data).length > 0) {
				try {
					const result = await userRegistration(params.token, data);
					if (result.User) {
						toast('Registration successfully', {
							position: 'top-center',
							autoClose: 1000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: 'dark',
						});
						setTimeout(() => {
							navigate(config.routes.Login);
						}, 2500);
					}
				} catch (err) {
					toast('Email existed or invalid email !', {
						position: 'top-center',
						autoClose: 1000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'dark',
					});
				}
			}
		};
		registerUser();
	}, [data, navigate]);

	function handleData(e) {
		switch (e.target.name) {
			case 'name': {
				setFirstName(e.target.value);
				break;
			}
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
	function handleSignUp() {
		if (firstName && email && password) {
			setData({ firstName, email, password });
		} else {
			toast('All fields required !', {
				position: 'top-center',
				autoClose: 1000,
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
		<div className="card">
			<div className="card-body">
				<div className="m-sm-4">
					<form>
						<div className="form-group">
							<label>Name</label>
							<input
								className="form-control form-control-lg"
								type="text"
								name="name"
								value={firstName}
								onChange={(e) => handleData(e)}
								placeholder="Enter your name"
							/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input
								className="form-control form-control-lg"
								type="email"
								name="email"
								value={email}
								onChange={(e) => handleData(e)}
								placeholder="Enter your email"
							/>
						</div>
						<div className="form-group">
							<label>Password</label>
							<input
								ref={inputRef}
								className="form-control form-control-lg"
								type="password"
								name="password"
								value={password}
								onChange={(e) => handleData(e)}
								placeholder="Enter password"
							/>
						</div>
						<div className="text-center mt-3">
							<div
								ref={buttonRef}
								onClick={handleSignUp}
								className={cx('btn btn-lg btn-primary', 'hover')}
							>
								Sign up
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Content;
