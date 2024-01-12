import PersonalTaskModal from '~/components/Modal/PersonalTaskModal/PersonalTaskModal';
import ModalProvider from '~/contexts/ModalProvider';
import TaskContainer from './components/TaskContainer';
import TaskProvider from './context/TaskProvider/TaskProvider';

function Tasks() {
	return (
		<main className="content">
			<div className="container-fluid p-0">
				<h1 className="h3 mb-3">Tasks</h1>
				<ModalProvider>
					<TaskProvider>
						<TaskContainer />
						<PersonalTaskModal />
					</TaskProvider>
				</ModalProvider>
			</div>
		</main>
	);
}

export default Tasks;
