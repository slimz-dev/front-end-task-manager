import classNames from 'classnames/bind';
import { useContext } from 'react';

import { ModalContext } from '~/contexts/ModalProvider';
import styles from '../../../../AdminConfiguration.module.scss';

import CreateDepartment from '~/components/Modal/DepartmentCreate/CreateDepartment';

const cx = classNames.bind(styles);
function ActionGroups() {
	const modal = useContext(ModalContext);
	return (
		<div className={cx('action-groups')}>
			<div className={cx('group-action-groups')}>
				<button
					onClick={() => modal.setShow(true)}
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
