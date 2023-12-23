import { useContext } from 'react';
import { ModalContext } from '~/contexts/ModalProvider';
function Button() {
	const modal = useContext(ModalContext);
	function handleShow() {
		modal.setShow(true);
	}
	return (
		<div
			onClick={handleShow}
			className="btn btn-primary float-right mt-n1"
			style={{ cursor: 'pointer' }}
		>
			<i className="fas fa-plus"></i> New project
		</div>
	);
}

export default Button;
