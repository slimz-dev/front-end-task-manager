import { useContext } from 'react';
import { ModalContext } from '~/contexts/ModalProvider';
import useClass from '~/hooks/useClass';
import { TaskAssignContext } from '../../context/TaskAssignProvider';
import styles from '../../projectModal.module.scss';
const { Button } = require('react-bootstrap');

function FooterButton() {
	const cx = useClass(styles);
	const modal = useContext(ModalContext);
	const task = useContext(TaskAssignContext);
	function hideModal() {
		modal.setShow(false);
	}
	return (
		<>
			<Button onClick={hideModal} className={cx('btn-pill', 'cancel-btn')}>
				Cancel
			</Button>
			<Button onClick={task.submitForm} className={cx('btn-pill', 'create-btn')}>
				Create task
			</Button>
		</>
	);
}

export default FooterButton;
