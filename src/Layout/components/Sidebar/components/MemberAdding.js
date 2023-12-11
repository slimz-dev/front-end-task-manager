import classNames from 'classnames/bind';
import styles from '../Sidebar.module.scss';

const cx = classNames.bind(styles);

function MemberAdding() {
	return (
		<a href="#amaps" className="sidebar-link ">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="16"
				width="16"
				fill="white"
				viewBox="0 0 512 512"
				className="feather feather-map-pin align-middle"
			>
				<path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
			</svg>
			<span className="align-middle">Invite people</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="16"
				width="14"
				viewBox="0 0 448 512"
				className={cx('right')}
			>
				<path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
			</svg>
		</a>
	);
}

export default MemberAdding;
