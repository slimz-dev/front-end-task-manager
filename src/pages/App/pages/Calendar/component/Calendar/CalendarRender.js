import { useContext, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import classNames from 'classnames/bind';
import styles from '../../Calendar.module.scss';
import { ModalContext } from '~/contexts/ModalProvider';
import CalendarProvider, { CalendarContext } from '../../context/CalendarProvider/CalendarProvider';
import swal from '@sweetalert/with-react';
import { deleteCalender } from '~/services/CalendarService/deleteMyCalendarService';
import { UserContext } from '~/contexts/userProvider';

const cx = classNames.bind(styles);

function CalendarRender() {
	const calendarRef = useRef();
	const user = useContext(UserContext);
	const calendar = useContext(CalendarContext);
	const modal = useContext(ModalContext);
	function handleClick(e) {
		let month;
		let day;
		if (e.date.getMonth() < 9) {
			month = `0${e.date.getMonth() + 1}`;
		} else {
			month = e.date.getMonth() + 1;
		}
		if (e.date.getDate() < 10) {
			day = `0${e.date.getDate()}`;
		} else {
			day = e.date.getDate();
		}
		const date = `${e.date.getFullYear()}-${month}-${day}`;
		modal.setShow(() => {
			calendar.setDate(date);
			return true;
		});
	}
	function handleDeleteEvent(id) {
		swal({
			title: 'Are you sure?',
			text: 'You will permanently delete this appointment !',
			icon: 'warning',
			buttons: ['Cancel', 'Yes, delete it !'],
			dangerMode: true,
		}).then((isDelete) => {
			if (isDelete) {
				const deleteMyCalendar = async () => {
					const result = await deleteCalender(user.info._id, id);
					calendar.setData(result.data.calendar);
				};
				deleteMyCalendar();
			}
		});
	}
	return (
		<>
			<FullCalendar
				// selectable
				// editable
				// eventStartEditable
				aspectRatio={2}
				ref={calendarRef}
				droppable={true}
				timeZone="Asia/Ho_Chi_Minh"
				titleFormat={{ month: 'long', year: 'numeric', day: 'numeric', weekday: 'long' }}
				plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
				initialView="dayGridMonth"
				headerToolbar={{
					center: 'title',
					left: 'dayGridMonth,timeGridWeek,timeGridDay',
				}}
				events={calendar.data}
				eventColor="#5b7dff"
				dateClick={(e) => handleClick(e)}
				eventClick={(e) => {
					const eventDate = e.el.fcSeg;
					const id = eventDate.eventRange.def.extendedProps;
					handleDeleteEvent(id);
				}}
				height="90%"
			></FullCalendar>
		</>
	);
}

export default CalendarRender;
