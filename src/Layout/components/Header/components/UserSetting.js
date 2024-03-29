import { Link } from 'react-router-dom';
import { useState, useRef, useContext, useEffect } from 'react';
import { socket } from '~/socket';
import classNames from 'classnames/bind';
import config from '~/config';
import { UserContext } from '~/contexts/userProvider';
//component render
import Img from '~/components/Img/Img';
//css
import styles from '../Header.module.scss';

const cx = classNames.bind(styles);

function UserSetting() {
	const [isOpen, setIsOpen] = useState(false);
	const [currentUser, setCurrentUser] = useState({});
	const user = useContext(UserContext);
	const insideRef = useRef();
	useEffect(() => {
		setCurrentUser(user.info);
	}, [user]);

	function handleDropDown() {
		setIsOpen(!isOpen);
	}

	function handleSignOut() {
		localStorage.removeItem('token');
		socket.emit('login', user.info._id, false);
		window.location.reload();
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
					src={currentUser?.img ? currentUser?.img : ''}
					className="avatar img-fluid rounded-circle mr-1 fc-unselectable"
					alt="Chris Wood"
				/>
				<span className="text-dark fc-unselectable">
					{currentUser
						? `${currentUser?.firstName} ${
								currentUser?.lastName ? currentUser?.lastName : ''
						  }`
						: ''}
				</span>
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
