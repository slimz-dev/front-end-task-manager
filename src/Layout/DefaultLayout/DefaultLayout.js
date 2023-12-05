import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ToggleProvider from './context/ToggleProvider';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
	return (
		<div className={cx('wrapper')}>
			<ToggleProvider>
				<Sidebar />
				<div className={cx('main')}>
					<Header />
					{children}
					<Footer />
				</div>
			</ToggleProvider>
		</div>
	);
}

export default DefaultLayout;
