import { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';

//context
import { UserContext } from '~/contexts/userProvider';

//render component
import Img from '~/components/Img/Img';

//css
import styles from '../../../Settings.module.scss';

//call api
import { changeInfo } from '~/services/changeInfoService';

const cx = classNames.bind(styles);

function Info() {
	const user = useContext(UserContext);
	const [currentUser, setCurrentUser] = useState({});
	const [img, setImg] = useState('');

	useEffect(() => {
		setCurrentUser(user.info);
	}, [user]);

	useEffect(() => {
		setImg(currentUser.img);
	}, [currentUser]);

	function handleSubmit() {
		const fetchApi = async () => {
			const result = await changeInfo(currentUser);
			console.log(result);
		};
		fetchApi();
	}

	function handleSetImg(e) {
		const currentImg = e.target.files[0];
		const imgUrl = URL.createObjectURL(currentImg);
		setImg(imgUrl);
		const propName = e.target.name;
		if (currentImg instanceof Blob) {
			const imgReader = new FileReader();
			imgReader.readAsDataURL(currentImg);
			imgReader.onload = () => {
				setCurrentUser((prev) => ({
					...prev,
					[propName]: imgReader.result,
				}));
			};
			imgReader.onerror = () => {
				console.log('error');
			};
		}
	}

	function handleChange(e) {
		const propName = e.target.name;
		setCurrentUser((prev) => ({
			...prev,
			[propName]: e.target.value,
		}));
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
										value={currentUser.biography ? currentUser.biography : ''}
										id="inputBio"
										name="biography"
										placeholder="Tell something about yourself"
									></textarea>
								</div>
							</div>
							<div className="col-md-4">
								<div className="text-center">
									<Img
										alt="Chris Wood"
										src={img ? img : ''}
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
											name="img"
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
									value={currentUser.firstName ? currentUser.firstName : ''}
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
									onChange={(e) => handleChange(e)}
									name="lastName"
									value={currentUser.lastName ? currentUser.lastName : ''}
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
								onChange={(e) => handleChange(e)}
								name="secondEmail"
								value={currentUser.secondEmail ? currentUser.secondEmail : ''}
								type="email"
								className="form-control"
								id="inputEmail4"
								placeholder="Email"
							/>
						</div>
						<div className={cx('form-group', 'mg-2')}>
							<label htmlFor="inputAddress">Address</label>
							<input
								onChange={(e) => handleChange(e)}
								name="address"
								value={currentUser.address ? currentUser.address : ''}
								type="text"
								className="form-control"
								id="inputAddress"
								placeholder="Write your address"
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
