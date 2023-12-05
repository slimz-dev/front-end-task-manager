import { Modal, Button } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './deleteModal.module.scss';

const cx = classNames.bind(styles);
const DeleteConfirmation = ({ showModal, confirmModal, hideModal, message }) => {
	return (
		<Modal show={showModal} onHide={hideModal}>
			<Modal.Header>
				<Modal.Title>
					<strong>Delete Confirmation</strong>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className={cx('alert alert-danger', 'msg-padding')}>{message}</div>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="default" onClick={hideModal}>
					Cancel
				</Button>
				<Button variant="danger" onClick={confirmModal}>
					Delete
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default DeleteConfirmation;
