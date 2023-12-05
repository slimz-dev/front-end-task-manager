import Calendar from './components/contentComponents/Calendar';
import Appointment from './components/contentComponents/Appointment';
import TaskReview from './components/contentComponents/TaskReview';
function App() {
	return (
		<>
			<main className="content">
				<div className="container-fluid p-0">
					<div className="row">
						<Calendar />
						<Appointment />
					</div>
					<div className="row">
						<TaskReview />
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
