import { useContext } from 'react';
import { ModalContext } from '~/contexts/ModalProvider';
import { Button } from 'react-bootstrap';
import styles from '../../AddGroups.module.scss';
import useClass from '~/hooks/useClass';
import usePermission from '../../hooks/usePermission';
import { toast } from 'react-toastify';
import { postNewGroup } from '~/services/GroupService/newGroupService';

function FooterButton() {
	const cx = useClass(styles);
	const modal = useContext(ModalContext);
	const permission = usePermission();
	function hideModal() {
		modal.setShow(false);
	}
	function submitGroup() {
		if (permission.name.name) {
			const data = {
				...permission.name,
				...permission.permission,
			};
			const createNewGroup = async () => {
				const result = await postNewGroup(data);
				console.log(result);
				toast.success('Successfully created ', {
					position: 'top-center',
					autoClose: 1500,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'dark',
				});
			};

			createNewGroup();
		} else {
			toast.warn('Group name required ❗', {
				position: 'top-center',
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark',
			});
		}
	}
	return (
		<div
			className={cx('d-flex', 'justify-content-between', 'flex-row')}
			style={{ width: '100%' }}
		>
			<Button onClick={hideModal} className={cx('btn-pill', 'cancel-btn')}>
				Cancel
			</Button>
			<Button onClick={submitGroup} className={cx('btn-pill', 'create-btn')}>
				Create task
			</Button>
		</div>
	);
}

export default FooterButton;
