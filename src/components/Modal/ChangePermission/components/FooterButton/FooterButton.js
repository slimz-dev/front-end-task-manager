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
import { postNewGroup } from '~/services/GroupService/newGroupService';

//context
import { GroupContext } from '~/pages/App/pages/AdminConfiguration/components/GroupsTable/context/GroupProvider';

function FooterButton() {
	const cx = useClass(styles);
	const modal = useContext(GroupContext);
	const permission = usePermission();
	function hideModal() {
		modal.handleClose();
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
				Update group
			</Button>
		</div>
	);
}

export default FooterButton;
