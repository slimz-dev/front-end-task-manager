import { useState, useContext, useRef } from 'react';
import classNames from 'classnames/bind';

//context
import { ModalContext } from '~/contexts/ModalProvider';

//component render
import { Modal, Button } from 'react-bootstrap';

//css
import styles from './projectModal.module.scss';
import DateSchedule from './components/DateSchedule/DateSchedule';
import UserAssign from './components/UserAssign/UserAssign';
import UserProvider from './components/UserAssign/context/UserProvider';
import TaskAssignProvider from './context/TaskAssignProvider';
import FooterButton from './components/FooterButton/FooterButton';

const cx = classNames.bind(styles);
const ProjectModal = () => {
	const inputRef = useRef();
	const [isValue, setIsValue] = useState(false);
	const modal = useContext(ModalContext);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');

	function handleChange(e) {
		const taskName = e.target.value;
		setName(taskName);
	}
	function hideModal() {
		modal.setShow(false);
	}

	function handleClick() {
		inputRef.current.focus();
	}
	function handleCheckBlur(e) {
		if (e.target.value) {
			setIsValue(true);
		} else {
			setIsValue(false);
		}
	}

	const data = {
		name,
		description,
	};
	return (
		<Modal show={modal.show} onHide={hideModal} size="lg" centered className={cx('effect')}>
			<TaskAssignProvider data={data}>
				<Modal.Header>
					<Modal.Title>
						<strong>Quick add task</strong>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className={cx('d-flex', 'flex-column')}>
					<div className={cx('task-name')}>
						<input
							onBlur={(e) => handleCheckBlur(e)}
							ref={inputRef}
							id="task"
							name="task"
							className={cx('input-task')}
							placeholder="Enter your task name"
							value={name}
							onChange={(e) => handleChange(e)}
						></input>
						<label
							onClick={handleClick}
							htmlFor="task"
							className={cx('task-label', {
								blur: isValue,
							})}
						>
							Task name
						</label>
					</div>
					<div className={cx('d-flex', 'flex-row', 'assign')}>
						<UserProvider>
							<UserAssign />
						</UserProvider>
						<DateSchedule />
					</div>
					<textarea
						className={cx('description')}
						placeholder="Enter your description about this task"
						rows="8"
						cols="50"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					></textarea>
				</Modal.Body>
				<Modal.Footer className={cx('d-flex', 'justify-content-between')}>
					<FooterButton />
				</Modal.Footer>
			</TaskAssignProvider>
		</Modal>
	);
};

export default ProjectModal;
