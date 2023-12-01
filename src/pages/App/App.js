import Sidebar from './components/Sidebar';
import Calendar from './components/contentComponents/Calendar';
import Appointment from './components/contentComponents/Appointment';
import TaskReview from './components/contentComponents/TaskReview';
import FooterCopyright from './components/footerComponents/FooterCopyright';
import Message from './components/headerComponents/Message';
import Notification from './components/headerComponents/Notification';
import UserSetting from './components/headerComponents/UserSetting';
import SearchTask from './components/headerComponents/SearchTask';
function App() {
	return (
		<div className="wrapper">
			<Sidebar />
			<div className="main">
				<nav className="navbar navbar-expand navbar-dark bg-white">
					<a className="sidebar-toggle d-flex mr-2">
						<i className="hamburger align-self-center"></i>
					</a>
					<SearchTask />
					<div className="navbar-collapse collapse">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item dropdown">
								<Message />
							</li>
							<li className="nav-item dropdown">
								<Notification />
							</li>
							<li className="nav-item dropdown">
								<UserSetting />
							</li>
						</ul>
					</div>
				</nav>

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

				<FooterCopyright />
			</div>
		</div>
	);
}

export default App;
