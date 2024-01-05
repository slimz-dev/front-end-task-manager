import Img from '~/components/Img/Img';
import ProjectModal from '~/components/Modal/Project/projectModal';
import ModalProvider from '~/contexts/ModalProvider';
import Button from './components/Button';
function Projects() {
	return (
		<main className="content">
			<ModalProvider>
				<div className="container-fluid p-0">
					<Button />
					<h1 className="h3 mb-3">Tasks</h1>
					<div className="row">
						<div className="col-12 col-md-6 col-lg-3">
							<div className="card">
								<div className="card-header px-4 pt-4">
									<h5 className="card-title mb-0">Landing page redesign</h5>
									<div className="badge badge-success my-2">Finished</div>
								</div>
								<div className="card-body px-4 pt-2">
									<p>
										Etiam rhoncus. Maecenas tempus, tellus eget condimentum
										rhoncus, sem quam semper libero, sit amet adipiscing sem
										neque sed ipsum.
									</p>

									<Img
										src="img\avatars\avatar-3.jpg"
										className="rounded-circle mr-1"
										alt="Avatar"
										width="28"
										height="28"
									/>
									<Img
										src="img\avatars\avatar-2.jpg"
										className="rounded-circle mr-1"
										alt="Avatar"
										width="28"
										height="28"
									/>
									<Img
										src="img\avatars\avatar.jpg"
										className="rounded-circle mr-1"
										alt="Avatar"
										width="28"
										height="28"
									/>
								</div>
								<ul className="list-group list-group-flush">
									<li className="list-group-item px-4 pb-4">
										<p className="mb-2 font-weight-bold">
											Progress <span className="float-right">100%</span>
										</p>
										<div className="progress progress-sm">
											<div
												className="progress-bar"
												role="progressbar"
												aria-valuenow="100"
												aria-valuemin="0"
												aria-valuemax="100"
												style={{ width: '100%' }}
											></div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<ProjectModal />
			</ModalProvider>
		</main>
	);
}

export default Projects;
