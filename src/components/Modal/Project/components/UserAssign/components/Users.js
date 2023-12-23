import { useContext } from 'react';
import { TotalUsers } from '~/pages/App/pages/Member/context/TotalUsersProvider';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Users.module.scss';
import Img from '~/components/Img/Img';

const cx = classNames.bind(styles);
function Users() {
	const total = useContext(TotalUsers);
	return (
		<div className={cx('wrapper')}>
			<div className={cx('header')}>
				<div className={cx('header-icon')}>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</div>
				<input className={cx('input')} placeholder="Search people" />
			</div>
			<div className={cx('select-all')}>
				<div className={cx('user-info')}>
					<div className={cx('img')}>
						<Img src="" className={cx('img-sizing')} />
					</div>
					<div className={cx('title')}>Everyone</div>
				</div>
				<div className={cx('plus-icon')}>+</div>
			</div>
			<div className={cx('user-wrapper')}>
				{total.users.map((user) => {
					return (
						<div className={cx('select-all')}>
							<div className={cx('user-info')}>
								<div className={cx('img')}>
									<Img
										src={user.img}
										width="24px"
										height="24px"
										className={cx('img-sizing')}
									/>
								</div>
								<div className={cx('title')}>{`${user.firstName} ${
									user.lastName ? user.lastName : ''
								}`}</div>
							</div>
							<div className={cx('plus-icon')}>+</div>
						</div>
					);
				})}
			</div>
			<div className={cx('footer')}>
				<span>Click + to select multiple</span>
			</div>
		</div>
	);
}

export default Users;
