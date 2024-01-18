import ProgressCheck from './ProgressCheck';
import ProgressBar from './Progressbar';
import { useContext } from 'react';
import styles from '../../../Project.module.scss';

import useClass from '~/hooks/useClass';
import { TaskModalContext } from '~/components/Modal/TaskModal/context/TaskModalProvider';
import Img from '~/components/Img/Img';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteTask } from '~/services/ProjectService/deleteTaskService';
import { DepartmentContext } from '../../../contexts/DepartmentProvider/DepartmentProvider';
import { UserContext } from '~/contexts/userProvider';
import toastDenied from '~/toastDenied/toast';
import { toast } from 'react-toastify';

function TaskRender() {
	const user = useContext(UserContext);
	const departmentTasks = useContext(DepartmentContext);
	const modal = useContext(TaskModalContext);
	const cx = useClass(styles);
	function isOnTime(task) {
		if (task.state) {
			const expiredDate = new Date(task.expiredDate);
			const completeDate = new Date(task.completedDate);
			if (expiredDate > completeDate) {
				return true;
			} else {
				return false;
			}
		}
	}
	function handleDeleteTask(e) {
		e.stopPropagation();
		if (user.info.role.localTaskManager.delete) {
			let thisElement = e.target;
			while (!thisElement.id) {
				thisElement = thisElement.parentNode;
			}
			const taskId = thisElement.id;
			const deleteThisTask = async () => {
				const result = await deleteTask(taskId, departmentTasks.departmentId);
				toast.success('Successfully deleted !!!', {
					position: 'top-center',
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'dark',
				});
			};
			deleteThisTask();
		} else {
			toastDenied();
		}
	}
	return (
		<>
			{departmentTasks.thisDepartment.map((task, index) => {
				return (
					<div className={cx('col-12 col-md-6 col-lg-3')} key={index}>
						<div
							id={task._id}
							className={cx('card', 'pointer')}
							onClick={(e) => modal.handleChooseTask(e)}
						>
							<div className="card-header px-4 pt-4">
								<h5 className="card-title mb-0">{task.name}</h5>
								<div
									className={cx('badge my-2', 'badge-success', {
										'badge-warning': !task.state,
										'badge-danger': !isOnTime(task) && task.state,
									})}
								>
									{!task.state
										? 'Working'
										: isOnTime(task)
										? 'Finished'
										: 'Delayed'}
								</div>
								<span
									id={task._id}
									className={cx('trash')}
									onClick={(e) => handleDeleteTask(e)}
								>
									<FontAwesomeIcon icon={faTrash} />
								</span>
							</div>
							<div className="card-body px-4 pt-2">
								<p>{task.description}</p>
								{task.assignee.map((assignee, index) => {
									return (
										<Img
											src={assignee.img ? assignee.img : ''}
											className="rounded-circle mr-1"
											alt="Avatar"
											width="28"
											height="28"
											key={index}
										/>
									);
								})}
							</div>

							<ul className="list-group list-group-flush">
								<li className="list-group-item px-4 pb-4">
									<p className="mb-2 font-weight-bold">
										<span className={cx('float-right', 'ml-10')}>
											<ProgressCheck data={task.smallJob} />
										</span>
									</p>
									<div className="progress progress-sm">
										<ProgressBar data={task.smallJob} />
									</div>
								</li>
							</ul>
						</div>
					</div>
				);
			})}
		</>
	);
}

export default TaskRender;
