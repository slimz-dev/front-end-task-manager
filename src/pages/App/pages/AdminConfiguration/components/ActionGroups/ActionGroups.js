import classNames from 'classnames/bind';
import { useContext } from 'react';
import AddGroups from '~/components/Modal/AdminGroups/AddGroups';
import { ModalContext } from '~/contexts/ModalProvider';
import { AdminContext } from '../../contexts/AdminProvider.js/AdminProvider';
import styles from '../../AdminConfiguration.module.scss';

const cx = classNames.bind(styles);
function ActionGroups() {
	const groups = useContext(AdminContext);
	const modal = useContext(ModalContext);
	return (
		<div className={cx('action-groups')}>
			<button
				onClick={() => modal.setShow(true)}
				className={cx('button-css', 'badge-success', 'add-hover')}
			>
				Add
			</button>
			<button
				onClick={groups.handleDeletedAction}
				className={cx('button-css', 'badge-warning', 'delete-hover')}
			>
				Delete
			</button>
			<AddGroups />
		</div>
	);
}

export default ActionGroups;
