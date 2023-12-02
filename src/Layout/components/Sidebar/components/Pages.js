import classNames from 'classnames/bind';
import styles from '../Sidebar.module.scss';

const cx = classNames.bind(styles);

function Pages() {
	return (
		<>
			<a href="#apages" data-toggle="collapse" className="sidebar-link collapsed">
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
			</a>
			<ul
				id="pages"
				className="sidebar-dropdown list-unstyled collapse "
				data-parent="#sidebar"
			>
				<li className="sidebar-item">
					<a className="sidebar-link" href="paages-profile.html">
						Profile
					</a>
				</li>
				<li className="sidebar-item">
					<a className="sidebar-link" href="paages-settings.html">
						Settings
					</a>
				</li>
				<li className="sidebar-item">
					<a className="sidebar-link" href="paages-clients.html">
						Clients
					</a>
				</li>
				<li className="sidebar-item">
					<a className="sidebar-link" href="paages-projects.html">
						Projects <span className="sidebar-badge badge badge-primary">New</span>
					</a>
				</li>
				<li className="sidebar-item">
					<a className="sidebar-link" href="paages-invoice.html">
						Invoice
					</a>
				</li>
				<li className="sidebar-item">
					<a className="sidebar-link" href="paages-pricing.html">
						Pricing
					</a>
				</li>
				<li className="sidebar-item">
					<a className="sidebar-link" href="paages-tasks.html">
						Tasks <span className="sidebar-badge badge badge-primary">New</span>
					</a>
				</li>
				<li className="sidebar-item">
					<a className="sidebar-link" href="paages-blank.html">
						Blank Page
					</a>
				</li>
			</ul>
		</>
	);
}

export default Pages;
