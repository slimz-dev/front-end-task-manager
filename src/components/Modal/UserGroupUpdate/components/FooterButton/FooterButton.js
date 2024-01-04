import { useContext } from 'react';
import useClass from '~/hooks/useClass';
import useUpdate from '../../hooks/useUpdate';
//css
import styles from '../../UserGroupUpdate.module.scss';

//component
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

//context
import { ModalContext } from '~/contexts/ModalProvider';
import { changeAssign } from '~/services/UserService/changeAssignGroupService';
import { UserContext } from '~/pages/App/pages/AdminConfiguration/components/components/managerUserComponents/UsersTable/context/UserProvider';

//api

function FooterButton() {
	const cx = useClass(styles);
	const user = useContext(UserContext);
	const list = useUpdate();

	function hideModal() {
		user.handleClose();
	}
	function submitAssign() {
		if (Object.keys(list.data).length === 2) {
			const existGroup = list.group.find((group) => group.name === list.data.group);
			const existDepartment = list.department.find(
				(department) => department.name === list.data.department
			);

			const updateUser = async (userId, data) => {
				const result = await changeAssign(userId, data);
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
			if (existGroup && existDepartment) {
				const userId = user.currentUser;
				console.log(existGroup._id);
				const data = {
					role: existGroup._id,
					department: existDepartment._id,
				};
				updateUser(userId, data);
			}
		} else {
			toast.warn('Both fields required ❗', {
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
			<Button onClick={submitAssign} className={cx('btn-pill', 'create-btn')}>
				Update department
			</Button>
		</div>
	);
}

export default FooterButton;
