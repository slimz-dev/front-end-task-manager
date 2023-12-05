import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Img from '~/components/Img/Img';
import styles from '../../../Settings.module.scss';
import { getMe } from '~/services/getMeService';
import { changeInfo } from '~/services/changeInfoService';
const cx = classNames.bind(styles);

function Info() {
	const [currentUser, setCurrentUser] = useState({});
	const [data, setData] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const [img, setImg] = useState('');
	const [secondEmail, setSecondEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [biography, setBiography] = useState('');
	const [address, setAddress] = useState('');

	useEffect(() => {
		const fetchApi = async () => {
			console.log('hi');
			const result = await getMe();
			setCurrentUser(result.data[0]);
			setSecondEmail(currentUser.secondEmail ? currentUser.secondEmail : '');
			setFirstName(currentUser.firstName ? currentUser.firstName : '');
			setLastName(currentUser.lastName ? currentUser.lastName : '');
			setAddress(currentUser.address ? currentUser.address : '');
			setBiography(currentUser.biography ? currentUser.biography : '');
		};
		fetchApi();
	}, []);

	useEffect(() => {
		if (Object.keys(data).length > 0) {
			const fetchApi = async () => {
				const result = await changeInfo(data);
				console.log(result);
			};
			fetchApi();
		}
	}, [isSubmit]);

	function handleSubmit() {
		setIsSubmit(!isSubmit);
	}

	function handleSetImg(e) {
		const imgUrl = URL.createObjectURL(e.target.files[0]);
		setImg(imgUrl);
	}

	function handleChange(e) {
		switch (e.target.name) {
			case 'biography': {
				setBiography(e.target.value);
				setData((prev) => ({
					...prev,
					biography: biography,
				}));
				break;
			}
			case 'email': {
				setSecondEmail(e.target.value);
				setData((prev) => ({
					...prev,
					secondEmail: secondEmail,
				}));
				break;
			}
			case 'firstName': {
				setFirstName(e.target.value);
				setData((prev) => ({
					...prev,
					firstName: firstName,
				}));
				break;
			}
			case 'lastName': {
				setLastName(e.target.value);
				setData((prev) => ({
					...prev,
					lastName: lastName,
				}));
				break;
			}
			default: {
				setAddress(e.target.value);
				setData((prev) => ({
					...prev,
					address: address,
				}));
				break;
			}
		}
	}
	return (
		<div className="tab-pane fade show active" id="account" role="tabpanel">
			<div className="card">
				<div className="card-header">
					<h5 className="card-title mb-0">Public info</h5>
				</div>
				<div className="card-body">
					<form>
						<div className="row">
							<div className="col-md-8">
								<div className="form-group">
									<label htmlFor="inputUsername">Username</label>
									<input
										type="text"
										className="form-control"
										id="inputUsername"
										placeholder="Username"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="inputUsername">Biography</label>
									<textarea
										onChange={(e) => handleChange(e)}
										rows="2"
										className="form-control"
										value={biography}
										id="inputBio"
										name="biography"
										placeholder={
											biography ? biography : 'Tell something about yourself'
										}
									></textarea>
								</div>
							</div>
							<div className="col-md-4">
								<div className="text-center">
									<Img
										alt="Chris Wood"
										src={img}
										className="rounded-circle img-responsive mt-2"
										width="128"
										height="128"
									/>
									<div className="mt-2">
										<label
											htmlFor="avatar"
											className={cx('btn btn-primary', 'hover')}
										>
											<i className="fas fa-upload"></i> Upload
										</label>
										<input
											onChange={(e) => handleSetImg(e)}
											id="avatar"
											type="file"
											accept="image/png, image/jpeg"
											className={cx('none')}
										/>
									</div>
									<small>
										For best results, use an image at least 128px by 128px in
										.jpg format
									</small>
								</div>
							</div>
						</div>

						<button type="submit" className="btn btn-primary">
							Save changes
						</button>
					</form>
				</div>
			</div>

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
									onChange={(e) => handleChange(e)}
									value={firstName}
									name="firstName"
									type="text"
									className="form-control"
									id="inputFirstName"
									placeholder={firstName ? firstName : 'First name'}
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputLastName">Last name</label>
								<input
									onChange={(e) => handleChange(e)}
									name="lastName"
									value={lastName}
									type="text"
									className="form-control"
									id="inputLastName"
									placeholder={lastName ? lastName : 'Last name'}
								/>
							</div>
						</div>
						<div className={cx('form-group', 'mg-2')}>
							<label htmlFor="inputEmail4">Email</label>
							<input
								onChange={(e) => handleChange(e)}
								name="email"
								value={secondEmail}
								type="email"
								className="form-control"
								id="inputEmail4"
								placeholder={secondEmail ? secondEmail : 'Email'}
							/>
						</div>
						<div className={cx('form-group', 'mg-2')}>
							<label htmlFor="inputAddress">Address</label>
							<input
								onChange={(e) => handleChange(e)}
								name="address"
								value={address}
								type="text"
								className="form-control"
								id="inputAddress"
								placeholder={address ? address : 'Write your address'}
							/>
						</div>

						<div onClick={handleSubmit} className={cx('btn btn-primary', 'hover')}>
							Save changes
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Info;
