import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from '../../projectModal.module.scss';
import Users from './components/Users';
import { UserContext } from './context/UserProvider';
import Img from '~/components/Img/Img';

const cx = classNames.bind(styles);

function UserAssign() {
	const userAssign = useContext(UserContext);

	return (
		<div className={cx('assign-wrapper', 'd-flex')}>
			<span className={cx('assign-label')}>Assign to</span>
			<div
				className={cx('user-assign')}
				onClick={() => {
					userAssign.setIsOpen(true);
				}}
			>
				{userAssign.assignees.length === 0 ? (
					<FontAwesomeIcon icon={faUser} />
				) : (
					userAssign.assignees.map((assignee) => {
						return (
							<Img
								key={assignee.id}
								src={assignee.src}
								className={cx('assignee-img')}
							/>
						);
					})
				)}
			</div>
			{userAssign.isOpen ? <Users /> : ''}
		</div>
	);
}

export default UserAssign;
