import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

//context
import ModalProvider from '../../../contexts/ModalProvider';
import { UserContext } from '~/contexts/userProvider';
import { Toggle } from '~/Layout/DefaultLayout/context/ToggleProvider';

//css
import styles from './Sidebar.module.scss';

// Component render
import TaskAdding from './components/TaskAdding';
import Pages from './components/Pages';
import People from './components/People';
import Calendar from './components/Calendar';
import MemberAdding from './components/MemberAdding';
import Img from '~/components/Img/Img';

// config
import config from '~/config';
import InviteModal from '~/components/Modal/Invitation/inviteModal';
import Config from './components/Config';

const cx = classNames.bind(styles);

function Sidebar() {
	const sidebarToggle = useContext(Toggle);
	const user = useContext(UserContext);
	const [currentUser, setCurrentUser] = useState({});
	useEffect(() => {
		setCurrentUser(user.info);
	}, [user]);

	return (
		<nav
			id="sidebar"
			className={cx('sidebar', {
				toggled: sidebarToggle.isToggled,
			})}
		>
			<ModalProvider>
				<div className="sidebar-content ">
					<Link className="sidebar-brand" to={config.routes.App}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="16"
							width="16"
							viewBox="0 0 512 512"
							className="feather feather-box align-middle"
						>
							<path
								fill="white"
								d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
							/>
						</svg>
						<span className="align-middle">TaskManager</span>
					</Link>

					<ul className="sidebar-nav">
						<li className={cx('sidebar-item')}>
							<TaskAdding />
						</li>
						<li className="sidebar-item">
							<Pages />
						</li>
						{user.info ? (
							user.info.role.totalEmployees.read ? (
								<li className="sidebar-item">
									<People />
								</li>
							) : (
								''
							)
						) : (
							''
						)}
						<li className="sidebar-item">
							<Calendar />
						</li>
						<li className="sidebar-header">Actions</li>
						<li className="sidebar-item">
							<MemberAdding />
						</li>
						<li className="sidebar-item">
							<Config />
						</li>
					</ul>

					<div className="sidebar-bottom d-none d-lg-block">
						<div className="media">
							<Img
								className="rounded-circle mr-3"
								src={currentUser.img ? currentUser.img : ''}
								alt="Chris Wood"
								width="40"
								height="40"
							/>
							<div className="media-body">
								<h5 className="mb-1">
									{currentUser
										? currentUser?.firstName
											? `${currentUser.firstName} ${
													currentUser.lastName ? currentUser.lastName : ''
											  }`
											: ''
										: ''}
								</h5>
								<div>
									<i className="fas fa-circle text-success"></i> Online
								</div>
							</div>
						</div>
					</div>
				</div>
				<InviteModal />
			</ModalProvider>
		</nav>
	);
}

export default Sidebar;
