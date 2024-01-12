import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import config from '~/config';
import useClass from '~/hooks/useClass';
import styles from '../../../Project.module.scss';
function BackButton() {
	const navigate = useNavigate();
	const cx = useClass(styles);
	function handleShow() {
		navigate(config.routes.Projects);
	}
	return (
		<div onClick={handleShow} className="btn btn-primary  mt-n1" style={{ cursor: 'pointer' }}>
			<FontAwesomeIcon icon={faAngleLeft} size="xl" />
			<span className={cx('ml-10')}>Turn back</span>
		</div>
	);
}

export default BackButton;
