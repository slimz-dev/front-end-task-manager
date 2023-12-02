import { useState, useRef } from 'react';
import classNames from 'classnames/bind';

//css
import styles from '../Header.module.scss';

const cx = classNames.bind(styles);

function UserSetting() {
	const [isOpen, setIsOpen] = useState(false);
	const insideRef = useRef();
	function handleDropDown() {
		setIsOpen(!isOpen);
	}

	//Click outside box
	window.addEventListener('click', (e) => {
		if (!insideRef.current.contains(e.target)) {
			setIsOpen(false);
		}
	});

	return (
		<div ref={insideRef} onClick={handleDropDown} className={cx('hover')}>
			<div
				className="nav-link dropdown-toggle d-none d-sm-inline-block"
				data-toggle="dropdown"
			>
				<img
					src=".\assets\img\avatars\avatar.jpg"
					className="avatar img-fluid rounded-circle mr-1"
					alt="Chris Wood"
				></img>
				<span className="text-dark">Chris Wood 2</span>
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
				<a className="dropdown-item" href="pages-profile.html">
					<i className="align-middle mr-1" data-feather="user"></i> Profile
				</a>
				<a className="dropdown-item" href="#">
					<i className="align-middle mr-1" data-feather="pie-chart"></i> Analytics
				</a>
				<div className="dropdown-divider"></div>
				<a className="dropdown-item" href="pages-settings.html">
					Settings & Privacy
				</a>
				<a className="dropdown-item" href="#">
					Help
				</a>
				<a className="dropdown-item" href="#">
					Sign out
				</a>
			</div>
		</div>
	);
}

export default UserSetting;
