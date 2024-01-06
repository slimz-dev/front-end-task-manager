import Img from '~/components/Img/Img';
import ProjectModal from '~/components/Modal/Project/projectModal';
import ModalProvider from '~/contexts/ModalProvider';
import AssignButton from './components/Button';
import BackButton from './components/Button_1';
import styles from '../../Project.module.scss';
import useClass from '~/hooks/useClass';
import { useContext } from 'react';
import { DepartmentContext } from '../../contexts/DepartmentProvider/DepartmentProvider';
function Projects() {
	const cx = useClass(styles);
	const departmentTasks = useContext(DepartmentContext);
	function handleCheckProgress(e) {
		console.log(e);
		return '100%';
	}
	return (
		<main className="content">
			<ModalProvider>
				<div className="container-fluid p-0">
					<BackButton />
					<AssignButton />
					<div className={cx('row', 'mt-50')}>
						{departmentTasks.thisDepartment.map((task, index) => {
							console.log(task.state);
							return (
								<div className="col-12 col-md-6 col-lg-3">
									<div className="card" key={index}>
										<div className="card-header px-4 pt-4">
											<h5 className="card-title mb-0">
												Landing page redesign
											</h5>
											<div
												className={cx('badge my-2', {
													'badge-success': task.state,
													'badge-warning': !task.state,
												})}
											>
												{task.state ? 'Finished' : 'Working'}
											</div>
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
													Progress{' '}
													<span className="float-right">
														{(e) => handleCheckProgress(e)}
													</span>
												</p>
												<div className="progress progress-sm">
													<div
														className="progress-bar"
														role="progressbar"
														aria-valuenow="100"
														aria-valuemin="0"
														aria-valuemax="100"
														style={{ width: '0%' }}
													></div>
												</div>
											</li>
										</ul>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<ProjectModal />
			</ModalProvider>
		</main>
	);
}

export default Projects;
