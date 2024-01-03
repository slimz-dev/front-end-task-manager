import classNames from 'classnames/bind';
import { useContext } from 'react';
import AddGroups from '~/components/Modal/AdminGroups/AddGroups';
import { ModalContext } from '~/contexts/ModalProvider';
import { AdminContext } from '../../../contexts/AdminProvider.js/AdminProvider';
import styles from '../../../AdminConfiguration.module.scss';
import { MainContext } from '../../../AdminConfiguration';

const cx = classNames.bind(styles);
function ActionGroups() {
	const groups = useContext(AdminContext);
	const modal = useContext(ModalContext);
	const main = useContext(MainContext);
	return (
		<div className={cx('action-groups')}>
			<div className={cx('group-action-groups')}>
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
			</div>
			<div>
				<button
					onClick={() => main.handleChangeView(false)}
					className={cx('button-css', 'badge-info', 'assign-hover')}
				>
					Assign
				</button>
			</div>
			<AddGroups />
		</div>
	);
}

export default ActionGroups;
