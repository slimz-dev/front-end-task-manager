import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import useClass from '~/hooks/useClass';
import { DepartmentContext } from '../../../contexts/DepartmentProvider/DepartmentProvider';
import styles from '../../../Project.module.scss';
function BackButton() {
	const cx = useClass(styles);
	const department = useContext(DepartmentContext);
	function handleShow() {
		department.setIsDepartment(true);
	}
	return (
		<div onClick={handleShow} className="btn btn-primary  mt-n1" style={{ cursor: 'pointer' }}>
			<FontAwesomeIcon icon={faAngleLeft} size="xl" />
			<span className={cx('ml-10')}>Turn back</span>
		</div>
	);
}

export default BackButton;
