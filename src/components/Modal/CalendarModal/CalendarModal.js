//context

//component render
import { Modal, Button } from 'react-bootstrap';

//css
import styles from './CalendarModal.module.scss';
import { ModalContext } from '~/contexts/ModalProvider';
import { useContext, useRef, useState } from 'react';
import useClass from '~/hooks/useClass';
import Hour from './components/Hour/Hour';
import Minutes from './components/Minutes/Minutes';
import { CalendarContext } from '~/pages/App/pages/Calendar/context/CalendarProvider/CalendarProvider';
import { newCalendar } from '~/services/CalendarService/newCalendarService';
import { UserContext } from '~/contexts/userProvider';

function CalendarModal() {
	const user = useContext(UserContext);
	const startHourRef = useRef();
	const endHourRef = useRef();
	const startMinutesRef = useRef();
	const endMinutesRef = useRef();
	const cx = useClass(styles);
	const modal = useContext(ModalContext);
	const calendar = useContext(CalendarContext);
	const [data, setData] = useState({});
	function hideModal() {
		calendar.setTitle('');
		modal.setShow(false);
		setData({});
	}
	function handleChange(e) {
		calendar.setTitle(e.target.value);
	}
	function handleSubmit() {
		if (calendar.isAllDay && calendar.title) {
			const appointmentData = {
				title: calendar.title,
				date: calendar.date,
			};
			const postNewCalendar = async () => {
				const result = await newCalendar(user.info._id, appointmentData);
				calendar.setData(result.data.calendar);
			};
			postNewCalendar();
		} else {
			if (calendar.title) {
				const startTime = `${startHourRef.current.value}:${startMinutesRef.current.value}:00`;
				const endTime = `${endHourRef.current.value}:${endMinutesRef.current.value}:00`;
				const appointmentData = {
					title: calendar.title,
					start: `${calendar.date}T${startTime}`,
					end: `${calendar.date}T${endTime}`,
				};
				const postNewCalendar = async () => {
					const result = await newCalendar(user.info._id, appointmentData);
					calendar.setData(result.data.calendar);
				};
				postNewCalendar();
			}
		}
	}
	function handleAllDay() {
		calendar.setIsAllDay(!calendar.isAllDay);
	}
	return (
		<>
			{modal.show ? (
				<Modal
					show={modal.show}
					onHide={hideModal}
					size="small"
					centered
					className={cx('effect')}
				>
					<Modal.Header>
						<Modal.Title className={cx('title')}>
							<div className={cx('d-flex', 'flex-row', 'task-title')}>
								{calendar.date}
							</div>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body className={cx('d-flex', 'flex-column')}>
						<div className={cx('button-container')}>
							<div className={cx('d-flex', 'flex-column', 'relative')}>
								<label className={cx('input-label')}>Title</label>
								<input
									id="name"
									className={cx('input')}
									placeholder="Enter your title name"
									value={calendar.title}
									onChange={(e) => handleChange(e)}
								/>
							</div>
							<div className={cx('d-flex', 'flex-column')}>
								<div className={cx('all-day', 'd-flex', 'align-items-center')}>
									<label className={cx('label')}>All Day</label>
									<input
										type="checkbox"
										defaultChecked={calendar.isAllDay}
										onChange={handleAllDay}
									/>
								</div>
								{calendar.isAllDay ? (
									''
								) : (
									<div className={cx('date-container')}>
										<div className={cx('d-flex', 'flex-column')}>
											<div
												className={cx(
													'd-flex',
													'justify-content-between',
													'align-items-center'
												)}
											>
												<span className={cx('date-label', 'label-start')}>
													Start time
												</span>
												<div className={cx('d-flex', 'align-items-center')}>
													<label className={cx('label')}>Hour</label>
													<select
														className={cx('select')}
														ref={startHourRef}
													>
														<Hour />
													</select>
												</div>

												<div className={cx('d-flex', 'align-items-center')}>
													<label className={cx('label')}>Minutes</label>
													<select
														className={cx('select')}
														ref={startMinutesRef}
													>
														<Minutes />
													</select>
												</div>
											</div>
										</div>
										<div className={cx('d-flex', 'flex-column')}>
											<div
												className={cx(
													'd-flex',
													'justify-content-between',
													'align-items-center'
												)}
											>
												<span className={cx('date-label', 'label-end')}>
													End time
												</span>
												<div className={cx('d-flex', 'align-items-center')}>
													<label className={cx('label')}>Hour</label>
													<select
														className={cx('select')}
														ref={endHourRef}
													>
														<Hour />
													</select>
												</div>
												<div className={cx('d-flex', 'align-items-center')}>
													<label className={cx('label')}>Minutes</label>
													<select
														className={cx('select')}
														ref={endMinutesRef}
													>
														<Minutes />
													</select>
												</div>
											</div>
										</div>
									</div>
								)}
							</div>
						</div>
					</Modal.Body>
					<Modal.Footer className={cx('d-flex', 'justify-content-between')}>
						<Button className={cx('btn-pill', 'create-btn')} onClick={handleSubmit}>
							Submit
						</Button>
					</Modal.Footer>
				</Modal>
			) : (
				''
			)}
		</>
	);
}

export default CalendarModal;
