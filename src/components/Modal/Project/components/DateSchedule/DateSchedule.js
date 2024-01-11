import { useState, useRef, useContext } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

//css
import styles from './DateScheldule.module.scss';

//compoenent render
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { TaskAssignContext } from '../../context/TaskAssignProvider';

const cx = classNames.bind(styles);
function DateSchedule() {
	const inputRef = useRef([]);
	const task = useContext(TaskAssignContext);
	const [isStart, setIsStart] = useState(true);
	const [isEnd, setIsEnd] = useState(true);
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	function handleClick(e) {
		const label = e.target.htmlFor;
		inputRef.current.forEach((input) => {
			if (input.id === label) {
				input.focus();
			}
		});
	}
	function handleSetBegin(date, e) {
		setStartDate(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
		task.setMinDate(date);
		setIsStart(true);
	}

	function handleSetEnd(date, e) {
		setEndDate(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
		setIsEnd(true);
		task.setMaxDate(date);
	}

	function handleOpenStart() {
		setIsStart(false);
	}

	function handleOpenEnd() {
		setIsEnd(false);
	}

	return (
		<div className={cx('date-wrapper')}>
			<div className={cx('start-container')} onFocus={handleOpenStart}>
				<input
					ref={(value) => (inputRef.current[0] = value)}
					id="start-date"
					name="startDate"
					className={cx('margin-right', 'date-task')}
					defaultValue={startDate}
				></input>
				{startDate ? (
					''
				) : (
					<label className={cx('date-label')} htmlFor="start-date" onClick={handleClick}>
						<FontAwesomeIcon icon={faCalendar} />
						<span className={cx('date-label-content')}>Start date</span>
					</label>
				)}

				<Calendar
					className={cx('calendar', {
						none: isStart,
					})}
					minDate={new Date()}
					maxDate={task.maxDate ? task.maxDate : ''}
					onChange={(value, e) => handleSetBegin(value, e)}
				/>
			</div>
			<div className={cx('end-container')} onFocus={handleOpenEnd}>
				<input
					ref={(value) => (inputRef.current[1] = value)}
					id="end-date"
					name="endDate"
					className={cx('date-task')}
					defaultValue={endDate}
				></input>
				{endDate ? (
					''
				) : (
					<label className={cx('date-label')} htmlFor="end-date" onClick={handleClick}>
						<FontAwesomeIcon icon={faCalendar} />
						<span className={cx('date-label-content')}>End date</span>
					</label>
				)}
				<Calendar
					className={cx('calendar', {
						none: isEnd,
					})}
					minDate={task.minDate}
					onChange={(value, e) => handleSetEnd(value, e)}
				/>
			</div>
		</div>
	);
}

export default DateSchedule;
