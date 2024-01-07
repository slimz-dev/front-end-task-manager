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
import Img from '~/components/Img/Img';

const cx = classNames.bind(styles);
const TaskModal = () => {
	const [job, setJob] = useState(false);
	const [jobTitle, setJobTitle] = useState('');
	const [comment, setComment] = useState(false);
	const modal = useContext(TaskModalContext);
	function hideModal() {
		modal.setShow(false);
	}
	async function handleAddJob() {
		await modal.addJob(jobTitle);
		setJob(false);
	}

	function handleSetJobTitle(e) {
		const title = e.target.value;
		setJobTitle(title);
	}
	function handleAddComment() {
		setComment(true);
	}

	function handleCloseComment() {
		setComment(false);
	}

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
						<Modal.Title>
							<strong>{modal.taskInfo.name}</strong>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body className={cx('d-flex', 'flex-column')}>
						<div
							className={cx(
								'job-container',
								'flex-column',
								'd-flex',
								'justify-content-between'
							)}
						>
							{modal.taskInfo.smallJob.map((job, index) => {
								return (
									<div
										className={cx(
											'job-element',
											'd-flex',
											'justify-content-between'
										)}
										key={index}
									>
										<label htmlFor="example" className={cx('job-label')}>
											{job.title}
										</label>
										<input
											id="example"
											type="checkbox"
											defaultChecked={job.state}
											className={cx('job-checkbox')}
										/>
									</div>
								);
							})}
						</div>
						<div className={cx('button-container')}>
							{job ? (
								<div className={cx('action-container')}>
									<input
										className={cx('action-input')}
										placeholder="Enter your new job"
										value={jobTitle}
										onChange={handleSetJobTitle}
									/>
									<div className={cx('action-handler-container')}>
										<span className={cx('button-add')} onClick={handleAddJob}>
											<FontAwesomeIcon icon={faCheck} />
										</span>
										<span
											className={cx('button-close')}
											onClick={() => setJob(false)}
										>
											<FontAwesomeIcon icon={faXmark} />
										</span>
									</div>
								</div>
							) : (
								<div className={cx('job-add')} onClick={() => setJob(true)}>
									+ Add Job
								</div>
							)}
							{comment ? (
								<div className={cx('action-container')}>
									<input
										className={cx('action-input')}
										placeholder="Enter your comment"
									/>
									<div className={cx('action-handler-container')}>
										<span
											className={cx('button-add')}
											onClick={handleCloseComment}
										>
											<FontAwesomeIcon icon={faCheck} />
										</span>
										<span
											className={cx('button-close')}
											onClick={handleCloseComment}
										>
											<FontAwesomeIcon icon={faXmark} />
										</span>
									</div>
								</div>
							) : (
								<div className={cx('notification')} onClick={handleAddComment}>
									+ Add comment
								</div>
							)}
						</div>
						<div className={cx('d-flex', 'flex-row', 'assign')}>Comment</div>
						<div className={cx('comment-container')}>
							{modal.taskInfo.comment.map((comment, index) => {
								return (
									<div
										className={cx(
											'd-flex',
											'align-items-center',
											'w-100',
											'mg-bottom-10px'
										)}
										key={index}
									>
										<Img src={comment.img} className={cx('img-sizing')} />
										<div className={cx('comment')}>{comment.content}</div>
										<span className={cx('hour')}>{comment.date}</span>
									</div>
								);
							})}
						</div>
					</Modal.Body>
					<Modal.Footer className={cx('d-flex', 'justify-content-between')}>
						<Button className={cx('btn-pill', 'create-btn')}>Submit</Button>
					</Modal.Footer>
				</Modal>
			) : (
				''
			)}
		</>
	);
};

export default TaskModal;
