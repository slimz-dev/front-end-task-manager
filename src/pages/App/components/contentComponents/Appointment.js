import { useContext, useEffect, useState } from 'react';
import { NotificationContext } from '~/Layout/DefaultLayout/context/NotificationProvider';
import TimeAgo from 'react-timeago';
import viStrings from 'react-timeago/lib/language-strings/vi';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import { Link } from 'react-router-dom';
import config from '~/config';

const formatter = buildFormatter(viStrings);
function Appointment() {
	const notification = useContext(NotificationContext);
	const [thisNotification, setThisNotification] = useState(
		notification.data.length !== 0 ? notification.data.data.notification : []
	);
	thisNotification.splice(4, 1);
	useEffect(() => {
		if (notification.data.length !== 0) {
			setThisNotification(notification.data.data.notification);
		}
	}, [notification.data]);
	return (
		<div className="col-12 col-lg-6 col-xl-6 d-flex">
			<div className="card flex-fill w-100">
				<div className="card-header">
					<h5 className="card-title mb-0">Appointments</h5>
				</div>
				<div className="p-4 bg-light">
					<h2>You have a meeting today!</h2>
					<p className="mb-0 text-sm">
						Your next meeting is in 2 hours. Check your{' '}
						<Link to={config.routes.Calendar}>schedule</Link> to see the details.
					</p>
				</div>
				<div className="card-body">
					<ul className="timeline">
						{thisNotification.map((noti, index) => {
							return (
								<li className="timeline-item" key={index}>
									<strong>{noti.departmentId.name}</strong>
									<span className="float-right text-muted text-sm">
										<TimeAgo date={noti.createdAt} formatter={formatter} />
									</span>
									<p>You have a new comment</p>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Appointment;
