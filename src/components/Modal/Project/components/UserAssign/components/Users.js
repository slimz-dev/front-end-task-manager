import { useContext, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Users.module.scss';
import Img from '~/components/Img/Img';
import { UserAssignContext } from '../context/UserProvider';
import { DepartmentContext } from '~/pages/App/pages/Project/contexts/DepartmentProvider/DepartmentProvider';
import { TaskAssignContext } from '../../../context/TaskAssignProvider';

const cx = classNames.bind(styles);
function Users() {
	const containerRef = useRef();
	const task = useContext(TaskAssignContext);
	const assign = useContext(UserAssignContext);
	const department = useContext(DepartmentContext);
	useEffect(() => {
		const clicked = (e) => {
			if (assign.isOpen) {
				if (!containerRef.current.contains(e.target)) {
					assign.setIsOpen(false);
				}
			}
		};
		document.addEventListener('click', clicked, true);
		return () => {
			document.removeEventListener('click', clicked, true);
		};
	}, []);
	return (
		<div className={cx('wrapper')} ref={containerRef}>
			{/* <div className={cx('header')}>
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
			</div> */}
			<div className={cx('user-wrapper')}>
				{department.departmentUsers.map((user) => {
					return (
						<div
							className={cx('select-all')}
							key={user._id}
							id={user._id}
							onClick={(e) => assign.handleSelected(e)}
						>
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
							<div multi="true" className={cx('plus-icon')}>
								{task.assignees.find((assignees) => assignees.id === user._id)
									? '-'
									: '+'}
							</div>
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
