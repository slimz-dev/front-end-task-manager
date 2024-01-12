//context

//component render
import { Modal, Button } from 'react-bootstrap';

//css
import styles from './PersonalTaskModal.module.scss';
import { ModalContext } from '~/contexts/ModalProvider';
import { useContext } from 'react';
import useClass from '~/hooks/useClass';

function PersonalTaskModal() {
	const cx = useClass(styles);
	const modal = useContext(ModalContext);

	function hideModal() {
		modal.setShow(false);
	}
	function handleSubmit() {}
	return (
		<>
			{modal.show ? (
				<Modal
					show={modal.show}
					onHide={hideModal}
					size="small"
					centered
					className={cx('effect')}
				>
					<Modal.Header>
						<Modal.Title className={cx('title')}>
							<div className={cx('d-flex', 'flex-row', 'task-title')}>
								Create Task
							</div>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body className={cx('d-flex', 'flex-column')}>
						<div className={cx('button-container')}>
							<div className={cx('d-flex', 'flex-column', 'relative')}>
								<label className={cx('input-label')}>Task Name</label>
								<input className={cx('input')} placeholder="Enter your task name" />
							</div>
							<div className={cx('d-flex', 'flex-column', 'relative')}>
								<label className={cx('input-label')}>Description</label>
								<textarea
									className={cx('input')}
									rows="10"
									placeholder="Enter your description"
								/>
							</div>
						</div>
					</Modal.Body>
					<Modal.Footer className={cx('d-flex', 'justify-content-between')}>
						<Button className={cx('btn-pill', 'create-btn')} onClick={handleSubmit}>
							Submit
						</Button>
					</Modal.Footer>
				</Modal>
			) : (
				''
			)}
		</>
	);
}

export default PersonalTaskModal;
