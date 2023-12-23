import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from '../../projectModal.module.scss';
import Users from './components/Users';

const cx = classNames.bind(styles);

function UserAssign() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={cx('assign-wrapper', 'd-flex')}>
			<span className={cx('assign-label')}>Assign to</span>
			<div className={cx('user-assign')} onClick={() => setIsOpen(!isOpen)}>
				<FontAwesomeIcon icon={faUser} />
			</div>
			{isOpen ? <Users /> : ''}
		</div>
	);
}

export default UserAssign;
