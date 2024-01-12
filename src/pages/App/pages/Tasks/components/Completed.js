import { useContext } from 'react';
import Img from '~/components/Img/Img';
import { ModalContext } from '~/contexts/ModalProvider';
import { UserContext } from '~/contexts/userProvider';
import useClass from '~/hooks/useClass';
import { TaskContext } from '../context/TaskProvider/TaskProvider';
import styles from '../Task.module.scss';

function Completed() {
	const user = useContext(UserContext);
	const modal = useContext(ModalContext);
	const cx = useClass(styles);
	const taskStorage = useContext(TaskContext);

	function handleAdd() {
		modal.setShow(true);
	}
	return (
		<div className="card">
			<div className="card-header">
				<h5 className={cx('card-title', 'card-label', 'completed')}>Completed</h5>
			</div>
			<div className="card-body p-3">
				<div>
					{taskStorage.data
						? taskStorage.data.task.map((element, id) => {
								return element.state === 'Completed' ? (
									<div
										id={element._id}
										key={id}
										className="card mb-3 bg-light cursor-grab border"
										draggable
										onDragStart={(e) => taskStorage.handleStart(e)}
									>
										<div className="card-body p-3">
											<div className="float-right mr-n2">
												<label className="custom-control custom-checkbox">
													<input
														type="checkbox"
														className="custom-control-input"
													/>
													<span className="custom-control-label text-hide">
														Checkbox
													</span>
												</label>
											</div>
											<p>{element.name}</p>
											<div className="float-right mt-n1">
												<Img
													src={user.info.img}
													width="32"
													height="32"
													className="rounded-circle"
													alt="Avatar"
												/>
											</div>
											<a
												className={cx(
													'completed',
													'btn btn-primary btn-sm'
												)}
												href="#a"
											>
												View
											</a>
										</div>
									</div>
								) : (
									''
								);
						  })
						: ''}
				</div>
				<a
					id="completed"
					href="#a"
					className={cx('completed', 'btn btn-primary btn-block')}
					onClick={(e) => taskStorage.handleOpenModal(e)}
				>
					Add new task
				</a>
			</div>
		</div>
	);
}

export default Completed;
