import { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './DateScheldule.module.scss';
import Calendar from './Calendar';

const cx = classNames.bind(styles);
function DateSchedule() {
	const inputRef = useRef([]);
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
	return (
		<div className={cx('date-wrapper')}>
			<div className={cx('start-container')}>
				<input
					ref={(value) => (inputRef.current[0] = value)}
					id="start-date"
					name="startDate"
					className={cx('margin-right', 'date-task')}
					value={startDate}
					// onChange={(e) => handleChange(e)}
				></input>
				<label
					className={cx('date-label')}
					htmlFor="start-date"
					onClick={(e) => handleClick(e)}
				>
					Start date
				</label>
			</div>
			<div className={cx('end-container')}>
				<input
					ref={(value) => (inputRef.current[1] = value)}
					id="end-date"
					name="endDate"
					className={cx('date-task')}
					value={endDate}
					// onChange={(e) => handleChange(e)}
				></input>
				<label className={cx('date-label')} htmlFor="end-date">
					End date
				</label>
			</div>
		</div>
	);
}

export default DateSchedule;
