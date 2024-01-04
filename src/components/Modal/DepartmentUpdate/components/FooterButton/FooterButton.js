import { useContext } from 'react';
import useClass from '~/hooks/useClass';
import useUpdate from '../../hooks/useUpdate';
//css
import styles from '../../UpdateDepartment.module.scss';

//component
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

//context
import { ModalContext } from '~/contexts/ModalProvider';
import { DepartmentContext } from '~/pages/App/pages/AdminConfiguration/contexts/DepartmentProvider/DepartmentProvider';

//api
import { postNewDepartment } from '~/services/DepartmentService/newDepartmentService';
import { updateDepartment } from '~/services/DepartmentService/updateDepartmentService';
import { ActionContext } from '~/pages/App/pages/AdminConfiguration/components/components/managerDepartmentComponents/DepartmentsTable/context/ActionProvider';

function FooterButton() {
	const cx = useClass(styles);
	const departmentCurrent = useContext(ActionContext);
	const totalDepartments = useContext(DepartmentContext);
	const modal = useContext(ModalContext);
	const department = useUpdate();
	function hideModal() {
		modal.setShow(false);
	}
	function submitDepartment() {
		if (department.name.name) {
			const existDepartment = totalDepartments.departmentsRender.find((thisDep) => {
				return (
					thisDep.name === department.name.name &&
					thisDep._id !== departmentCurrent.departmentInfo._id
				);
			});
			const updateCurrentDepartment = async (departmentId, data) => {
				const result = await updateDepartment(departmentId, data);
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
			if (!existDepartment) {
				const data = {
					...department.name,
				};
				const departmentId = departmentCurrent.departmentInfo._id;
				updateCurrentDepartment(departmentId, data);
			} else {
				toast.warn('Department name existed ❗', {
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
			toast.warn('Department name required ❗', {
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
			<Button onClick={submitDepartment} className={cx('btn-pill', 'create-btn')}>
				Update department
			</Button>
		</div>
	);
}

export default FooterButton;
