import { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../../Settings.module.scss';
import { SelectContext } from '../../contexts/selectProvider';
import DeleteConfirmation from '~/components/Modal/deleteModal';
import { deleteMe } from '~/services/deleteAccountService';

const cx = classNames.bind(styles);

function SettingSelect() {
	const select = useContext(SelectContext);
	const [displayModal, setDisplayModal] = useState(false);
	const [modalConfig, setModalConfig] = useState({});
	function handleChange() {
		select.setContent(!select.content);
	}
	function handleDelete() {
		setDisplayModal(true);
		setModalConfig({
			message: 'Are you sure you want to delete ?',
			hideModal: () => setDisplayModal(false),
			confirmModal: async () => {
				const result = await deleteMe();
				console.log(result);
			},
		});
	}
	return (
		<div className="col-md-3 col-xl-2">
			<div className="card">
				<div className="card-header">
					<h5 className="card-title mb-0">Profile Settings</h5>
				</div>

				<div className="list-group list-group-flush" role="tablist">
					<div
						className={cx('list-group-item list-group-item-action', 'hover', {
							active: select.content,
						})}
						data-toggle="list"
						href="#account"
						role="tab"
						onClick={handleChange}
					>
						Account
					</div>
					<div
						className={cx('list-group-item list-group-item-action', 'hover', {
							active: !select.content,
						})}
						data-toggle="list"
						role="tab"
						onClick={handleChange}
					>
						Password
					</div>
					{/* <div
						className={cx('list-group-item list-group-item-action', 'hover')}
						data-toggle="list"
						href="#"
						role="tab"
						onClick={handleDelete}
					>
						Delete account
					</div> */}
				</div>
			</div>
			<DeleteConfirmation showModal={displayModal} {...modalConfig} />
		</div>
	);
}

export default SettingSelect;
