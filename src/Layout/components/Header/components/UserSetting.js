import { Link, Navigate } from 'react-router-dom';
import { useState, useRef, useContext, useEffect } from 'react';
import classNames from 'classnames/bind';
import config from '~/config';
import { UserContext } from '~/contexts/userProvider';
//component render
import Img from '~/components/Img/Img';
//css
import styles from '../Header.module.scss';

import { getMe } from '~/services/getMeService';
const cx = classNames.bind(styles);

function UserSetting() {
	const [isOpen, setIsOpen] = useState(false);
	const [currentUser, setCurrentUser] = useState({});
	const user = useContext(UserContext);
	const insideRef = useRef();
	useEffect(() => {
		const fetchApi = async () => {
			const result = await getMe(user.token);
			setCurrentUser(result.data[0]);
		};
		fetchApi();
	}, []);

	function handleDropDown() {
		setIsOpen(!isOpen);
	}

	function handleSignOut() {
		user.setUser(false);
		user.setToken(false);
	}

	//Click outside box
	window.addEventListener('click', (e) => {
		if (!insideRef?.current?.contains(e.target)) {
			setIsOpen(false);
		}
	});

	return (
		<div ref={insideRef} onClick={handleDropDown} className={cx('hover')}>
			<div
				className="nav-link dropdown-toggle d-none d-sm-inline-block"
				data-toggle="dropdown"
			>
				<Img
					src=".\assets\img\avatars\avatar.jpg"
					className="avatar img-fluid rounded-circle mr-1"
					alt="Chris Wood"
				/>
				<span className="text-dark">{currentUser.firstName}</span>
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="8"
				width="8"
				viewBox="0 0 512 512"
				className={cx('dropdown-arrow')}
			>
				<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
			</svg>
			<div
				className={cx('dropdown-menu dropdown-menu-right', {
					show: isOpen,
				})}
			>
				<Link className="dropdown-item" to={config.routes.Profile}>
					<i className="align-middle mr-1" data-feather="user"></i> Profile
				</Link>
				<div className="dropdown-divider"></div>
				<Link className="dropdown-item" to={config.routes.Settings}>
					Settings & Privacy
				</Link>
				<Link className="dropdown-item" to={config.routes.Unknown}>
					Help
				</Link>
				<div onClick={handleSignOut} className="dropdown-item">
					Sign out
				</div>
			</div>
		</div>
	);
}

export default UserSetting;
