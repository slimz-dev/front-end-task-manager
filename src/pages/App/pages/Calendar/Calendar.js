import { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import classNames from 'classnames/bind';
import styles from './Calendar.module.scss';

const cx = classNames.bind(styles);

function Calendar() {
	const calendarRef = useRef();
	function handleClick(e) {
		console.log(calendarRef.current);
		console.log(e);
	}
	return (
		<FullCalendar
			className={cx('fc-bg-event')}
			selectable
			editable
			eventStartEditable
			ref={calendarRef}
			plugins={[dayGridPlugin, interactionPlugin]}
			initialView="dayGridMonth"
			events={[
				{ title: 'event 1', date: '2023-12-01', allDay: 'false' },
				{ title: 'event 2', date: '2023-12-02' },
			]}
			eventColor="#378006"
			dateClick={(e) => handleClick(e)}
			eventClick={(e) => {
				console.log(e);
			}}
		></FullCalendar>
	);
}

export default Calendar;
