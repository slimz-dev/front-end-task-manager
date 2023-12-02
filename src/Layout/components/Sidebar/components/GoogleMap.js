import classNames from 'classnames/bind';
import styles from '../Sidebar.module.scss';

const cx = classNames.bind(styles);

function GoogleMap() {
	return (
		<a href="#amaps" className="sidebar-link ">
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
				className="feather feather-map-pin align-middle"
			>
				<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
				<circle cx="12" cy="10" r="3"></circle>
			</svg>
			<span className="align-middle">Maps</span>
		</a>
	);
}

export default GoogleMap;
