//context

//component render
import { Modal, Button } from 'react-bootstrap';

//css
import styles from './PersonalTaskModal.module.scss';
import { ModalContext } from '~/contexts/ModalProvider';
import { useContext, useState } from 'react';
import useClass from '~/hooks/useClass';
import { TaskContext } from '~/pages/App/pages/Tasks/context/TaskProvider/TaskProvider';
import { newPersonalTask } from '~/services/PersonalTaskService/newPersonalTaskService';
import { UserContext } from '~/contexts/userProvider';
import { toast } from 'react-toastify';

function PersonalTaskModal() {
	const user = useContext(UserContext);
	const cx = useClass(styles);
	const modal = useContext(ModalContext);
	const task = useContext(TaskContext);
	const [data, setData] = useState({});
	function hideModal() {
		modal.setShow(false);
		setData({});
	}
	function handleChange(e) {
		setData((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
	}
	function handleSubmit() {
		if (data.description && data.name) {
			const postNewTask = async () => {
				const result = await newPersonalTask(user.info._id, {
					...data,
					state: task.taskState,
				});
				task.setData(result.data);
				setData({});
				toast('Task saved successfully');
			};
			postNewTask();
		} else {
			toast('All fields required');
		}
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
								Create Task
							</div>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body className={cx('d-flex', 'flex-column')}>
						<div className={cx('button-container')}>
							<div className={cx('d-flex', 'flex-column', 'relative')}>
								<label className={cx('input-label')}>Task Name</label>
								<input
									id="name"
									className={cx('input')}
									placeholder="Enter your task name"
									value={data.name ? data.name : ''}
									onChange={(e) => handleChange(e)}
								/>
							</div>
							<div className={cx('d-flex', 'flex-column', 'relative')}>
								<label className={cx('input-label')}>Description</label>
								<textarea
									id="description"
									value={data.description ? data.description : ''}
									className={cx('input')}
									rows="10"
									placeholder="Enter your description"
									onChange={(e) => handleChange(e)}
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
