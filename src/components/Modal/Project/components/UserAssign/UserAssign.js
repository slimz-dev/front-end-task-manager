import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from '../../projectModal.module.scss';
import Users from './components/Users';
import { UserAssignContext } from './context/UserProvider';
import Img from '~/components/Img/Img';
import { TaskAssignContext } from '../../context/TaskAssignProvider';

const cx = classNames.bind(styles);

function UserAssign() {
	const userAssign = useContext(UserAssignContext);
	const task = useContext(TaskAssignContext);
	return (
		<div className={cx('assign-wrapper', 'd-flex')}>
			<span className={cx('assign-label')}>Assign to</span>
			<div
				className={cx('user-assign')}
				onClick={() => {
					userAssign.setIsOpen(true);
				}}
			>
				{task.assignees.length === 0 ? (
					<FontAwesomeIcon icon={faUser} />
				) : (
					task.assignees.map((assignee) => {
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
