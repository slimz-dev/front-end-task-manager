import { useRef, useState } from 'react';
import useClass from '~/hooks/useClass';
import styles from '../../CreateDepartment.module.scss';
import useUpdate from '../../hooks/useUpdate';

function GroupName() {
	const cx = useClass(styles);
	const department = useUpdate();
	const inputRef = useRef();
	const [isValue, setIsValue] = useState(false);

	function handleClick() {
		inputRef.current.focus();
	}
	function handleCheckBlur(e) {
		if (e.target.value) {
			setIsValue(true);
		} else {
			setIsValue(false);
		}
	}
	return (
		<div className={cx('task-name')}>
			<input
				onBlur={(e) => handleCheckBlur(e)}
				ref={inputRef}
				id="task"
				name="task"
				className={cx('input-task')}
				placeholder="Enter your department name"
				value={department.name.name ? department.name.name : ''}
				onChange={(e) => department.handleSetName(e)}
			></input>
			<label
				onClick={handleClick}
				htmlFor="task"
				className={cx('task-label', {
					blur: isValue,
				})}
			>
				Department name
			</label>
		</div>
	);
}

export default GroupName;
