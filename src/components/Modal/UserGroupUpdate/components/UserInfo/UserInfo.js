import { useRef, useState } from 'react';
import useClass from '~/hooks/useClass';
import styles from '../../UserGroupUpdate.module.scss';
import useUpdate from '../../hooks/useUpdate';

function UserInfo() {
	const cx = useClass(styles);
	const user = useUpdate();
	const inputRef = useRef();

	function handleClick() {
		inputRef.current.focus();
	}

	return (
		<div className={cx('task-name')}>
			<select
				ref={inputRef}
				id="group"
				name="task"
				className={cx('input-task')}
				placeholder="Enter your department name"
			>
				{user.group.map((group, index) => {
					return <option key={index}>{group.name}</option>;
				})}
			</select>
			<select
				ref={inputRef}
				id="department"
				name="task"
				className={cx('input-task')}
				placeholder="Enter your department name"
			>
				{user.department.map((department, index) => {
					return <option key={index}>{department.name}</option>;
				})}
			</select>
			<label onClick={handleClick} htmlFor="group" className={cx('task-label', 'blur')}>
				Group select
			</label>
			<label onClick={handleClick} htmlFor="department" className={cx('department-label')}>
				Department select
			</label>
		</div>
	);
}

export default UserInfo;
