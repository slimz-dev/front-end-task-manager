import { useState, useContext, useRef } from 'react';
import classNames from 'classnames/bind';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//context
import { ModalContext } from '~/contexts/ModalProvider';

//component render
import { Modal, Button } from 'react-bootstrap';

//css
import styles from './UserGroupUpdate.module.scss';

import FooterButton from './components/FooterButton/FooterButton';
import UpdateProvider from './context/UpdateProvider';
import UserInfo from './components/UserInfo/UserInfo';

import { UserContext } from '~/pages/App/pages/AdminConfiguration/components/components/managerUserComponents/UsersTable/context/UserProvider';

const cx = classNames.bind(styles);
const UserGroupUpdate = () => {
	const modal = useContext(UserContext);
	function hideModal() {
		modal.handleClose();
	}

	return (
		<Modal show={modal.show} onHide={hideModal} size="lg" centered className={cx('effect')}>
			<UpdateProvider>
				<Modal.Header>
					<Modal.Title>
						<strong>Update user</strong>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className={cx('d-flex', 'flex-column')}>
					<UserInfo />
				</Modal.Body>
				<Modal.Footer>
					<FooterButton />
				</Modal.Footer>
			</UpdateProvider>
		</Modal>
	);
};

export default UserGroupUpdate;
