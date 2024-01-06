import ProjectModal from '~/components/Modal/Project/projectModal';
import ModalProvider from '~/contexts/ModalProvider';
import AssignButton from './components/Button';
import BackButton from './components/Button_1';
import styles from '../../Project.module.scss';
import useClass from '~/hooks/useClass';

import TaskModal from '~/components/Modal/TaskModal/TaskModal';
import TaskModalProvider from '~/components/Modal/TaskModal/context/TaskModalProvider';
import TaskRender from './components/TaskRender';
function Projects() {
	const cx = useClass(styles);
	return (
		<main className="content">
			<ModalProvider>
				<TaskModalProvider>
					<div className="container-fluid p-0">
						<BackButton />
						<AssignButton />
						<div className={cx('row', 'mt-50')}>
							<TaskRender />
						</div>
					</div>
					<TaskModal />
				</TaskModalProvider>
				<ProjectModal />
			</ModalProvider>
		</main>
	);
}

export default Projects;
