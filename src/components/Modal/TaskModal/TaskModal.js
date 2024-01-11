import { useState, useContext, useEffect } from 'react';
import classNames from 'classnames/bind';

import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

//context
import { TaskModalContext } from './context/TaskModalProvider';

//component render
import { Modal, Button } from 'react-bootstrap';

//css
import styles from './projectModal.module.scss';

import { changeJob } from '~/services/ProjectService/changeJobService';

import JobsRender from './components/JobsRender/JobsRender';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CommentsRender from './components/CommentsRender/CommentsRender';

const cx = classNames.bind(styles);
const TaskModal = () => {
	const modal = useContext(TaskModalContext);
	const [initDate, setInitDate] = useState('');
	const [expiredDate, setExpiredDate] = useState('');
	const [job, setJob] = useState(false);
	const [comment, setComment] = useState(false);
	const [jobTitle, setJobTitle] = useState('');
	const [commentContent, setCommentContent] = useState('');
	const [isOnTime, setIsOnTime] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
		const currentDate = new Date();
		if (modal.taskInfo.length !== 0) {
			setInitDate(new Date(modal.taskInfo.initDate).toDateString());

			setExpiredDate(new Date(modal.taskInfo.expiredDate).toDateString());
			if (currentDate > new Date(modal.taskInfo.expiredDate)) {
				setIsOnTime(false);
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

	async function handleAddComment() {
		if (commentContent) {
			setCommentContent('');
			await modal.addComment(commentContent);
		}
	}

	function handleSetJobTitle(e) {
		const title = e.target.value;
		setJobTitle(title);
	}
	function handleSetComment(e) {
		const commentValue = e.target.value;
		setCommentContent(commentValue);
	}
	function handleSubmit() {
		const postJob = async () => {
			const result = await changeJob(modal.taskInfo._id, data, modal.taskInfo.department);
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
											'badge-danger': !isOnTime,
										})}
									>
										{modal.taskInfo.state
											? ''
											: isOnTime
											? 'Available'
											: 'Overdue'}
									</span>
								</div>
								<div className={cx('d-flex', 'flex-column')}>
									<div>
										<span className={cx('task-date')}>Start date:</span>
										<span
											className={cx('task-date-value')}
											style={{ color: '#495057' }}
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
						<JobsRender setData={setData} />
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
										value={commentContent}
										onChange={handleSetComment}
									/>
									<div className={cx('action-handler-container')}>
										<span
											className={cx('button-add')}
											onClick={handleAddComment}
										>
											<FontAwesomeIcon icon={faCheck} />
										</span>
										<span
											className={cx('button-close')}
											onClick={() => setComment(false)}
										>
											<FontAwesomeIcon icon={faXmark} />
										</span>
									</div>
								</div>
							) : (
								<div
									className={cx('notification')}
									onClick={() => setComment(true)}
								>
									+ Add comment
								</div>
							)}
						</div>
						<div className={cx('d-flex', 'flex-row', 'assign')}>Comment</div>
						<CommentsRender />
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
