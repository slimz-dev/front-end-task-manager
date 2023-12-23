import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from '../projectModal.module.scss';

const cx = classNames.bind(styles);

function UserAssign() {
	return (
		<div className={cx('assign-wrapper', 'd-flex')}>
			<span className={cx('assign-label')}>Assign to</span>
			<FontAwesomeIcon icon={faUser} />
		</div>
	);
}

export default UserAssign;
