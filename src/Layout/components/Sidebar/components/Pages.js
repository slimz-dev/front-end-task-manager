import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '../Sidebar.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);

function Pages() {
	const [isOpen, setIsOpen] = useState(false);
	function handleOpen() {
		setIsOpen(!isOpen);
	}
	return (
		<>
			<div
				onClick={handleOpen}
				data-toggle="collapse"
				className={cx('sidebar-link', {
					collapsed: !isOpen,
				})}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="feather feather-layout align-middle"
				>
					<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
					<line x1="3" y1="9" x2="21" y2="9"></line>
					<line x1="9" y1="21" x2="9" y2="9"></line>
				</svg>
				<span className="align-middle">Pages</span>
			</div>
			<ul
				id="pages"
				className={cx('sidebar-dropdown list-unstyled', {
					collapse: !isOpen,
				})}
				data-parent="#sidebar"
			>
				{/* <li className="sidebar-item">
					<Link className="sidebar-link" to={config.routes.Profile}>
						Profile
					</Link>
				</li> */}
				<li className="sidebar-item">
					<Link className="sidebar-link" to={config.routes.Settings}>
						Settings
					</Link>
				</li>

				<li className="sidebar-item">
					<Link className="sidebar-link" to={config.routes.Projects}>
						Projects
					</Link>
				</li>

				<li className="sidebar-item">
					<Link className="sidebar-link" to={config.routes.Tasks}>
						Tasks
					</Link>
				</li>
			</ul>
		</>
	);
}

export default Pages;
