import { useRef, useState } from 'react';
import useClass from '~/hooks/useClass';
import styles from '../../UpdateDepartment.module.scss';
import useUpdate from '../../hooks/useUpdate';

function GroupName() {
	const cx = useClass(styles);
	const department = useUpdate();
	const inputRef = useRef();

	function handleClick() {
		inputRef.current.focus();
	}

	return (
		<div className={cx('task-name')}>
			<input
				ref={inputRef}
				id="task"
				name="task"
				className={cx('input-task')}
				placeholder="Enter your department name"
				value={department.name.name ? department.name.name : ''}
				onChange={(e) => department.handleSetName(e)}
			></input>
			<label onClick={handleClick} htmlFor="task" className={cx('task-label', 'blur')}>
				Department name
			</label>
		</div>
	);
}

export default GroupName;
