import { useState, useContext } from 'react';
import { ModalContext } from '~/contexts/ModalProvider';
import { Modal, Button } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './inviteModal.module.scss';
import { sendEmail } from '~/services/EmailService/newPersonalTaskService';

const cx = classNames.bind(styles);
const InviteModal = () => {
	const modal = useContext(ModalContext);
	const [email, setEmail] = useState('');
	function handleChange(e) {
		const inviteEmail = e.target.value;
		setEmail(inviteEmail);
	}
	function hideModal() {
		modal.setShow(false);
	}

	async function submitForm() {
		const regex =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (email.match(regex)) {
			const data = {
				email: email,
			};
			await sendEmail(data);
		} else {
			console.log('no');
		}
	}
	return (
		<Modal show={modal.show} onHide={hideModal} size="sm" centered className={cx('effect')}>
			<Modal.Header>
				<Modal.Title>
					<strong>Add your team</strong>
					<br />
					<span className={cx('sub-header')}>
						Start collaborating today by adding your team
					</span>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<input
					className={cx('input', 'msg-padding')}
					placeholder="Email"
					value={email}
					onChange={(e) => handleChange(e)}
				></input>
			</Modal.Body>
			<Modal.Footer className={cx('d-flex', 'justify-content-between')}>
				<Button variant="danger" onClick={hideModal} className={cx('pill-button')}>
					Cancel
				</Button>
				<Button variant="success" onClick={submitForm} className={cx('pill-button')}>
					Invite
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default InviteModal;
