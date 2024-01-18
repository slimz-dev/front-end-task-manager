import { useContext } from 'react';
import { ModalContext } from '~/contexts/ModalProvider';
import { UserContext } from '~/contexts/userProvider';
import toastDenied from '~/toastDenied/toast';
function AssignButton() {
	const user = useContext(UserContext);
	const modal = useContext(ModalContext);
	function handleShow() {
		if (user.info.role.localTaskManager.create) {
			modal.setShow(true);
		} else {
			toastDenied();
		}
	}
	return (
		<div
			onClick={handleShow}
			className="btn btn-primary float-right mt-n1"
			style={{ cursor: 'pointer' }}
		>
			<i className="fas fa-plus"></i> New Task Assign
		</div>
	);
}

export default AssignButton;
