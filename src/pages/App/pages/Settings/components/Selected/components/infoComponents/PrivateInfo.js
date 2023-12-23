import { useContext } from 'react';
import classNames from 'classnames/bind';

//context
import { InfoContext } from '../../contexts/InfoContext/infoProvider';

//css
import styles from '../../../../Settings.module.scss';

const cx = classNames.bind(styles);

function PrivateInfo() {
	const info = useContext(InfoContext);
	return (
		<div className="card">
			<div className="card-header">
				<h5 className="card-title mb-0">Private info</h5>
			</div>
			<div className="card-body">
				<form>
					<div className="form-row">
						<div className="form-group col-md-6">
							<label htmlFor="inputFirstName">First name</label>
							<input
								onChange={(e) => info.handleChange(e)}
								value={info.currentUser.firstName ? info.currentUser.firstName : ''}
								name="firstName"
								type="text"
								className="form-control"
								id="inputFirstName"
								placeholder="First name"
							/>
						</div>
						<div className="form-group col-md-6">
							<label htmlFor="inputLastName">Last name</label>
							<input
								onChange={(e) => info.handleChange(e)}
								name="lastName"
								value={info.currentUser.lastName ? info.currentUser.lastName : ''}
								type="text"
								className="form-control"
								id="inputLastName"
								placeholder="Last name"
							/>
						</div>
					</div>
					<div className={cx('form-group', 'mg-2')}>
						<label htmlFor="inputEmail4">Email</label>
						<input
							onChange={(e) => info.handleChange(e)}
							name="secondEmail"
							value={info.currentUser.secondEmail ? info.currentUser.secondEmail : ''}
							type="email"
							className="form-control"
							id="inputEmail4"
							placeholder="Email"
						/>
					</div>
					<div className={cx('form-group', 'mg-2')}>
						<label htmlFor="inputAddress">Address</label>
						<input
							onChange={(e) => info.handleChange(e)}
							name="address"
							value={info.currentUser.address ? info.currentUser.address : ''}
							type="text"
							className="form-control"
							id="inputAddress"
							placeholder="Write your address"
						/>
					</div>

					<div
						onClick={info.handleSubmitPrivate}
						className={cx('btn btn-primary', 'hover')}
					>
						Save changes
					</div>
				</form>
			</div>
		</div>
	);
}

export default PrivateInfo;
