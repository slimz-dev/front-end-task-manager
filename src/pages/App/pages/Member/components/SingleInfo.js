import { useContext } from 'react';
import Img from '~/components/Img/Img';
import { TotalUsers } from '../context/TotalUsersProvider';

function SingleInfo() {
	const totalUsers = useContext(TotalUsers);
	const thisUser = totalUsers.singleUser;
	return (
		<div className="card">
			<div className="card-header">
				<div className="card-actions float-right">
					<div className="dropdown show">
						<a href="#" data-toggle="dropdown" data-display="static">
							<i className="align-middle" data-feather="more-horizontal"></i>
						</a>

						<div className="dropdown-menu dropdown-menu-right">
							<a className="dropdown-item" href="#">
								Action
							</a>
							<a className="dropdown-item" href="#">
								Another action
							</a>
							<a className="dropdown-item" href="#">
								Something else here
							</a>
						</div>
					</div>
				</div>
				<h5 className="card-title mb-0">{`${thisUser.firstName} ${
					thisUser.lastName ? thisUser.lastName : ''
				}`}</h5>
			</div>
			<div className="card-body">
				<div className="row no-gutters">
					<div className="col-sm-3 col-xl-12 col-xxl-3 text-center">
						<Img
							src={thisUser.img ? thisUser.img : ''}
							width="64"
							height="64"
							className="rounded-circle mt-2"
							alt="Angelica Ramos"
						/>
					</div>
					<div className="col-sm-9 col-xl-12 col-xxl-9">
						<strong>About me</strong>
						<p>{thisUser.biography ? thisUser.biography : '....'}</p>
					</div>
				</div>

				<table className="table table-sm my-2">
					<tbody>
						<tr>
							<th>Name</th>
							<td>{`${thisUser.firstName} ${
								thisUser.lastName ? thisUser.lastName : ''
							}`}</td>
						</tr>
						<tr>
							<th>Role</th>
							<td>Senior</td>
						</tr>
						<tr>
							<th>Email</th>
							<td>{thisUser.email}</td>
						</tr>
						<tr>
							<th>Phone</th>
							<td>{thisUser.phone ? thisUser.phone : '....'}</td>
						</tr>
						<tr>
							<th>Status</th>
							<td>
								<span className="badge badge-success">Active</span>
							</td>
						</tr>
					</tbody>
				</table>

				<hr />

				{/* <strong>Activity</strong>

				<ul className="timeline mt-2 mb-0">
					<li className="timeline-item">
						<strong>Signed out</strong>
						<span className="float-right text-muted text-sm">30m ago</span>
						<p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit...</p>
					</li>
					<li className="timeline-item">
						<strong>Created invoice #1204</strong>
						<span className="float-right text-muted text-sm">2h ago</span>
						<p>Sed aliquam ultrices mauris. Integer ante arcu...</p>
					</li>
					<li className="timeline-item">
						<strong>Discarded invoice #1147</strong>
						<span className="float-right text-muted text-sm">3h ago</span>
						<p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit...</p>
					</li>
					<li className="timeline-item">
						<strong>Signed in</strong>
						<span className="float-right text-muted text-sm">3h ago</span>
						<p>Curabitur ligula sapien, tincidunt non, euismod vitae...</p>
					</li>
					<li className="timeline-item">
						<strong>Signed up</strong>
						<span className="float-right text-muted text-sm">2d ago</span>
						<p>Sed aliquam ultrices mauris. Integer ante arcu...</p>
					</li>
				</ul> */}
			</div>
		</div>
	);
}

export default SingleInfo;
