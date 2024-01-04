import { useState, useContext, useRef } from 'react';
import classNames from 'classnames/bind';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//context
import { ModalContext } from '~/contexts/ModalProvider';

//component render
import { Modal, Button } from 'react-bootstrap';

//css
import styles from './CreateDepartment.module.scss';

import FooterButton from './components/FooterButton/FooterButton';
import PermissionProvder from './context/UpdateProvider';
import GroupName from './components/GroupName/GroupName';

const cx = classNames.bind(styles);
const CreateDepartment = () => {
	const modal = useContext(ModalContext);
	function hideModal() {
		modal.setShow(false);
	}

	return (
		<Modal show={modal.show} onHide={hideModal} size="lg" centered className={cx('effect')}>
			<PermissionProvder>
				<Modal.Header>
					<Modal.Title>
						<strong>Adding department</strong>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className={cx('d-flex', 'flex-column')}>
					<GroupName />
				</Modal.Body>
				<Modal.Footer>
					<FooterButton />
				</Modal.Footer>
			</PermissionProvder>
		</Modal>
	);
};

export default CreateDepartment;
