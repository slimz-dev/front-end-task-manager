import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from '../../Settings.module.scss';
import { SelectContext } from '../../contexts/selectProvider';

const cx = classNames.bind(styles);

function SettingSelect() {
	const select = useContext(SelectContext);
	function handleChange() {
		select.setContent(!select.content);
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
				</div>
			</div>
		</div>
	);
}

export default SettingSelect;
