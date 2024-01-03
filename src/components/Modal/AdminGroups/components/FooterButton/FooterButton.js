import { useContext } from 'react';
import { ModalContext } from '~/contexts/ModalProvider';
import { Button } from 'react-bootstrap';
import styles from '../../AddGroups.module.scss';
import useClass from '~/hooks/useClass';
import usePermission from '../../hooks/usePermission';
import { toast } from 'react-toastify';
import { postNewGroup } from '~/services/GroupService/newGroupService';
import { AdminContext } from '~/pages/App/pages/AdminConfiguration/contexts/AdminProvider.js/AdminProvider';

function FooterButton() {
	const cx = useClass(styles);
	const totalGroups = useContext(AdminContext);
	const modal = useContext(ModalContext);
	const permission = usePermission();
	function hideModal() {
		modal.setShow(false);
	}
	function submitGroup() {
		if (permission.name.name) {
			const existGroup = totalGroups.groupsRender.find((group) => {
				return group.name === permission.name.name;
			});
			const createNewGroup = async (data) => {
				const result = await postNewGroup(data);
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
			if (!existGroup) {
				const data = {
					...permission.name,
					...permission.permission,
				};
				createNewGroup(data);
			} else {
				toast.warn('Group name existed ❗', {
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
				Add group
			</Button>
		</div>
	);
}

export default FooterButton;
