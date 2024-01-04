import { useContext, useEffect, useRef, useState } from 'react';
import useClass from '~/hooks/useClass';
import styles from '../../UserGroupUpdate.module.scss';
import useUpdate from '../../hooks/useUpdate';

function UserInfo() {
	const cx = useClass(styles);

	const user = useUpdate();
	function handleChange(e) {
		const id = e.target.value;
		const name = e.target.id;
		user.setData((prev) => ({
			...prev,
			[name]: id,
		}));
	}

	return (
		<div className={cx('task-name')}>
			<select
				id="group"
				name="task"
				className={cx('input-task')}
				onChange={(e) => handleChange(e)}
				placeholder="Enter your department name"
			>
				<option>Select your group...</option>
				{user.group.map((group, index) => {
					return <option key={index}>{group.name}</option>;
				})}
			</select>
			<select
				id="department"
				name="task"
				className={cx('input-task')}
				placeholder="Enter your department name"
				onChange={(e) => handleChange(e)}
			>
				<option>Select your department...</option>
				{user.department.map((department, index) => {
					return <option key={index}>{department.name}</option>;
				})}
			</select>
			<label htmlFor="group" className={cx('task-label', 'blur')}>
				Group select
			</label>
			<label htmlFor="department" className={cx('department-label')}>
				Department select
			</label>
		</div>
	);
}

export default UserInfo;
