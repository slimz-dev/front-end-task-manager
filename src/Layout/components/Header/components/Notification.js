import { useContext, useEffect, useState } from 'react';
import { UserContext } from '~/contexts/userProvider';
import useClass from '~/hooks/useClass';
import { getNotification } from '~/services/NotificationService/getNotification';
import { pushNotification } from '~/services/NotificationService/pushNotification';
import { socket } from '~/socket';
import styles from '../Header.module.scss';
import TimeAgo from 'react-timeago';
import viStrings from 'react-timeago/lib/language-strings/vi';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

const formatter = buildFormatter(viStrings);
function Notification() {
	const user = useContext(UserContext);
	const [data, setData] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const cx = useClass(styles);

	useEffect(() => {
		const fetchNotification = async () => {
			const result = await getNotification(user.info._id);
			setData(result);
		};
		if (user.info._id) {
			fetchNotification();
		}
		socket.once('notification', () => {
			const reRenderNotify = async () => {
				const result = await getNotification(user.info._id);
				setData(result);
			};
			reRenderNotify();
		});
		return () => {
			socket.off('notification');
		};
	}, [user.info]);
	function handleOpen() {
		setIsOpen(!isOpen);
	}
	return (
		<>
			{data.length !== 0 ? (
				<div>
					<div
						className="nav-icon dropdown-toggle cursor-pointer"
						onClick={handleOpen}
						id="alertsDropdown"
						data-toggle="dropdown"
					>
						{data.num ? (
							<span className={cx('bell-num', 'fc-unselectable')}>{data.num}</span>
						) : (
							''
						)}
						<div className="position-relative">
							<i className="align-middle" data-feather="bell-on"></i>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="16"
								width="14"
								viewBox="0 0 448 512"
								fill="currentColor"
							>
								<path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
							</svg>
						</div>
					</div>
					<div
						className={cx(
							'dropdown-menu dropdown-menu-lg dropdown-menu-right py-0',
							'scroll',
							{
								show: isOpen,
							}
						)}
						aria-labelledby="alertsDropdown"
					>
						<div className="dropdown-menu-header fc-unselectable">
							{data.num} New Notifications
						</div>
						{data.data.notification.map((noti, index) => {
							return (
								<div className="list-group" key={index}>
									<div
										href="#"
										className="list-group-item fc-unselectable cursor-pointer"
									>
										<div className="row no-gutters align-items-center">
											<div className="col-2">
												<i
													className="text-danger"
													data-feather="alert-circle"
												></i>
											</div>
											<div className="col-10">
												{/* <h4 className="text-dark">Phòng kế toán</h4> */}
												<div className="text-muted  mt-1">
													You have a new comment on
													<span className={cx('f-700')}>
														{' '}
														"{noti.taskId.name}" project
													</span>
												</div>
												<div className="text-muted small mt-1">
													<TimeAgo
														date={noti.createdAt}
														formatter={formatter}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}

						<div className="dropdown-menu-footer"></div>
					</div>
				</div>
			) : (
				''
			)}
		</>
	);
}

export default Notification;
