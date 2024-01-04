import { useContext, useEffect, useRef, useState } from 'react';
import useClass from '~/hooks/useClass';
import { GroupContext } from '~/pages/App/pages/AdminConfiguration/components/components/managerGroupComponents/GroupsTable/context/GroupProvider';
import styles from '../../ChangePermission.module.scss';
import usePermission from '../../hooks/usePermission';
function GroupName() {
	const modal = useContext(GroupContext);
	const cx = useClass(styles);
	const [isFirst, setIsFirst] = useState(true);
	const permission = usePermission();
	const inputRef = useRef();

	function handleClick() {
		inputRef.current.focus();
	}

	function handleChangeName(e) {
		setIsFirst(false);
		permission.handleSetName(e);
	}
	useEffect(() => {
		permission.handleSetName(inputRef.current);
	}, []);
	return (
		<div className={cx('task-name')}>
			<input
				ref={inputRef}
				id="task"
				name="task"
				className={cx('input-task')}
				placeholder="Enter your group name"
				value={isFirst ? modal.groupInfo.name : permission.name.name}
				onChange={(e) => handleChangeName(e.target)}
			></input>
			<label onClick={handleClick} htmlFor="task" className={cx('task-label', 'blur')}>
				Group name
			</label>
		</div>
	);
}

export default GroupName;
