import classNames from 'classnames/bind';
import { useContext } from 'react';
import AddGroups from '~/components/Modal/AdminGroups/AddGroups';
import { ModalContext } from '~/contexts/ModalProvider';
import { AdminContext } from '../../../../contexts/AdminProvider.js/AdminProvider';
import styles from '../../../../AdminConfiguration.module.scss';
import { MainContext } from '../../../../AdminConfiguration';
import { UserContext } from '~/contexts/userProvider';
import toastDenied from '~/toastDenied/toast';

const cx = classNames.bind(styles);
function ActionGroups() {
	const user = useContext(UserContext);
	const groups = useContext(AdminContext);
	const modal = useContext(ModalContext);
	const main = useContext(MainContext);
	function handleAdd() {
		if (user.info.role.admin.create) {
			modal.setShow(true);
		} else {
			toastDenied();
		}
	}
	function handleDelete() {
		if (user.info.role.admin.delete) {
			groups.handleDeletedAction();
		} else {
			toastDenied();
		}
	}
	return (
		<div className={cx('action-groups')}>
			<div className={cx('group-action-groups')}>
				<button
					onClick={handleAdd}
					className={cx('button-css', 'badge-success', 'add-hover')}
				>
					Add
				</button>
				<button
					onClick={handleDelete}
					className={cx('button-css', 'badge-warning', 'delete-hover')}
				>
					Delete
				</button>
			</div>
			<div>
				<button
					onClick={() => main.handleChangeView(false, false)}
					className={cx('button-css', 'badge-info', 'assign-hover')}
				>
					Department
				</button>
				<button
					onClick={() => main.handleChangeView(false, true)}
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
