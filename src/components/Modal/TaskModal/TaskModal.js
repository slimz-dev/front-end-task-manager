import { useState, useContext, useRef, useEffect } from 'react';
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
import { changeJob } from '~/services/ProjectService/changeJobService';
import { deleteJob } from '~/services/ProjectService/deleteJobService';

const cx = classNames.bind(styles);
const TaskModal = () => {
	const modal = useContext(TaskModalContext);
	const [job, setJob] = useState(false);
	const [jobTitle, setJobTitle] = useState('');
	const [comment, setComment] = useState(false);
	const [initDate, setInitDate] = useState('');
	const [expiredDate, setExpiredDate] = useState('');
	const [state, setState] = useState(true);
	const [data, setData] = useState([]);
	const currentDate = new Date();
	useEffect(() => {
		if (modal.taskInfo.length !== 0) {
			setInitDate(new Date(modal.taskInfo.initDate).toDateString());

			setExpiredDate(new Date(modal.taskInfo.expiredDate).toDateString());
			if (currentDate < new Date(modal.taskInfo.expiredDate)) {
				setState(false);
			}
		}
		setData(modal.taskInfo.smallJob);
	}, [modal.taskInfo]);

	function hideModal() {
		modal.setShow(false);
	}
	async function handleAddJob() {
		await modal.addJob(jobTitle);
		setJob(false);
		setJobTitle('');
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
	function handleCheckJob(e) {
		const checked = e.target.checked;
		const id = e.target.id;
		let thisIndex;
		let thisJob = modal.taskInfo.smallJob.find((job, index) => {
			if (job._id === id) {
				thisIndex = index;
			}
			return job._id === id;
		});

		thisJob = {
			...thisJob,
			state: checked,
		};
		setData((prev) => {
			const copyJobs = prev;
			copyJobs.splice(thisIndex, 1, thisJob);
			return copyJobs;
		});
	}

	async function handleDeleteJob(e) {
		let thisElement = e.target;
		while (!thisElement.id) {
			thisElement = thisElement.parentNode;
		}
		await deleteJob(thisElement.id, modal.taskInfo._id, modal.taskInfo.department);
	}
	function handleSubmit() {
		const postJob = async () => {
			const result = await changeJob(modal.taskInfo._id, data, modal.taskInfo.department);
			console.log(result);
		};
		postJob();
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
						<Modal.Title className={cx('title')}>
							<div className={cx('d-flex', 'flex-row', 'task-title')}>
								<div
									className={cx(
										'd-flex',
										'flex-column',
										'justify-content-between'
									)}
								>
									<strong>{modal.taskInfo.name}</strong>
									<span
										className={cx('badge', 'my-badge', 'badge-success', {
											'badge-danger': !state,
										})}
									>
										{state ? 'Available' : 'Overdue'}
									</span>
								</div>
								<div className={cx('d-flex', 'flex-column')}>
									<div>
										<span className={cx('task-date')}>Start date:</span>
										<span
											className={cx('task-date-value')}
											style={{ color: '#edc954' }}
										>
											{initDate}
										</span>
									</div>
									<div>
										<span className={cx('task-date')}>Expired date:</span>
										<span
											className={cx('task-date-value')}
											style={{ color: '#c96b6b' }}
										>
											{expiredDate}
										</span>
									</div>
								</div>
							</div>
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
										<label htmlFor={job._id} className={cx('job-label')}>
											{job.title}
										</label>
										<div
											className={cx('d-flex', 'align-items-center', 'hover')}
										>
											<input
												id={job._id}
												type="checkbox"
												defaultChecked={job.state}
												onChange={(e) => handleCheckJob(e)}
												className={cx('job-checkbox')}
											/>
											<span id={job._id} onClick={(e) => handleDeleteJob(e)}>
												<FontAwesomeIcon icon={faXmark} />
											</span>
										</div>
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
};

export default TaskModal;
