import { useContext } from 'react';

//Component render
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

//css
import styles from '../../ChangePermission.module.scss';

//hook
import useClass from '~/hooks/useClass';
import usePermission from '../../hooks/usePermission';

//api

//context
import { GroupContext } from '~/pages/App/pages/AdminConfiguration/components/components/managerGroupComponents/GroupsTable/context/GroupProvider';
import { updateGroup } from '~/services/GroupService/updateGroupService';
import { AdminContext } from '~/pages/App/pages/AdminConfiguration/contexts/AdminProvider.js/AdminProvider';

function FooterButton() {
	const cx = useClass(styles);
	const modal = useContext(GroupContext);
	const totalGroup = useContext(AdminContext);
	const permission = usePermission();
	function hideModal() {
		modal.handleClose();
	}
	function submitGroup() {
		if (permission.name.name) {
			const data = {
				...permission.permission,
				...permission.name,
			};
			const updateThisGroup = async (groupId) => {
				const result = await updateGroup(groupId, data);
				toast.success('Successfully updated ', {
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
			const groupId = modal.groupInfo._id;
			const existGroup = totalGroup.groupsRender.find(
				(group) => group.name === permission.name.name && group._id !== groupId
			);
			if (!existGroup) {
				updateThisGroup(groupId);
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
				Update group
			</Button>
		</div>
	);
}

export default FooterButton;
