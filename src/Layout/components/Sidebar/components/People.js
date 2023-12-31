import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { getAll } from '~/services/UserService/getAllUserService';
//css
import styles from '../Sidebar.module.scss';

import { UserContext } from '~/contexts/userProvider';
//config
import config from '~/config';
// import { el } from '@fullcalendar/core/internal-common';

const cx = classNames.bind(styles);

function People() {
	const totalUser = useContext(UserContext);

	const [users, setUsers] = useState({
		activeUsers: 0,
		totalUsers: 0,
	});
	useEffect(() => {
		const fetchAll = async () => {
			const result = await getAll();
			if (!result.meta) {
				console.log('error getting all user');
			} else {
				const activeUsers = totalUser.online.filter((userState) => {
					return userState.state === true;
				});
				setUsers({
					activeUsers: activeUsers.length,
					totalUsers: result.meta.numbers,
				});
			}
		};

		fetchAll();
	}, [totalUser.online]);
	return (
		<Link to={config.routes.Member} className="sidebar-link " aria-expanded="false">
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
				className="feather feather-users align-middle"
			>
				<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
				<circle cx="9" cy="7" r="4"></circle>
				<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
				<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
			</svg>
			<span className="align-middle">People</span>
			<span className="sidebar-badge badge badge-secondary">
				{users.activeUsers}/{users.totalUsers}
			</span>
		</Link>
	);
}

export default People;
