import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './HeaderSidebarLayout.module.scss';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ToggleProvider from './context/ToggleProvider';
const cx = classNames.bind(styles);
function HeaderSidebarLayout({ children }) {
	return (
		<div className={cx('wrapper')}>
			<ToggleProvider>
				<Sidebar />
				<div className={cx('main')}>
					<Header />
					{children}
				</div>
			</ToggleProvider>
		</div>
	);
}

export default HeaderSidebarLayout;
