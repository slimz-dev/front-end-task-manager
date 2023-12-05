import { useContext } from 'react';
import Message from './components/Message';
import Notification from './components/Notification';
import UserSetting from './components/UserSetting';
import SearchTask from './components/SearchTask';
import { Toggle } from '~/Layout/DefaultLayout/context/ToggleProvider';

function Header() {
	const toggleSidebar = useContext(Toggle);
	return (
		<nav className="navbar navbar-expand navbar-dark bg-white">
			<div className="sidebar-toggle d-flex mr-2" onClick={toggleSidebar.handleToggled}>
				<i className="hamburger align-self-center"></i>
			</div>
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
	);
}

export default Header;
