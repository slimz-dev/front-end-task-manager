import { useContext } from 'react';
import { TaskContext } from '../context/TaskProvider/TaskProvider';
import Completed from './Completed';
import InProgress from './InProgress';
import OnHold from './OnHold';
import Upcoming from './Upcoming';

function TaskContainer() {
	const task = useContext(TaskContext);
	return (
		<div className="row">
			<div
				className="col-12 col-lg-6 col-xl-3"
				ref={(element) => (task.stateRef.current[0] = element)}
				onDragOver={(e) => task.handleDragOver(e)}
				onDrop={(e) => task.handleDrop(e)}
			>
				<Upcoming />
			</div>
			<div
				className="col-12 col-lg-6 col-xl-3"
				ref={(element) => (task.stateRef.current[1] = element)}
				onDragOver={(e) => task.handleDragOver(e)}
				onDrop={(e) => task.handleDrop(e)}
			>
				<InProgress />
			</div>
			<div
				className="col-12 col-lg-6 col-xl-3"
				ref={(element) => (task.stateRef.current[2] = element)}
				onDragOver={(e) => task.handleDragOver(e)}
				onDrop={(e) => task.handleDrop(e)}
			>
				<OnHold />
			</div>
			<div
				className="col-12 col-lg-6 col-xl-3"
				ref={(element) => (task.stateRef.current[3] = element)}
				onDragOver={(e) => task.handleDragOver(e)}
				onDrop={(e) => task.handleDrop(e)}
			>
				<Completed />
			</div>
		</div>
	);
}

export default TaskContainer;
