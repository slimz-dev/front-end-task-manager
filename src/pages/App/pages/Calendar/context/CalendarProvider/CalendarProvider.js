import { createContext, useContext, useEffect, useState } from 'react';
import { UserContext } from '~/contexts/userProvider';
import { getMyCalendar } from '~/services/CalendarService/getMyCalendarService';

export const CalendarContext = createContext();

function CalendarProvider({ children }) {
	const user = useContext(UserContext);
	const [title, setTitle] = useState('');
	const [data, setData] = useState([]);
	const [date, setDate] = useState('');
	const [isAllDay, setIsAllDay] = useState(false);
	const [hour, setHour] = useState('');
	const [minutes, setMinutes] = useState('');
	useEffect(() => {
		const fetchCalendar = async () => {
			const result = await getMyCalendar(user.info._id);
			setData(result.data.calendar);
		};
		if (user.info) {
			fetchCalendar();
		}
	}, [user.info]);
	const value = {
		date,
		setDate,
		title,
		setTitle,
		isAllDay,
		setIsAllDay,
		hour,
		setHour,
		minutes,
		setMinutes,
		data,
		setData,
	};
	return <CalendarContext.Provider value={value}>{children}</CalendarContext.Provider>;
}

export default CalendarProvider;
