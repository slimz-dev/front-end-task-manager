import { useState, useContext, useRef } from 'react';
import classNames from 'classnames/bind';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//context
import { ModalContext } from '~/contexts/ModalProvider';

//component render
import { Modal, Button } from 'react-bootstrap';

//css
import styles from './AddGroups.module.scss';
import DateSchedule from './components/DateSchedule/DateSchedule';

const cx = classNames.bind(styles);
const AddGroups = () => {
	const inputRef = useRef();
	const [isValue, setIsValue] = useState(false);
	const modal = useContext(ModalContext);
	const [name, setName] = useState('');

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
	function submitForm() {}
	return (
		<Modal show={modal.show} onHide={hideModal} size="lg" centered className={cx('effect')}>
			<Modal.Header>
				<Modal.Title>
					<strong>Adding group</strong>
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
						placeholder="Enter your group name"
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
						Group name
					</label>
				</div>
				<div className={cx('d-flex', 'flex-row', 'assign')}>
					<table
						id="datatables-clients"
						className={cx('table', 'bordered')}
						style={{ width: '100%' }}
					>
						<thead>
							<tr>
								<th className={cx('bordered')}>Permission</th>
								<th className={cx('w-80rem', 'bordered')}>Add</th>
								<th className={cx('bordered')}>View</th>
								<th className={cx('bordered')}>Delete</th>
								<th className={cx('bordered')}>Change</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className={cx('bordered')}>Admin Permissions</td>
								<td className={cx('bordered')}>
									<input type="checkbox" />
								</td>
								<td className={cx('bordered')}>
									<input type="checkbox" />
								</td>
								<td className={cx('bordered')}>
									<input type="checkbox" />
								</td>
								<td className={cx('bordered')}>
									<input type="checkbox" />
								</td>
							</tr>
							<tr>
								<td className={cx('bordered')}>Member Management (Team)</td>
								<td className={cx('bordered')}>
									<input type="checkbox" />
								</td>
								<td className={cx('bordered')}>
									<input type="checkbox" />
								</td>
								<td className={cx('bordered')}>
									<input type="checkbox" />
								</td>
								<td></td>
							</tr>
							<tr>
								<td className={cx('bordered')}>Member Management (Global)</td>
								<td className={cx('bordered')}>
									<input type="checkbox" />
								</td>
								<td className={cx('bordered')}></td>
								<td className={cx('bordered')}></td>
								<td></td>
							</tr>
							<tr>
								<td className={cx('bordered')}>Task Management (Team)</td>
								<td className={cx('bordered')}>
									<input type="checkbox" />
								</td>
								<td className={cx('bordered')}>
									<input type="checkbox" />
								</td>
								<td className={cx('bordered')}>
									<input type="checkbox" />
								</td>
								<td className={cx('bordered')}>
									<input type="checkbox" />
								</td>
							</tr>
							<tr>
								<td className={cx('bordered')}>Task Management (Global)</td>
								<td className={cx('bordered')}>
									<input type="checkbox" />
								</td>
								<td className={cx('bordered')}></td>
								<td className={cx('bordered')}></td>
								<td className={cx('bordered')}></td>
							</tr>
							<tr>
								<td className={cx('bordered')}>Invite Member</td>
								<td className={cx('bordered')}>
									<input type="checkbox" />
								</td>
								<td className={cx('bordered')}></td>
								<td className={cx('bordered')}></td>
								<td className={cx('bordered')}></td>
							</tr>
							<tr>
								<td className={cx('bordered')}>Total employees</td>
								<td className={cx('bordered')}></td>
								<td className={cx('bordered')}>
									<input type="checkbox" />
								</td>
								<td className={cx('bordered')}></td>
								<td className={cx('bordered')}></td>
							</tr>
						</tbody>
					</table>
				</div>
			</Modal.Body>
			<Modal.Footer className={cx('d-flex', 'justify-content-between')}>
				<Button onClick={hideModal} className={cx('btn-pill', 'cancel-btn')}>
					Cancel
				</Button>
				<Button onClick={submitForm} className={cx('btn-pill', 'create-btn')}>
					Create task
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default AddGroups;
