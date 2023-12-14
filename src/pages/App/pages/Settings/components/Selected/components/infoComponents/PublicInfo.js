import { useContext } from 'react';
import classNames from 'classnames/bind';

//context
import { InfoContext } from '../../contexts/InfoContext/infoProvider';

//render component
import Img from '~/components/Img/Img';

//css
import styles from '../../../../Settings.module.scss';

const cx = classNames.bind(styles);

function PublicInfo() {
	const info = useContext(InfoContext);
	return (
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
									onChange={(e) => info.handleChange(e)}
									name="userName"
									type="text"
									className="form-control"
									id="inputUsername"
									placeholder="Username"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="inputUsername">Biography</label>
								<textarea
									onChange={(e) => info.handleChange(e)}
									rows="2"
									className="form-control"
									value={
										info.currentUser.biography ? info.currentUser.biography : ''
									}
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
									src={info.img ? info.img : ''}
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
										onChange={(e) => info.handleSetImg(e)}
										id="avatar"
										type="file"
										name="img"
										accept="image/png, image/jpeg"
										className={cx('none')}
									/>
								</div>
								<small>
									For best results, use an image at least 128px by 128px in .jpg
									format
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
	);
}

export default PublicInfo;
