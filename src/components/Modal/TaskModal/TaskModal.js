import { useState, useContext, useRef } from 'react';
import classNames from 'classnames/bind';

import { faCheck, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//context
import { TaskModalContext } from './context/TaskModalProvider';

//component render
import { Modal, Button } from 'react-bootstrap';

//css
import styles from './projectModal.module.scss';

const cx = classNames.bind(styles);
const TaskModal = () => {
	const [job, setJob] = useState(false);
	const modal = useContext(TaskModalContext);

	function hideModal() {
		modal.setShow(false);
	}
	function handleAddJob() {
		setJob(true);
	}
	function handleCloseJob() {
		setJob(false);
	}

	return (
		<Modal show={modal.show} onHide={hideModal} size="small" centered className={cx('effect')}>
			<Modal.Header>
				<Modal.Title>
					<strong>{modal.taskInfo.name}</strong>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className={cx('d-flex', 'flex-column')}>
				<div className={cx('job-container', 'd-flex', 'justify-content-between')}>
					<label>cong viec gi do</label>
					<input type="checkbox" />
				</div>
				<div className={cx('button-container')}>
					{job ? (
						<>
							<input />
							<span className={cx('button-close')} onClick={handleCloseJob}>
								<FontAwesomeIcon icon={faCheck} />
							</span>
							<span className={cx('button-close')} onClick={handleCloseJob}>
								<FontAwesomeIcon icon={faXmark} />
							</span>
						</>
					) : (
						<div className={cx('button-add')} onClick={handleAddJob}>
							+ ADD Job
						</div>
					)}
				</div>
				<div className={cx('d-flex', 'flex-row', 'assign')}></div>
				<textarea
					className={cx('description')}
					placeholder="Enter your description about this task"
					rows="8"
					cols="50"
				></textarea>
			</Modal.Body>
			<Modal.Footer className={cx('d-flex', 'justify-content-between')}>
				<Button className={cx('btn-pill', 'create-btn')}>Submit</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default TaskModal;
