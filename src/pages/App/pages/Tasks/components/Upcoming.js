import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useRef, useState } from 'react';
import Img from '~/components/Img/Img';
import { UserContext } from '~/contexts/userProvider';
import useClass from '~/hooks/useClass';
import { TaskContext } from '../context/TaskProvider/TaskProvider';
import styles from '../Task.module.scss';

function Upcoming() {
	const cx = useClass(styles);
	const user = useContext(UserContext);
	const taskStorage = useContext(TaskContext);
	const [isDescription, setIsDescription] = useState({
		isDescription: false,
		task: '',
	});

	function handleViewDescription(e) {
		setIsDescription({
			isDescription: !isDescription.isDescription,
			task: e.target.id,
		});
	}
	return (
		<div className="card">
			<div className="card-header">
				<h5 className={cx('card-title', 'card-label', 'upcoming')}>Upcoming</h5>
			</div>
			<div className="card-body p-3">
				<div>
					{taskStorage.data
						? taskStorage.data.task.map((element, id) => {
								return element.state === 'UpComing' ? (
									<div
										id={element._id}
										key={id}
										className="card mb-3 bg-light cursor-grab border"
										draggable
										onDragStart={taskStorage.handleStart}
									>
										<div className="card-body p-3">
											<div className="float-right mr-n2">
												<label className="custom-control ">
													<span
														className={cx('trash')}
														onClick={(e) => taskStorage.handleDelete(e)}
													>
														<FontAwesomeIcon icon={faTrash} />
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
											<div
												id={element._id}
												className={cx('upcoming', 'btn btn-primary btn-sm')}
												onClick={(e) => handleViewDescription(e)}
											>
												{isDescription.isDescription &&
												isDescription.task === element._id
													? element.description
													: 'View'}
											</div>
										</div>
									</div>
								) : (
									''
								);
						  })
						: ''}
				</div>
				<a
					id="UpComing"
					href="#a"
					className={cx('upcoming', 'btn btn-primary btn-block')}
					onClick={(e) => taskStorage.handleOpenModal(e)}
				>
					Add new task
				</a>
			</div>
		</div>
	);
}

export default Upcoming;
