import CalendarModal from '~/components/Modal/CalendarModal/CalendarModal';
import ModalProvider from '~/contexts/ModalProvider';
import CalendarRender from './component/Calendar/CalendarRender';
import CalendarProvider from './context/CalendarProvider/CalendarProvider';

function Calendar() {
	return (
		<>
			<CalendarProvider>
				<ModalProvider>
					<CalendarProvider>
						<CalendarRender />
						<CalendarModal />
					</CalendarProvider>
				</ModalProvider>
			</CalendarProvider>
		</>
	);
}

export default Calendar;
