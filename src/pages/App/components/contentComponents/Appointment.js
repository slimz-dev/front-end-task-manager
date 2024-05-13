import { useContext, useEffect, useState } from 'react';
import { NotificationContext } from '~/Layout/DefaultLayout/context/NotificationProvider';
import TimeAgo from 'react-timeago';
import viStrings from 'react-timeago/lib/language-strings/vi';
import en from 'react-timeago/lib/language-strings/en';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import { Link } from 'react-router-dom';
import config from '~/config';
import { UserContext } from '~/contexts/userProvider';
import { getMyCalendar } from '~/services/CalendarService/getMyCalendarService';

const formatter = buildFormatter(en);
function Appointment() {
	const [isMeeting, setIsMeeting] = useState(false);
	const user = useContext(UserContext);
	const notification = useContext(NotificationContext);
	const [thisNotification, setThisNotification] = useState(
		notification.data.length !== 0 ? notification.data.data.notification : []
	);
	useEffect(() => {
		if (notification.data.length !== 0) {
			const data = [...notification.data.data.notification];
			data.splice(4, data.length - 1);
			setThisNotification(data);
		}
		const fetchCalendar = async () => {
			const result = await getMyCalendar(user.info._id);
			result.data.calendar.forEach((data) => {
				const temp = new Date();
				const month =
					temp.getMonth() + 1 > 9 ? temp.getMonth() + 1 : `0${temp.getMonth() + 1}`;
				const currentDate = `${temp.getFullYear()}-${month}-${temp.getDate()}`;
				if (data.date) {
					if (Date.parse(new Date(currentDate)) === Date.parse(new Date(data.date))) {
						setIsMeeting(true);
					}
				} else {
					const thisDate = data.start.split('T')[0];
					if (Date.parse(new Date(currentDate)) === Date.parse(new Date(thisDate))) {
						setIsMeeting(true);
					}
				}
			});
		};
		if (user.info) {
			fetchCalendar();
		}
	}, [notification.data, user.info]);
	return (
		<div className="col-12 col-lg-6 col-xl-6 d-flex">
			<div className="card flex-fill w-100">
				<div className="card-header">
					<h5 className="card-title mb-0">Appointments</h5>
				</div>
				<div className="p-4 bg-light">
					{isMeeting ? (
						<h2>You have a meeting today!</h2>
					) : (
						<h2>You have no meeting today!</h2>
					)}
					<p className="mb-0 text-sm">
						{isMeeting ? 'Your next meeting will begin soon' : 'You free today'}. Check
						your <Link to={config.routes.Calendar}>schedule</Link> to see the details.
					</p>
				</div>
				<div className="card-body">
					<ul className="timeline">
						{thisNotification.length === 0
							? 'No new notifications'
							: thisNotification.map((noti, index) => {
									return (
										<li className="timeline-item" key={index}>
											<strong>{noti.departmentId.name}</strong>
											<span className="float-right text-muted text-sm">
												<TimeAgo
													date={noti.createdAt}
													formatter={formatter}
												/>
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
