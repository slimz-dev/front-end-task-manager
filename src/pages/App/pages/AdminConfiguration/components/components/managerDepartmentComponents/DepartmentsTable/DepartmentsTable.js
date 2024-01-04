import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

//css
import styles from '../../../../AdminConfiguration.module.scss';

//Component render
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faXmark } from '@fortawesome/free-solid-svg-icons';

//context
import { ActionContext } from './context/ActionProvider';

import { DepartmentContext } from '../../../../contexts/DepartmentProvider/DepartmentProvider';
import UpdateDepartment from '~/components/Modal/DepartmentUpdate/UpdateDepartment';

const cx = classNames.bind(styles);

function DepartmentsTable() {
	const groups = useContext(DepartmentContext);
	const modal = useContext(ActionContext);
	return (
		<>
			<table
				id="datatables-clients"
				className={cx('table table-striped', 'bordered')}
				style={{ width: '100%' }}
			>
				<thead>
					<tr>
						<th className={cx('bordered')}>#</th>
						<th className={cx('w-70rem', 'bordered')}>Name</th>
						<th className={cx('bordered', 'align-center')}>Change</th>
						<th className={cx('bordered', 'align-center')}>Delete</th>
					</tr>
				</thead>
				<tbody>
					{groups.departmentsRender.map((department, index) => {
						const departmentId = department._id;
						return (
							<tr key={departmentId} id={departmentId}>
								<td className={cx('bordered')}>{index + 1}</td>
								<td className={cx('bordered')}>{department.name}</td>
								<td
									className={cx('bordered', 'align-center', 'black-color')}
									onClick={(e) => modal.handleSetShow(e)}
								>
									<FontAwesomeIcon icon={faPencil} />
								</td>
								<td
									className={cx('bordered', 'align-center', 'red-color')}
									onClick={(e) => modal.handleDelete(e)}
								>
									<FontAwesomeIcon icon={faXmark} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<UpdateDepartment />
		</>
	);
}

export default DepartmentsTable;
