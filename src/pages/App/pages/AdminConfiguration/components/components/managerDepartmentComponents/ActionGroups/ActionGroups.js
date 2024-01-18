import classNames from 'classnames/bind';
import { useContext } from 'react';

import { ModalContext } from '~/contexts/ModalProvider';
import styles from '../../../../AdminConfiguration.module.scss';

import CreateDepartment from '~/components/Modal/DepartmentCreate/CreateDepartment';
import { UserContext } from '~/contexts/userProvider';
import toastDenied from '~/toastDenied/toast';

const cx = classNames.bind(styles);
function ActionGroups() {
	const user = useContext(UserContext);
	const modal = useContext(ModalContext);
	function handleShow() {
		if (user.info.role.admin.create) {
			modal.setShow(true);
		} else {
			toastDenied();
		}
	}
	return (
		<div className={cx('action-groups')}>
			<div className={cx('group-action-groups')}>
				<button
					onClick={handleShow}
					className={cx('button-css', 'badge-success', 'add-hover')}
				>
					Add
				</button>
			</div>
			<CreateDepartment />
		</div>
	);
}

export default ActionGroups;
