import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './ContentLayout.module.scss';
const cx = classNames.bind(styles);
function ContentLayout({ children }) {
	return <div className={cx('wrapper-content')}>{children}</div>;
}

export default ContentLayout;
