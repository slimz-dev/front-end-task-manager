import { useContext, useRef, useState } from 'react';
import useClass from '~/hooks/useClass';
import { GroupContext } from '~/pages/App/pages/AdminConfiguration/components/GroupsTable/context/GroupProvider';
import styles from '../../ChangePermission.module.scss';
import usePermission from '../../hooks/usePermission';
function GroupName() {
	const modal = useContext(GroupContext);
	const cx = useClass(styles);
	const permission = usePermission();
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
				placeholder="Enter your group name"
				value={modal.groupInfo?.name ? modal.groupInfo?.name : ''}
				onChange={(e) => permission.handleSetName(e)}
			></input>
			<label onClick={handleClick} htmlFor="task" className={cx('task-label', 'blur')}>
				Group name
			</label>
		</div>
	);
}

export default GroupName;
